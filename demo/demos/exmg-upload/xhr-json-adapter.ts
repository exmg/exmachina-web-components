import {UploadAdapter, UploadConfig} from '@exmg/exmg-upload/src/upload/types';

interface FileUploadPayload {
  filename: string;
  mimetype: string;
  data: string | ArrayBuffer | null;
  fileSize: number;
  reduceSize: boolean;
  cacheTimeOutInSeconds?: number;
}

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

class XHRJSONUploadAdapter implements UploadAdapter {
  config: UploadConfig;

  constructor(config: UploadConfig) {
    this.config = config;
  }

  async upload(file: File, progressCallback: (progress: number) => void): Promise<string> {
    const onProgress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        progressCallback(progress);
      }
    };

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', onProgress);

    const base64 = await toBase64(file);
    const payload = {
      filename: file.name,
      mimetype: file.type,
      data: base64,
      fileSize: file.size,
      reduceSize: false,
    } as FileUploadPayload;

    return new Promise<string>((resolve, reject) => {
      const {uploadUrl} = this.config;

      if (!uploadUrl) reject(new Error(`Upload url not found`));
      xhr.open('POST', uploadUrl!, true);
      for (const key in this.config.headers || {}) {
        if (Object.prototype.hasOwnProperty.call(this.config.headers, key)) {
          xhr.setRequestHeader(key, this.config.headers![key]);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`Upload failed with status ${xhr.status}`));
          }
        }
      };

      xhr.onerror = () => {
        reject(new Error('Upload failed due to network error'));
      };

      xhr.send(JSON.stringify(payload));
    });
  }
}

export {XHRJSONUploadAdapter as UploadAdapter};

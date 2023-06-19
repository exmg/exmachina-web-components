import { UploadAdapter, UploadConfig } from '../types.js';

class XHRUploadAdapter implements UploadAdapter {
  config: UploadConfig;
  xhr: XMLHttpRequest;

  constructor(config: UploadConfig) {
    this.config = config;
    this.xhr = new XMLHttpRequest();
  }

  abort() {
    this.xhr.abort();
  }

  async upload(file: File, progressCallback: (progress: number) => void): Promise<string> {
    const onProgress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        progressCallback(Math.round(percentage));
      }
    };

    const { xhr } = this;

    xhr.upload.addEventListener('progress', onProgress);

    const formData = new FormData();
    formData.append('filename', file.name);
    formData.append('file', file);

    return new Promise<string>((resolve, reject) => {
      const { uploadUrl } = this.config;

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
      xhr.send(formData);
    });
  }
}

export { XHRUploadAdapter as UploadAdapter };

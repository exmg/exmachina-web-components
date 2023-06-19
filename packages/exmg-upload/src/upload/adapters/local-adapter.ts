import { UploadAdapter } from '../types.js';

class LocalStorageUploadAdapter implements UploadAdapter {
  private async readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsDataURL(file);
    });
  }

  async upload(file: File, progressCallback: (progress: number) => void): Promise<string> {
    progressCallback(0);
    const fileDataUrl = await this.readFileAsDataURL(file);
    localStorage.setItem(file.name, fileDataUrl);
    progressCallback(100);
    return file.name;
  }
}

export { LocalStorageUploadAdapter as UploadAdapter };

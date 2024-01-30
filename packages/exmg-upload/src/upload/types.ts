export interface UploadAdapter {
  upload(file: File, progressCallback: (progress: number) => void): Promise<string>;
  abort?: () => void;
}

export interface UploadConfig {
  uploadUrl?: string;
  customAdapterPath?: string;
  headers?: { [key: string]: string };
  responseType?: '' | 'json' | 'text' | 'blob' | 'arraybuffer';
}

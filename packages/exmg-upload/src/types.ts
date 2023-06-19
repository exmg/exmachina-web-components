export interface FileData {
  id: string;
  url?: string;
  file: File;
  invalid: boolean;
  error: string;
  status: FileUploadState;
  progress?: number;
}

export type FileUploadState = 'UPLOADING' | 'UPLOADED' | 'INVALID' | 'WARNING';

export enum FileUploadError {
  INVALID_SIZE = 'File size too large',
  INVALID_TYPE = 'Invalid file type',
  INVALID_AMOUNT = 'Max amount of files exceeded',
  INVALID_MULTIPLE = 'Multiple files not allowed',
  INVALID_RESOLUTION = 'Image resulution is not valid',
  SERVER_ERROR = 'Server error occured',
}

export interface FileUploadConfig {
  uploadUrl: string;
  formUpload?: boolean;
}

declare global {
  interface Window {
    uploadDefaults: {
      customAdapterPath?: string;
      uploadUrl?: string;
      headers?: { [key: string]: string };
    };
  }
}

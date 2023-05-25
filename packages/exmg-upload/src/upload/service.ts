import {UploadAdapter, UploadConfig} from './types';
import {LocalStorageUploadAdapter} from './adapters/local-adapter.js';
import {XHRUploadAdapter} from './adapters/xhr-adapter.js';
import {XHRJSONUploadAdapter} from './adapters/xhr-json-adapter.js';

class UploadService {
  private adapter: UploadAdapter;

  constructor(destination: 'xhr' | 'xhr-json' | 'local', config?: UploadConfig) {
    switch (destination) {
      case 'local':
        this.adapter = new LocalStorageUploadAdapter();
        break;
      case 'xhr':
        this.adapter = new XHRUploadAdapter(config!);
        break;
      case 'xhr-json':
        this.adapter = new XHRJSONUploadAdapter(config!);
        break;
      default:
        throw new Error(`Unknown upload destination: ${destination}`);
    }
  }

  async upload(file: File, progressCallback: (progress: number) => void): Promise<string> {
    return this.adapter.upload(file, progressCallback);
  }

  abort() {
    this.adapter.abort && this.adapter.abort();
  }
}

export {UploadService};

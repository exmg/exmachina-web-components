import { UploadAdapter, UploadConfig } from './types.js';

async function instantiateClass(path?: string, config?: UploadConfig): Promise<UploadAdapter> {
  if (!path) {
    throw new Error(`Class UploadAdapter path not set.`);
  }
  const { UploadAdapter } = await import(path);

  if (typeof UploadAdapter === 'function') {
    return new UploadAdapter(config);
  } else {
    throw new Error(`Class UploadAdapter not found.`);
  }
}

class UploadService {
  private adapter: UploadAdapter;

  constructor(adapter: UploadAdapter) {
    this.adapter = adapter;
  }

  async upload(file: File, progressCallback: (progress: number) => void): Promise<string> {
    return this.adapter.upload(file, progressCallback);
  }

  abort() {
    this.adapter.abort && this.adapter.abort();
  }

  static async create(destination: 'xhr' | 'local' | 'custom', config?: UploadConfig): Promise<UploadService> {
    let adapter: UploadAdapter;
    switch (destination) {
      case 'local':
        adapter = await instantiateClass('./adapters/local-adapter.js', config);
        break;
      case 'xhr':
        adapter = await instantiateClass('./adapters/xhr-adapter.js', config);
        break;
      case 'custom':
        adapter = await instantiateClass(config?.customAdapterPath, config);
        break;
      default:
        throw new Error(`Unknown upload destination: ${destination}`);
    }

    return new UploadService(adapter);
  }
}

export { UploadService };

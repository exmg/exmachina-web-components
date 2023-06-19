export const isMimeType = (value: string) => {
  const mimeTypeRegex = /^[a-zA-Z]+\/[a-zA-Z0-9+\-.]+(\*?)$/;
  return mimeTypeRegex.test(value);
};

/**
 * Checks if the type of a file is valid based on the accepted types.
 *
 * @param file - The file object to check.
 * @param accept - A comma-separated list of accepted types.
 * @returns True if the file type is valid, false otherwise.
 */
export const isTypeValidExtension = (file: File, accept: string) => {
  if (accept.trim() === '') return true;
  const acceptedTypes = new Set(accept.split(','));
  const fileExtensionRegExp = /\.[^.]+$/;
  const name = file.name;
  const type = file.type;
  const hasFileExtension = fileExtensionRegExp.test(name);
  const [fileExtension] = !hasFileExtension ? [undefined] : fileExtensionRegExp.exec(name) ?? [];
  return acceptedTypes.has(type) || (fileExtension && acceptedTypes.has(fileExtension));
};

/**
 * Checks if the size of a file is valid based on the maximum size.
 *
 * @param size - The size of the file in bytes.
 * @param maxSize - The maximum size allowed, with a digital unit (e.g., "10MB").
 * @returns True if the file size is valid, false otherwise.
 * @throws Error if the maximum size is invalid.
 */
export const isSizeValid = (size: number, maxSize: string) => {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  // Extract the size from the digital unit
  const extracted = maxSize.split(/^([\d.]+)\s*(b|kb|mb|gb)$/i).filter((x) => x);
  if (!extracted) {
    throw new Error('Invalid max size set');
  }
  const power = sizes.indexOf(extracted[1].toUpperCase());
  return +extracted[0] * Math.pow(1024, power) > size;
};

/**
 * Formats a byte size into a human-readable string.
 *
 * @param bytes - The size in bytes to format.
 * @returns The formatted size string.
 */
export const formatBytes = (bytes: number) => {
  if (!bytes) return '0 Bytes';
  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Checks if a file is an image based on its type.
 *
 * @param file - The file object to check.
 * @returns True if the file is an image, false otherwise.
 */
export const isImage = (file: File) => {
  if (!file) {
    return;
  }
  return file.type.startsWith('image');
};

export const isCorrectResolution = (image: File, resolution: string) => {
  if (resolution.split('x').length !== 2) {
    throw new Error('Incorrect fixed resultion format, should be formatted like "600x400"');
  }
  const [width, height] = resolution.split('x');
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const correct = img.naturalWidth === parseInt(width, 10) && img.naturalHeight === parseInt(height, 10);
      resolve(correct);
      URL.revokeObjectURL(img.src);
    };
    const objectURL = URL.createObjectURL(image);
    img.src = objectURL;
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Error reading aspect ratio'));
    };
  });
};

import {
  argbFromHex,
  themeFromSourceColor,
  sourceColorFromImage,
  applyTheme,
} from '@material/material-color-utilities';

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

export const setupTheme = async () => {
  const imageUrl = '/demo/src/assets/exmg-img-1.jpeg'; // Replace with your image URL
  loadImage(imageUrl)
    .then((image) => {
      processImage(image);
    })
    .catch((error) => {
      console.error('Error loading image:', error);
    });
};

export const processImage = async (image: HTMLImageElement) => {
  // Get the theme from a hex color
  //   const theme = themeFromSourceColor(argbFromHex('#0e1ddd'), [
  //     {
  //       name: 'custom-1',
  //       value: argbFromHex('#ff0000'),
  //       blend: true,
  //     },
  //   ]);

  const sourceColor = await sourceColorFromImage(image);

  // Get the theme from a hex color
  const theme = themeFromSourceColor(sourceColor);

  // Print out the theme as JSON
  console.log(JSON.stringify(theme, null, 2));

  // Check if the user has dark mode turned on
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply the theme to the body by updating custom properties for material tokens
  applyTheme(theme, { target: document.body, dark: systemDark });
};

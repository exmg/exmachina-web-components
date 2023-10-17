import {
  themeFromSourceColor,
  sourceColorFromImage,
  applyTheme as aTheme,
  argbFromHex,
} from '@material/material-color-utilities';

let theme: any;

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

export const setupTheme = async (dark: boolean) => {
  const imageUrl = '/demo/src/assets/exmg-img-1.jpeg'; // Replace with your image URL
  loadImage(imageUrl)
    .then((image) => {
      processImage(image, dark);
    })
    .catch((error) => {
      console.error('Error loading image:', error);
    });
};

export const processImage = async (image: HTMLImageElement, dark: boolean) => {
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
  theme = themeFromSourceColor(sourceColor, [
    {
      name: 'custom-1',
      value: argbFromHex('#ff0000'),
      blend: true,
    },
  ]);

  // Print out the theme as JSON
  console.log(JSON.stringify(theme, null, 2));

  applyTheme(dark);
};

export const applyTheme = (dark: boolean) => {
  // Apply the theme to the body by updating custom properties for material tokens
  aTheme(theme, { target: document.body, dark, paletteTones: [10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 99] });
};

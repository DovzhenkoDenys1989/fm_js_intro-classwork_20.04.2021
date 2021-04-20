function uniqueizeArray(arr) {
  if(!Array.isArray(arr)){
    throw new TypeError();
  }
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}

const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

const nums1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 44, 5, 6];
const nums2 = [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 0, 0];

// Создать массив, содержащий уникальные элементы из предыдущих массивов

const unique = [...new Set([...nums1, ...nums2])];

const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: "cm",
    },
    width: {
      value: 56.5,
      scale: "cm",
    },
  },
  model: "Samsung",
  brightness: 200,
  contrast: 100,
  color: "black",
  dpi: 250,
  resolution: "4K",
};

console.log(monitor.sizes.height.value);

function getDiagonal(monitor) {
  monitor.sizes.height.value;
  monitor.sizes.width.value;
}

//const monitorBright = monitor.brightness;

/*
  Из brightness, dpi, color получите константы с названиями
  monitorBrightness, monitorDpi, monitorColor
*/

const {
  brightness: monitorBrightness,
  dpi: monitorDpi,
  color: monitorColor,
} = monitor;

const { brightness, dpi, color } = monitor;

console.log(brightness, dpi, color);

/*
BAD
const { sizes } = monitor;
const { height, width } = sizes;
const { value } = height;
*/

// Получить widthScale, hightScale
const {
  sizes: {
    height: { 
      value: hightValue, 
      scale: hightScale,
    },
    width: { 
      value: widthValue, 
      scale: widthScale,
    },
  },
} = monitor;

console.log(`Hight: ${hightValue}, Width: ${widthValue}`);

console.log(monitor);
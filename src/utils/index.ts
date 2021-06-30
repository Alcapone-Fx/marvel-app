export const getButtonClassNameByDisabledCondition = (condition: boolean) =>
  `${
    condition
      ? 'bg-gray-300 text-gray-900 cursor-not-allowed'
      : 'bg-blue-400 text-white'
  } mr-8 p-3 rounded-lg w-32`;

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const isInvalidValue = (value: number | string | boolean) =>
  !value && typeof value !== 'number' && typeof value !== 'boolean';

export const getFullObject = (object: Object) => {
  const copy = { ...object };
  const objectEntries = Object.entries(object);

  objectEntries.forEach(([key, value]) => {
    isInvalidValue(value) && delete copy[key];
  });

  return copy;
};

export const toggleItemInArray = (array, item) => {
  return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
};

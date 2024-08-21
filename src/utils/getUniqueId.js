export const generateUniqueId = (baseId, value) => {
  return `${baseId}-${value}-${Math.random().toString(36).slice(2, 11)}`;
};

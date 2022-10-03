export const isObjectEmptyNullOrUndefined = object => {
  if (object === null || typeof object === 'undefined') {
    return true;
  }
  return Object.keys(object).length === 0;
};

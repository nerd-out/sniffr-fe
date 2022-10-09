export const isObjectEmptyNullOrUndefined = object => {
  if (object === null || typeof object === 'undefined') {
    return true;
  }
  return Object.keys(object).length === 0;
};

export const isListEmptyNullOrUndefined = list => {
  if (list === null || typeof list === 'undefined') {
    return true;
  }
  return list.length === 0;
};

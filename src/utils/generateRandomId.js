export const generateRandomId = () =>
  Math.random().toString(36).substring(2, 8) +
  Date.now().toString().substring(9);

// Автоматическое добавление id
export const assignRandomId = obj => ({...obj, id: generateRandomId()});

export const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString('en-AU')} ${date.toLocaleTimeString(
    'en-AU'
  )}`;
};

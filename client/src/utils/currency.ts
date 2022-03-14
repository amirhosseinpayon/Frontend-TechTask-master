export const currency = ({
  value = 100,
  locale = "de-DE",
  style = "currency",
  currency = "EUR",
}) => {
  const formatter = new Intl.NumberFormat(locale, {
    style,
    currency,
  });
  return formatter.format(value / 100);
};

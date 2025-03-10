export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export const typingOnlyNumber = (e) => {
  e.target.value = e.target.value.replace(/[^0-9.]/g, '');
};

export const currencyFormatter = new Intl.NumberFormat('ko');

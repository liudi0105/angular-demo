function clone<T>(source: T): T {
  return JSON.parse(JSON.stringify(source));
}

function range(startOrEnd?: number, end?: number): number {
  if (typeof startOrEnd === 'undefined' && typeof end === 'undefined') {
    return range(1);
  }
  if (typeof end === 'undefined') {
    return range(0, startOrEnd);
  }
  return Math.round(Math.random() * (end - startOrEnd) + startOrEnd);
}

function randomTruth() {
  return !!range(1);
}

function isNull(obj) {
  return !obj && obj !== 0;
}

function keys(obj: object) {
  return Object.keys(obj);
}

function values(obj: object) {
  if (isNull(obj)) {
    return null;
  }
  return keys(obj).map(v => obj[v]);
}

function queryString(obj: object): string {
  const s = Object.getOwnPropertyNames(obj)
    .reduce((a, b) => {
      const value = obj[b];
      if (value instanceof Array) {
        return value.reduce((x, y) => `${x}&${a}=${y}`);
      }
      return `${a}&${b}=${value}`;
    }, '')
    .substring(1);
  return s;
}

function debounce(fn, wait = 500, immediate: boolean = true) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    } else if (immediate) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}


const _ = {
  debounce,
  clone,
  queryString,
  range,
  randomTruth,
  isNull,
  keys,
  values
};

export default _;

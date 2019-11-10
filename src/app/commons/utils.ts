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

const _ = {
  clone,
  range,
  randomTruth
};

export default _;

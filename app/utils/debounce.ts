export default function debounce(cb: Function, timeOut: number = 1000) {
  let timer: NodeJS.Timeout | number;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, timeOut);
  };
}

export default function bidNowEval(name: string, value: number) {
  const errors: { [key: string]: string } = {};
  if (value <= 0) {
    errors[name] = "You can't bid 0 or less";
  }

  return errors;
}

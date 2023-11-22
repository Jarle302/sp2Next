export default function handleChange(callBack: Function) {
  return function (e: React.ChangeEvent<HTMLInputElement>) {
    callBack(e.target.value)
  }
}
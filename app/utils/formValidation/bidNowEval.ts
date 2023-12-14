

export default function closureWrapper(currentbid:number){
return function bidNowEval(name: string, value: number) {
  const errors: { [key: string]: string } = {};
  if (value <= 0) {
    errors[name] = "You can't bid 0 or less";
  }
  else if(value<=currentbid){
errors[name]= "You need to place bid that is higher then the current bid"
  } 

  return errors;
}
}
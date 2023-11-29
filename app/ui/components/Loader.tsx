//loader gotten from https://cssloaders.github.io/

const Loader = ({ className }: { className?: string }) => {
  return <span className={`loader ${className}`}></span>;
};
export default Loader;

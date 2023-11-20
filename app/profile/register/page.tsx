const Register = () => {
  return (
    <div className="max-w-[400px] m-auto">
    <h1 className="md:text-3xl text-2xl font-bold">Register</h1>
      <form className="flex flex-col w-2/4">
        <label htmlFor="email--register">email</label>
        <input type="email--register" name="email--register" id="email--register" />
        <label htmlFor="password--register">password</label>
        <input type="password--register" id="passwor--registerd" name="password--register" />
        <label htmlFor="repeat-password--register">Repeat your password</label>
        <input type="repeat-password--register" id="repeat-password--register" name="repeat-password--register" />
      </form>
      </div>
  
  );
}
export default Register
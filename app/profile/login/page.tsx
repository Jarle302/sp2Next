const Login = () => {
    return (
        <div className="max-w-[400px] m-auto">
        <h1 className="md:text-3xl text-2xl font-bold">Login</h1>
        <form className="flex flex-col">
        <label htmlFor="email--login">email</label>
        <input type="email--login" name="email--login" id="email--login" />
        <label htmlFor="password--login">password</label>
        <input type="password--login" id="password" name="password--login" />
        </form>
      </div>
    );
  }
  export default Login
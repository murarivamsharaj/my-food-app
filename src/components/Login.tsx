
import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { serviceLogin } from "../services/AuthService";
import { Link } from "react-router-dom";


function Login() {

  const { register, handleSubmit, reset } = useForm<LoginRequest>();

 const onSubmitLogics = async (data:LoginRequest) => {
      try {
            const response = await serviceLogin(data);
            alert("Login Success");
            console.log(response);
            reset();
        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />


      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />


      <button type="submit">Login</button>

      <br /><br />

      <p>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>

    </form>
  );
}

export default Login;

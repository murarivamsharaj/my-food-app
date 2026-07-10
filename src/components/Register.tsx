import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import "../Register.css";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmit = (data: RegisterRequest) => {
    console.log(data);
    reset();
  };

  return (
    <div className="register-page">

      <div className="register-container">

        <h1 className="register-title">
          Create Account
        </h1>

        <p className="register-subtitle">
          Join us and enjoy a seamless shopping experience.
        </p>

        <form
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className="input-group">

            <label className="input-label">
              Username
            </label>

            <input
              className="register-input"
              type="text"
              {...register("name")}
              placeholder="Enter your username"
            />

          </div>

          <div className="input-group">

            <label className="input-label">
              Password
            </label>

            <input
              className="register-input"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />

          </div>

          <div className="input-group">

            <label className="input-label">
              Email Address
            </label>

            <input
              className="register-input"
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />

          </div>

          <div className="input-group">

            <label className="input-label">
              Phone Number
            </label>

            <input
              className="register-input"
              type="tel"
              {...register("phone")}
              placeholder="Enter your phone number"
            />

          </div>

          <button
            className="register-btn"
            type="submit"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;

import styles from "./login.module.css";
import Logo from "../../images/logo.png";
import BikeMan from "../../images/bike.png";
import PasswordIcon from "../../images/eye1.png";
import PasswordIconClose from "../../images/eye-close.png";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="dms logo" className={styles.logo} />
        <span className={styles.logoText}>Dms</span>
      </div>

      <div className={styles.register}>
        <div className={styles.registerInfoContainer}>
          <img src={BikeMan} alt="bike man" className={styles.bike} />
          <div className={styles.registerInfo}>
            <h2>Let’s help you manage your riders and delivery systems.</h2>
            <p>
              Every logistics company whether it’s a multi-national branding
              corporation or a regular local deserves the basic standard
              necessities in achieving a high service delivery
            </p>
          </div>
          <Button url="/register" text="Get Started" />
        </div>
        <div className={styles.registerFormContainer}>
          <form className={styles.formWrapper}>
            <progress className={styles.progress} max="100" value="70">
              70%
            </progress>
            <div className={styles.formInfo}>
              <h2>You’re Welcome Back!</h2>
              <p>Enter the following information below</p>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Company Email Address"
                required
              />
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <img
                    className={styles.passwordIcon}
                    src={PasswordIcon}
                    alt="password icon"
                    onClick={togglePasword}
                  />
                ) : (
                  <img
                    className={styles.passwordIconClose}
                    src={PasswordIconClose}
                    alt="password icon"
                    onClick={togglePasword}
                  />
                )}
              </div>
            </div>
            <Link className={styles.forgotPasswordLink} to="/forgotpassword">
              Forgot Password?
            </Link>
            <div className={styles.account}>
              <p>
                Just joining us here?{" "}
                <Link className={styles.link} to="/register">
                  Register Now
                </Link>
              </p>
              <Button url="/dashboard" text="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

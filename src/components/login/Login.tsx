import React, { useContext, useRef, useState } from "react";
import LoginContext from "../../store/loginContext";
import langContextObj from "../../store/langContext";
import { images } from "../../constants";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { useTranslation } from "react-i18next";
import classes from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { login, LoginCredentials } from "../../services/loginService";

function LoginBox() {
  const loginCtx = useContext(LoginContext);
  const langCtx = useContext(langContextObj);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const [load, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userNameRef.current && passwordRef.current) {
      setLoading(true);
      const credentials: LoginCredentials = {
        email: userNameRef.current.value,
        password: passwordRef.current.value,
      };

      try {
        const response = await login(credentials);
        console.log(response);
        const responseString = JSON.stringify(response);

        // Armazene a string JSON no localStorage
        localStorage.setItem("account", responseString);

        if (response.status) {
          loginCtx.toggleLogin();

          setLoading(false);
          navigate("/");
        } else {

          setLoading(false);
          setErrorMessage(response.message);

          errorMessageRef.current?.setAttribute(
            "style",
            "display: inline-block;opacity: 1"
          );
        }
      } catch (error: any) {

        setLoading(false);
        setErrorMessage(error.message);
        errorMessageRef.current?.setAttribute(
          "style",
          "display: inline-block;opacity: 1"
        );
      }
    }
  };

  return (
    <div
      className={`${classes.container} ${langCtx.lang === "fa" ? classes.rtl : ""
        }`}
    >
      <div className={classes.loginBox}>
        <div className={classes.logo + " py-[4rem]"}>
          <br />
          <br />
          <img src={images.logo_f} alt="digikala" className="" />
          <br />
          <br />
        </div>
        <form onSubmit={loginHandler}>
          <Input
            ref={userNameRef}
            type={"text"}
            id={"userName"}
            placeholder={"admin@sistema"}
          />
          <Input
            ref={passwordRef}
            type={"password"}
            id={"pass"}
            placeholder={"******"}
          />

          <span ref={errorMessageRef} className={classes.errorMessage + ' mx-auto w-11/12 text-center'}>
            {errorMessage || t("errorMessage")}
          </span>
          {
            load ?

              <div className="flex justify-center w-full">

                <span>Entrando...</span>
                <br />
              </div>
              :
              <Button type="submit">
                <span>Entrar</span>
              </Button>
          }

          <Link className={classes.forgat_pass} to="/">
            {t("forgetPass")}
          </Link>
          <div className={classes.checkbox}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">{t("rememberMe")}</label>
          </div>
        </form>
      </div>

      <div className={classes.keyPic}>
        <img
          src={require("../../assets/images/Revenue-cuate.svg").default}
          alt="illustrator key"
        />
      </div>
    </div>
  );
}

export default LoginBox;

import React, { useContext } from "react";
import cl from "./Form.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

function Form({ buttonText, feedbackForm, registrationForm, login }) {
  return (
    <form className={cl.form}>
      <Input placeholder={"Имя"} />
      {(feedbackForm || registrationForm) && (
        <Input type={"email"} placeholder={"E-mail"} />
      )}
      {(login || registrationForm) && (
        <Input type={"password"} placeholder={"Пароль"} />
      )}
      {registrationForm && (
        <Input type={"password"} placeholder={"Повторите пароль"} />
      )}
      {feedbackForm && <Input placeholder={"Сообщение"} tag={"textarea"} />}
      <Button
        style={{ width: "100%" }}
        onClick={(e) => {
          feedbackForm ? e.preventDefault() : login(e);
        }}
      >
        {buttonText}
      </Button>
    </form>
  );
}

export default Form;

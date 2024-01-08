import React, { useContext } from "react";
import cl from "./Form.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

const Form = observer(
  ({ buttonText, feedbackForm, registrationForm, login }) => {
    const { input } = useContext(Context);

    return (
      <form className={cl.form}>
        <Input
          placeholder={"Имя"}
          value={input.name}
          onChange={(e) => input.setName(e.target.value)}
        />
        {(feedbackForm || registrationForm) && (
          <Input
            type={"email"}
            placeholder={"E-mail"}
            value={input.email}
            onChange={(e) => input.setEmail(e.target.value)}
          />
        )}
        {(login || registrationForm) && (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            value={input.password}
            onChange={(e) => input.setPassword(e.target.value)}
          />
        )}
        {registrationForm && (
          <Input
            type={"password"}
            placeholder={"Повторите пароль"}
            value={input.doublePassword}
            onChange={(e) => input.setDoublePassword(e.target.value)}
          />
        )}
        {feedbackForm && (
          <Input
            placeholder={"Сообщение"}
            tag={"textarea"}
            value={input.message}
            onChange={(e) => input.setMessage(e.target.value)}
          />
        )}
        <Button
          style={{ width: "100%" }}
          onClick={(e) => {
            feedbackForm ? input.cleanInputs(e) : login(e);
          }}
        >
          {buttonText}
        </Button>
      </form>
    );
  }
);

export default Form;

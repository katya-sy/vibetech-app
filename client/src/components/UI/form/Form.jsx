import React, { useContext } from "react";
import cl from "./Form.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

const Form = observer(
  ({ buttonText, feedbackForm, registrationForm, login }) => {
    const { input } = useContext(Context);
    const { register, handleSubmit, reset } = useForm();

    return (
      <form className={cl.form} onSubmit={handleSubmit()}>
        <Input
          placeholder={"Имя"}
          {...register("name")}
          // value={input.name}
          // onChange={(e) => input.setName(e.target.value)}
        />
        {(feedbackForm || registrationForm) && (
          <Input
            type={"email"}
            placeholder={"E-mail"}
            {...register("email")}
            // value={input.email}
            // onChange={(e) => input.setEmail(e.target.value)}
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
            // value={input.message}
            // onChange={(e) => input.setMessage(e.target.value)}
            {...register("message")}
          />
        )}
        <Button
          style={{ width: "100%" }}
          onClick={
            () => reset()
            //   (e) => {
            //   feedbackForm
            //     ? //  input.cleanInputs(e)
            //       reset()
            //     : login(e);
            // }
          }
        >
          {buttonText}
        </Button>
      </form>
    );
  }
);

export default Form;

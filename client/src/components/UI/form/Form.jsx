import React from "react";
import cl from "./Form.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

function Form({ button }) {
  return (
    <form className={cl.form}>
      <Input placeholder={"Имя"} />
      <Input type={"email"} placeholder={"E-mail"} />
      <Input placeholder={"Сообщение"} tag={"textarea"} />
      <Button style={{ width: "100%" }} onClick={(e) => e.preventDefault()}>
        {button}
      </Button>
    </form>
  );
}

export default Form;

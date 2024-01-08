import { makeAutoObservable } from "mobx";

export default class InputStore {
  constructor() {
    this._name = "";
    this._email = "";
    this._password = "";
    this._doublePassword = "";
    this._message = "";
    this._cleanInputs = (e) => {
      e.preventDefault();
      this.setName("");
      this.setEmail("");
      this.setPassword("");
      this.setDoublePassword("");
      this.setMessage("");
    };
    makeAutoObservable(this);
  }

  setName(name) {
    this._name = name;
  }

  setEmail(email) {
    this._email = email;
  }

  setPassword(password) {
    this._password = password;
  }

  setDoublePassword(doublePassword) {
    this._doublePassword = doublePassword;
  }

  setMessage(message) {
    this._message = message;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get doublePassword() {
    return this._doublePassword;
  }

  get message() {
    return this._message;
  }

  get cleanInputs() {
    return this._cleanInputs;
  }
}

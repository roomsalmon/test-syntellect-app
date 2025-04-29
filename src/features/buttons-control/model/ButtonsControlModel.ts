// Считаю, что использование стора здесь в целом излишне,
// но следую условию задачи + реализую четкую MVVM-модель

import { makeAutoObservable } from "mobx";

class ButtonsControlModel {
  value: string = "";

  constructor(initialValue?: string) {
    makeAutoObservable(this);
    if (initialValue) this.value = initialValue;
  }

  setValue = (value: string) => {
    this.value = value;
  };
}

export default ButtonsControlModel;

import { makeAutoObservable } from "mobx";

class Store {
  timer = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    console.log("ok");
    this.timer += 1;
  }
}

const myStore = new Store();

export default myStore;

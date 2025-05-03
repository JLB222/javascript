//Day 949
//6 - Finite State Automata 1: Traffic Lights - https://www.codewars.com/kata/649db66f7feaa30045d41d37/train/javascript

//forEach loop
class StateMachine {
    constructor({ init, transitions }) {
        this.state = init;
        transitions.forEach((el) => {
        this[el.method] = () => {
            if (this.state === el.current) {
            this.state = el.target
            }
        }
        })
    }
}


//forEach loop with object destructuring

class StateMachine {
    constructor({ init, transitions }) {
      this.state = init;
      transitions.forEach(({ method, current,  target }) => {
        this[method] = () => {
          if (this.state == current) {
            this.state = target;
          }
        };
      });
    }
}


//for of loop
class StateMachine {
    constructor({ init, transitions }) {
      this.state = init;
      for (let obj of transitions) {
        this[obj.method] = () => {
        if (this.state === obj.current) {
          this.state = obj.target
        }
      }
    }
  }
}
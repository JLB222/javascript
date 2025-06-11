//Day 988
//6 - Finite State Automata 1 - http://codewars.com/kata/649db66f7feaa30045d41d37/train/javascript
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

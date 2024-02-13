//Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

//alert( user.ref.name ); // ничего

//Создайте калькулятор
let calculator = {

  read(){
    let a = +prompt("a = ");
    let b = +prompt("b = ");

    this.a = a;
    this.b = b;
  },

  sum(){
    return this.a + this.b;
  },

  mul(){
    return this.a * this.b;
  }
}

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//Цепь вызовов
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep();
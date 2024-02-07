//Перепишите с использованием функции-стрелки
let ask = (question, yes, no) => {
  if (confirm(question)) return yes()
  else return no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);
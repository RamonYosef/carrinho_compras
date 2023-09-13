const formTodos = document.querySelector("#addTodos");

formTodos.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const Data = {
    nome: form.querySelector("[name=nome]").value,
    valor: form.querySelector("[name=valores]").value,
    qtd: form.querySelector("[name=qtd]").value,
    desc: form.querySelector("[name=desc]").value,
    check: (todoList.querySelectorAll("[name=check]").value = false),
  };

  todos.push(Data);
  list(todos);
});

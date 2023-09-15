const app = document.querySelector("#app");
const todoList = document.querySelector(".todo-list");
const todoListCheck = document.querySelector(".todo-list-check");

const myModal = new bootstrap.Modal("#myModal", {
  keyboard: false,
});

let todos = [
  {
    nome: "jhytjy5jy5j",
    valor: "900",
    qtd: "80",
    desc: "brgnrnrenryemn",
    check: false,
  },
];

function list(todos) {
  todoList.innerHTML = "";
  todoListCheck.innerHTML = "";

  console.log("opa list");

  let cont = 0;
  for (const task of todos) {
    const itemList = document.createElement("li");

    const itemNome = document.createElement("span");
    itemNome.innerHTML =
      "<br><strong>Nome do produto: </strong>" + task.nome + "<br>";

    const itemValor = document.createElement("span");
    itemValor.innerHTML =
      "<strong>valor do produto: </strong>" + task.valor + "<br>";

    const itemQtd = document.createElement("span");
    itemQtd.innerHTML =
      "<strong>Descrição do produto: </strong>" + task.desc + "<br>";

    const itemDesc = document.createElement("span");
    itemDesc.innerHTML =
      "<strong>quantidades desejadas: </strong>" + task.qtd + "<br>";

    const real = document.createElement("span");
    real.innerHTML = innerHTML =
      "<div class' row d-flex-justify-content-center '><b> Realizado <i class='bx bxs-badge-check bx-sm'></i> </b></div>";
    real.classList.add(
     "text-white",
     "row",
     "invisible",
     'fs-3'
     );

    const input = document.createElement("button");
    input.innerHTML = "verificar";
    input.classList.add(
      "check",
      "btn",
      "btn-success",
      "btn-sm",
      "mt-3",
      "btn-sm"
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "deletar";
    deleteBtn.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "mt-3",
      "del-btn",
      "ms-3"
    );

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Editar";
    editBtn.classList.add(
      "btn",
      "btn-info",
      "btn-sm",
      "edit-btn",
      "mt-3",
      "ms-3"
    );

    const btnBack = document.createElement("button");
    btnBack.innerHTML = "Voltar";
    btnBack.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "mt-3",
      "del-btn",
      "invisible",
      "btn-back"
    );

    itemList.append(real);
    itemList.append(itemNome);
    itemList.append(itemValor);
    itemList.append(itemQtd);
    itemList.append(itemDesc);
    itemList.append(btnBack);
    itemList.append(input);
    itemList.append(deleteBtn);
    itemList.append(editBtn);

    itemList.classList.add("mb-3", "p-3", "list_Item");
    itemList.setAttribute("data-index", cont);

    todoList.append(itemList);
    cont++;

    if (task.check === true) {
      itemList.classList.toggle("list_check");
      itemList.classList.toggle("text-white");
      input.classList.toggle("invisible");
      deleteBtn.classList.toggle("invisible");
      editBtn.classList.toggle("invisible");
      btnBack.classList.toggle("invisible");
      real.classList.toggle('invisible')
      todoListCheck.append(itemList);
    } else {
      todoList.append(itemList);
    }
  }

  todo_check();
  delete_itens();
  edit_itens();
  back_itens();
  submitEdit();
}

function todo_check() {
  const inputCheck = todoList.querySelectorAll(".check");
  for (const btn of inputCheck) {
    btn.addEventListener("click", function () {
      const index = btn.parentNode.dataset.index;

      const Data = {
        nome: todos[index].nome,
        valor: todos[index].valor,
        qtd: todos[index].qtd,
        desc: todos[index].desc,
        check: !todos[index].check,
      };
      todos[index] = Data;

      list(todos);
    });
  }
}

function back_itens() {
  const backButton = document.querySelectorAll(".btn-back");
  for (const btn of backButton) {
    btn.addEventListener("click", function () {
      const index = btn.parentNode.dataset.index;
      todos[index].check = !todos[index].check;

      list(todos);
    });
  }
}

function delete_itens() {
  const dlt = todoList.querySelectorAll(".del-btn");
  for (const btn of dlt) {
    btn.addEventListener("click", function (e) {
      const index = btn.parentNode.dataset.index;
      todos.splice(index, 1);
      list(todos);
    });
  }
}

function edit_itens() {
  const edt = todoList.querySelectorAll(".edit-btn");
  for (const btn of edt) {
    btn.addEventListener("click", function (e) {
      const index = btn.parentNode.dataset.index;

      const formEdit = document.querySelector("#editTodo");
      formEdit.querySelector("[name=item]").value = index;
      formEdit.querySelector("[name=nome]").value = todos[index].nome;
      formEdit.querySelector("[name=valores]").value = todos[index].valor;
      formEdit.querySelector("[name=qtd]").value = todos[index].qtd;
      formEdit.querySelector("[name=desc]").value = todos[index].desc;

      myModal.show();
    });
  }
}

function submitEdit() {
  const formEdit = document.querySelector("#editTodo");
  formEdit.addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const index = form.querySelector("[name=item]").value;
    const Data = {
      nome: form.querySelector("[name=nome]").value,
      valor: form.querySelector("[name=valores]").value,
      qtd: form.querySelector("[name=qtd]").value,
      desc: form.querySelector("[name=desc]").value,
      check: (todoList.querySelectorAll("[name=check]").value = false),
    };

    todos[index] = Data;
    list(todos);
    myModal.hide();
  });
}

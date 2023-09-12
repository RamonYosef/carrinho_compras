const app = document.querySelector("#app");
const todoList = document.querySelector(".todo-list");



const myModal = new bootstrap.Modal("#myModal", {
  keyboard: false,
});

let todos = [];

function list(todos) {
  todoList.innerHTML = "";

  let cont = 0;
  for (const task of todos) {
    const itemList = document.createElement("li");
    const itemNome = document.createElement("span");
    const itemValor = document.createElement("span");
    const itemDesc = document.createElement("span");
    const itemQtd = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    const input = document.createElement("input");

    input.setAttribute('type', 'checkbox')
    input.classList.add('check')


    itemNome.innerHTML =
      "<br><strong>Nome do produto: </strong>" + task.nome + "<br>";
    itemValor.innerHTML =
      "<strong>valor do produto: </strong>" + task.valor + "<br>";
    itemQtd.innerHTML =
      "<strong>Descrição do produto: </strong>" + task.desc + "<br>";
    itemDesc.innerHTML =
      "<strong>quantidades desejadas: </strong>" + task.qtd + "<br>";
    deleteBtn.innerHTML = "deletar";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "mt-3", "del-btn");
    (editBtn.innerHTML = "Editar"),
      editBtn.classList.add("btn", "btn-info", "btn-sm", "edit-btn", "mt-3","ms-3");

    itemList.append(input);
    itemList.append(itemNome);
    itemList.append(itemValor);
    itemList.append(itemQtd);
    itemList.append(itemDesc);
    itemList.append(deleteBtn);
    itemList.append(editBtn);
    

    itemList.classList.add("mb-3", "p-3",'list_Item');
    itemList.setAttribute("data-index", cont);

    function check_todos(){
      const checkTodos = todoList.querySelectorAll(".check");
      for (const btn of checkTodos) {
        btn.addEventListener('click', function(e){
          const index = btn.parentNode.dataset.index;
            itemList.classList.toggle('bg-success')
            
        
         
          
        })
        
      } 
    }

    

    todoList.append(itemList);
    cont++;
    console.log(cont);
  }

  check_todos();
  delete_itens();
  edit_itens();
  submitEdit();
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

function  edit_itens() {
  const edt = todoList.querySelectorAll(".edit-btn");
  for (const btn of edt) {
    btn.addEventListener("click", function(e){
        const index = btn.parentNode.dataset.index;

        const formEdit = document.querySelector("#editTodo");
        formEdit.querySelector('[name=item]').value = index
        formEdit.querySelector('[name=nome]').value = todos[index].nome
        formEdit.querySelector('[name=valores]').value = todos[index].valor
        formEdit.querySelector('[name=qtd]').value = todos[index].qtd
        formEdit.querySelector('[name=desc]').value = todos[index].desc

        myModal.show()
    })
  }
}

function submitEdit(){
    const formEdit = document.querySelector("#editTodo");
    formEdit.addEventListener("submit", function(e){
        e.preventDefault();

        const form = e.target;
        const index = form.querySelector('[name=item]').value
        const Data = {
          nome: form.querySelector('[name=nome]').value,
          valor: form.querySelector('[name=valores]').value,
          qtd: form.querySelector('[name=qtd]').value,
          desc: form.querySelector('[name=desc]').value,
        };

        todos[index] = Data
        list(todos)
        myModal.hide()
      
    })
}






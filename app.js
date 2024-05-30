window.addEventListener("load", function () {
  const toDolist = document.querySelector(".todo-list");
  const btn = document.querySelector(".btn");

  console.log(toDolist);

  function craeteAddTodo(text) {
    const li = document.createElement("li");

    li.innerText = text;
    li.classList.add("todo-item");

    li.addEventListener("click", deleteToDo);

    toDolist.append(li);
  }

  function deleteToDo() {
    this.addEventListener.remove("click", deleteToDo);
    this.remove();
  }

  function handlClick() {
    const input = document.querySelector(".input");
    const inputValue = input.value;

    console.log(inputValue);

    if (inputValue) {
      craeteAddTodo(inputValue);
      input.value = " ";
    } else {
      alert(" write input");
    }
  }

  btn.addEventListener("click", handlClick);
});

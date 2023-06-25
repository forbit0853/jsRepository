console.log('go');

const doc = document;

const
    forms = doc.forms.addTodoForm,
    formsEls = forms.elements,
    addTodoInput = forms.addTodoInput,
    addTodoBtn = forms.addTodoBtn;

const todoListEl = doc.querySelector('.todo-list')

const todos = [
    { id: 1, body: 'todo 1', comleted: false },
    { id: 2, body: 'todo 2', comleted: false },
    { id: 3, body: 'todo 3', comleted: false },
];

addTodoBtn.onclick = function (e) {
    e.preventDefauit();
    const text = addTodoInput.value.trim();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1

    if (!text) {
        return;
    }

    todos.push(createTodoObj(text, id));
    console.log(todos);

    addTodoInput.value = '';
}

function renderTodoList(todoList) {
    const todoItemEls = todoList.map((todo, index) => ` 
    <li class="todo-item" data-id="${ todo.id}">
    <span class="todo-item__index">${index + 1}</span>
    <label class="todo-item__input">
        <input type="checbox" name="completed">
    </label>
    <p class="todo-item__text">${todo.body}</p>
    <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
    </div>
</li>`);

    console.log(todoList);
    todoListEl.innerHTML = `
    <li class="todo-item">
    <span class="todo-item__index">1</span>
    <label class="todo-item__input">
        <input type="checbox" name="completed">
    </label>
    <p class="todo-item__text">todo 1</p>
    <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
    </div>
</li>
`
}


function createTodoObj(text, id) {
    const todoObj = {
        id,
        text,
        completed: false
    }

    return todoObj;
}
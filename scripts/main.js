
let todoList = [
    { task: "Купить молоко", done: false },
    { task: "Заплатить за интернет", done: true },
    { task: "Позвонить маме", done: false },
    { task: "Почитать книгу", done: false },
    { task: "Сделать домашнее задание", done: true },
    { task: "Посмотреть фильм", done: false },
    { task: "Помыть посуду", done: true },
    { task: "Погулять с собакой", done: false },
    { task: "Заказать пиццу", done: false },
    { task: "Посетить врача", done: true },
    { task: "Починить компьютер", done: false },
    { task: "Подарить цветы подруге", done: true },
    { task: "Поиграть в видеоигры", done: false },
    { task: "Послать резюме", done: true },
    { task: "Поехать в отпуск", done: false }
];

function core(arrList) {
    // выводим список объктов массива
    const list = document.querySelector('.list');

    list.innerHTML = ''; // очищаем старый массив

    const createElem = arrList.map(list => {
        const listItem = document.createElement('li');
        listItem.textContent = list.task;
        listItem.classList.add('list-item');
        if (list.done == true) {
            listItem.classList.add('list-item_done');
        }
        listItem.addEventListener('click', () => {
            if (list.done == false) {
                listItem.classList.add('list-item_done');
                list.done = true;
            } else if (list.done == true) {
                listItem.classList.remove('list-item_done');
                list.done = false;
            }
        });
        return listItem;
    });
    createElem.forEach(listItem => {
        list.appendChild(listItem);
    });
};
core(todoList);


// button "Create"
const btnCreate = document.querySelector('#create');
const inputTask = document.querySelector('.task-input');

const btnClickCreate = () => {
    const textFromInput = inputTask.value;
    todoList.unshift({ task: textFromInput, done: false });
    core(todoList);
}
btnCreate.addEventListener('click', btnClickCreate);


// filters
const filter = document.querySelector('.status');


// filter "all"
const btnAll = document.querySelector('#all');
const btnClickAll = () => {
    core(todoList);
}
btnAll.addEventListener('click', btnClickAll);


// filter "completed"
const btnCompleted = document.querySelector('#completed');
const btnClickCompleted = () => {
    const filterCompleted = todoList.filter(task => task.done == true);
    core(filterCompleted);
}
btnCompleted.addEventListener('click', btnClickCompleted);


// filter "uncompleted"
const btnUnCompleted = document.querySelector('#uncompleted');
const btnClickUCompleted = () => {
    const filterUnCompleted = todoList.filter(task => task.done == false);
    core(filterUnCompleted);
}
btnUnCompleted.addEventListener('click', btnClickUCompleted);
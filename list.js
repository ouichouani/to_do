


const input_task = document.getElementById("input_task");
const button = document.getElementById('add');
const container_tasks = document.getElementsByClassName("container_tasks")[0]
const container_tasks_done = document.getElementsByClassName("container_tasks_done")[0]
const task = document.getElementsByClassName('task')
const checkbox = document.getElementsByClassName('checkbox')
const task_text = document.getElementsByClassName('task_text')

let id_counter = 0


function add_to_container_tasks() {
    button.addEventListener('click', () => {
        container_tasks.innerHTML += `
                <div class="task">
                    <div class="checkbox"></div>
                    <p class='task_text'>${input_task.value}</p>
                </div>`
        input_task.value = '';
        mark_task()
    })
}


function romove_task_from_tasks_list(i) {
    for (j = i; j < container_tasks.childElementCount; j++) {
        try {
            task_text[j].innerHTML = task_text[j + 1].innerHTML
        } catch {
            continue;
        }
    }
    task_text[container_tasks.childElementCount - 1].textContent = ''
    try {
        task_text[container_tasks.childElementCount - 1].parentElement.remove()
    } catch {
        console.log('catch')
    }

}


function add_to_container_tasks_done(i) {
    container_tasks_done.innerHTML += `
    <div class="task">
            <div class="checkbox" style ='background-color : blue' checked></div>
            <p class='task_text_done'>${task_text[i].textContent}</p>
        </div>`

}


function mark_task() {
    for (let i = 0; i < container_tasks.childElementCount; i++) {

        checkbox[i].addEventListener('click', function () {
            add_to_container_tasks_done(i)
            romove_task_from_tasks_list(i)
        })
    }
}





add_to_container_tasks()
mark_task()

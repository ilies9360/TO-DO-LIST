

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

var form = document.getElementById("taskForm");
var taskList = document.getElementById("taskList");

afficherTasks();
form.addEventListener("submit", function (e) {
    e.preventDefault();

    var task = {
        titre: document.getElementById("titre").value,
        sousTitre: document.getElementById("sousTitre").value,
        message: document.getElementById("message").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    afficherTasks();
    form.reset();
});

function afficherTasks() {
    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        let  task = tasks[i];
        let index = i;

        let div = document.createElement("div");
        div.className = "task";

        if (tasks[index].completed) {
            div.className = "task completed";
        }

        div.innerHTML =
            "<h3>" + task.titre + "</h3>" +
            "<h4>" + task.sousTitre + "</h4>" +
            "<p>" + task.message + "</p>" +
            "<p><strong>Email :</strong> " + task.email + "</p>" +
            "<p><strong>Date :</strong> " + task.date + "</p>" +
            "<input type='checkbox'> Complétée <br>" +
            "<button>Supprimer</button>";

        let checkbox = div.getElementsByTagName("input")[0];
        checkbox.checked = tasks[index].completed;

        checkbox.addEventListener("change", function () {
            task.completed = this.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            afficherTasks();
        });

        let bouton = div.getElementsByTagName("button")[0];
        bouton.addEventListener("click", function () {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            afficherTasks();
        });

        
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskList.appendChild(div);
    }
}

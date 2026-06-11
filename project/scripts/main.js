document.addEventListener("DOMContentLoaded", function () {
    setupMenu();

    if (document.getElementById("timerDisplay")) {
        setupTimer();
        setupTasks();
        setupHabits();
        setupNotes();
    }
});

function setupMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
}

function setupTimer() {
    let interval = null;
    let secondsLeft = 25 * 60;
    const display = document.getElementById("timerDisplay");
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");

    function updateDisplay() {
        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    startButton.addEventListener("click", function () {
        if (interval !== null) {
            return;
        }

        interval = setInterval(function () {
            if (secondsLeft > 0) {
                secondsLeft--;
                updateDisplay();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Focus session complete. Take a short break.");
                secondsLeft = 25 * 60;
                updateDisplay();
            }
        }, 1000);
    });

    stopButton.addEventListener("click", function () {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        }
    });
}

function setupTasks() {
    const list = document.getElementById("taskList");
    const addButton = document.getElementById("addTaskBtn");
    let tasks = JSON.parse(localStorage.getItem("ww_tasks"));

    if (!tasks) {
        tasks = [
            { id: 1, name: "Study WDD131 Coursework" },
            { id: 2, name: "Review project requirements" }
        ];
    }

    function showTasks() {
        list.innerHTML = "";
        tasks.forEach(function (task) {
            const item = document.createElement("li");
            item.innerHTML = `<span>${task.name}</span><button type="button" data-id="${task.id}">✓</button>`;
            list.appendChild(item);
        });
        localStorage.setItem("ww_tasks", JSON.stringify(tasks));
    }

    addButton.addEventListener("click", function () {
        const name = prompt("Enter a task:");
        if (name && name.trim() !== "") {
            tasks.push({
                id: Date.now(),
                name: name.trim()
            });
            showTasks();
        }
    });

    list.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const id = Number(event.target.getAttribute("data-id"));
            tasks = tasks.filter(function (task) {
                return task.id !== id;
            });
            showTasks();
        }
    });

    showTasks();
}

function setupHabits() {
    const list = document.getElementById("habitList");
    const addButton = document.getElementById("addHabitBtn");
    let habits = JSON.parse(localStorage.getItem("ww_habits"));

    if (!habits) {
        habits = [
            { id: 1, title: "Read for 30 minutes" },
            { id: 2, title: "Take a daily walk" }
        ];
    }

    function showHabits() {
        list.innerHTML = "";
        habits.forEach(function (habit) {
            const item = document.createElement("li");
            item.innerHTML = `<span>${habit.title}</span><button type="button" data-id="${habit.id}">✕</button>`;
            list.appendChild(item);
        });
        localStorage.setItem("ww_habits", JSON.stringify(habits));
    }

    addButton.addEventListener("click", function () {
        const title = prompt("Enter a habit:");
        if (title && title.trim() !== "") {
            habits.push({
                id: Date.now(),
                title: title.trim()
            });
            showHabits();
        }
    });

    list.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const id = Number(event.target.getAttribute("data-id"));
            habits = habits.filter(function (habit) {
                return habit.id !== id;
            });
            showHabits();
        }
    });

    showHabits();
}

function setupNotes() {
    const notes = document.getElementById("notesArea");
    notes.value = localStorage.getItem("ww_dashboard_notes") || "";

    notes.addEventListener("input", function (event) {
        localStorage.setItem("ww_dashboard_notes", event.target.value);
    });
}

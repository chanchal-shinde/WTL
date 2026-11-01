import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React fundamentals",
      completed: true,
    },
    {
      id: 2,
      title: "Build my first React project",
      completed: false,
    },
    {
      id: 3,
      title: "Learn useState and useEffect",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new task
  function addTask(e) {
    e.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  // Mark task completed / incomplete
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Remove all completed tasks
  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const totalTasks = tasks.length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">✓</div>

          <div>
            <h2>TaskFlow</h2>
            <span>Productivity App</span>
          </div>
        </div>

        <nav>
          <button
            className={filter === "all" ? "nav-item active" : "nav-item"}
            onClick={() => setFilter("all")}
          >
            <span>📋</span>
            All Tasks
          </button>

          <button
            className={filter === "active" ? "nav-item active" : "nav-item"}
            onClick={() => setFilter("active")}
          >
            <span>⚡</span>
            Active
          </button>

          <button
            className={
              filter === "completed"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => setFilter("completed")}
          >
            <span>✓</span>
            Completed
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-progress">
            <div className="mini-progress-header">
              <span>Daily Progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p>
              {completedTasks} of {totalTasks} tasks completed
            </p>
          </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main">

        <header className="header">

          <div>
            <p className="eyebrow">MY WORKSPACE</p>

            <h1>
              Good morning<span>.</span>
            </h1>

            <p className="subtitle">
              Stay focused and get things done.
            </p>
          </div>

          <div className="date-card">
            <span>Today</span>
            <strong>
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </strong>
          </div>

        </header>

        {/* Statistics */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon purple">📋</div>

            <div>
              <span>Total Tasks</span>
              <strong>{totalTasks}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⚡</div>

            <div>
              <span>In Progress</span>
              <strong>{totalTasks - completedTasks}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>

            <div>
              <span>Completed</span>
              <strong>{completedTasks}</strong>
            </div>
          </div>

        </section>

        {/* Task Section */}
        <section className="task-section">

          <div className="section-header">

            <div>
              <h2>My Tasks</h2>
              <p>
                {filteredTasks.length} task
                {filteredTasks.length !== 1 ? "s" : ""}
              </p>
            </div>

            {completedTasks > 0 && (
              <button
                className="clear-button"
                onClick={clearCompleted}
              >
                Clear completed
              </button>
            )}

          </div>

          {/* Add Task */}
          <form
            className="add-task"
            onSubmit={addTask}
          >
            <input
              type="text"
              placeholder="What needs to be done?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />

            <button type="submit">
              + Add Task
            </button>
          </form>

          {/* Tasks */}
          <div className="tasks">

            {filteredTasks.length === 0 ? (

              <div className="empty">
                <div className="empty-icon">✓</div>

                <h3>No tasks here</h3>

                <p>
                  Add a new task to get started.
                </p>
              </div>

            ) : (

              filteredTasks.map((task) => (

                <div
                  className={
                    task.completed
                      ? "task completed"
                      : "task"
                  }
                  key={task.id}
                >

                  <button
                    className="checkbox"
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed && "✓"}
                  </button>

                  <div className="task-content">

                    <span className="task-title">
                      {task.title}
                    </span>

                    <span className="task-status">
                      {task.completed
                        ? "Completed"
                        : "In progress"}
                    </span>

                  </div>

                  <button
                    className="delete"
                    onClick={() => deleteTask(task.id)}
                    title="Delete task"
                  >
                    ×
                  </button>

                </div>

              ))

            )}

          </div>

        </section>

        {/* Footer */}
        <footer>
          <span>TaskFlow</span>
          <span>Built with React</span>
        </footer>

      </main>
    </div>
  );
}

export default App;
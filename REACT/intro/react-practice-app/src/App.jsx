
import './App.css'
import Welcome from './Welcome.jsx'


import { useEffect, useMemo, useState } from "react";

    const STORAGE_KEY = "todos:v1";
    const FILTERS = { ALL: "all", ACTIVE: "active", COMPLETED: "completed" };

    function App() {
      // hydrate once from localStorage using a lazy initializer
      const [todos, setTodos] = useState(() => {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          return raw ? JSON.parse(raw) : [];
        } catch {
          return [];
        }
      });
      const [text, setText] = useState("");
      const [filter, setFilter] = useState(FILTERS.ALL);

      // persist after every change
      useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      }, [todos]);

      function handleAdd(e) {
        e.preventDefault();
        const t = text.trim();
        if (!t) return;
        const todo = { id: crypto.randomUUID(), title: t, completed: false, createdAt: Date.now() };
        setTodos(prev => [todo, ...prev]);
        setText("");
      }

      function toggleTodo(id) {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
      }

      function deleteTodo(id) {
        setTodos(prev => prev.filter(t => t.id !== id));
      }

      const visible = useMemo(() => {
        if (filter === FILTERS.ACTIVE) return todos.filter(t => !t.completed);
        if (filter === FILTERS.COMPLETED) return todos.filter(t => t.completed);
        return todos;
      }, [todos, filter]);

      const remaining = todos.filter(t => !t.completed).length;

      return (
        <main className="app">
          <header className="app-header">
            <h1 className="title">Todo</h1>
            <p className="subtitle">State is the source of truth; storage is just persistence.</p>
          </header>

          <form className="todo-form" onSubmit={handleAdd}>
            <input
              className="input"
              placeholder="Add a task…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="New task title"
              autoFocus
            />
            <button className="btn" type="submit">Add</button>
          </form>

          <section className="toolbar">
            <div className="filters" role="tablist" aria-label="Filters">
              {Object.values(FILTERS).map(f => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  className={`chip ${filter === f ? "chip--active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f[0].toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            <span className="counter" aria-live="polite">{remaining} left</span>
          </section>

          {visible.length === 0 ? (
            <p className="empty">Nothing here. Add your first task!</p>
          ) : (
            <ul className="todo-list">
              {visible.map(t => (
                <li key={t.id} className={`todo ${t.completed ? "todo--done" : ""}`}>
                  <label className="todo__left">
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => toggleTodo(t.id)}
                      aria-label={`Mark "${t.title}" ${t.completed ? "incomplete" : "complete"}`}
                    />
                    <span className="todo__title">{t.title}</span>
                  </label>
                  <button className="icon-btn" title="Delete" onClick={() => deleteTodo(t.id)}>×</button>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <footer className="footer">
              <button
                className="ghost"
                type="button"
                onClick={() => {
                  if (confirm("Clear completed tasks?")) {
                    setTodos(prev => prev.filter(t => !t.completed));
                  }
                }}
              >
                Clear Completed
              </button>
            </footer>
          )}
        </main>
      );
    }

export default App;

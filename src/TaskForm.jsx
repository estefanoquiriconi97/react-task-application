import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

  const handleSubtmit = (e) => {
    e.preventDefault();
    createTask(title);
  }

  return (
    <form onSubmit={handleSubtmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

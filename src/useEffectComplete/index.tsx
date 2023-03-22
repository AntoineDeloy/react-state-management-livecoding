import { useEffect, useState } from "react";
import Notification, {NotificationType} from "../components/Notification/Notification";
import EventHelper, {EventName} from "../utils/EventHelper";

type Todo = {
  id: number;
  desc: string;
  state: string;
};

const displaySuccessNotification = () =>
 EventHelper.trigger(EventName.NOTIFY, {
  type: NotificationType.SUCCESS,
  message: 'Todo Modifié',
 });

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();

  useEffect(() => {
    fetch("./todos.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("useEffect triggered: settings todos ...");
        setTodos(data);
      });
  }, []);

  return (
    <>
      <p>Todos :</p>
      <ul>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            onClick={() => setSelectedTodo(todo)}
            style={{ cursor: "pointer" }}
          >
            {todo.desc}
          </li>
        ))}
      </ul>
      <p>
        <b>Selected todo :</b> {selectedTodo ? selectedTodo.desc : ""}
      </p>
    </>
  );
};

export const UseEffectComplete = () => {
  return (
    <div>
      <TodoList />
     <button onClick={() => displaySuccessNotification()}> Trigger notification </button>
      <Notification />
    </div>
  );
};

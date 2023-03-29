import { useReducer } from "react";

enum TodoActionEnum {
  ADD,
  EDIT_NEW,
  TOGGLE_STATE,
  DELETE,
}

type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

type TodoState = {
  newTodo: string;
  todos: Array<Todo>;
};

const initialTodos: Array<Todo> = [
  { id: 0, desc: "Learn React", done: true },
  { id: 1, desc: "Write code", done: false },
  { id: 2, desc: "Go shopping", done: false },
];

const todosReducer = (
  state: TodoState,
  action: { type: TodoActionEnum; payload?: Partial<TodoState & Todo> }
): TodoState => {
  switch (action.type) {
    case TodoActionEnum.ADD: {
      const [lastTodo] = state.todos.slice(-1);
      return {
        ...state,
        newTodo: "",
        todos: [
          ...state.todos,
          { id: lastTodo.id + 1, desc: state.newTodo, done: false },
        ],
      };
    }
    case TodoActionEnum.EDIT_NEW: {
      return {
        ...state,
        newTodo: action.payload?.newTodo ? action.payload.newTodo : "",
      };
    }
    case TodoActionEnum.TOGGLE_STATE: {
      const newTodoState = !action.payload?.done;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload?.id) {
            return { ...todo, done: newTodoState };
          }
          return todo;
        }),
      };
    }
    case TodoActionEnum.DELETE: {
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload?.id;
        })
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const UseReducerComplete = () => {
  const [todosState, dispatchTodos] = useReducer(todosReducer, {
    newTodo: "",
    todos: initialTodos,
  });

  return (
    <>
      <h4>My Todos</h4>
      <div>
        <input
          type="text"
          value={todosState.newTodo}
          onChange={(e) =>
            dispatchTodos({
              type: TodoActionEnum.EDIT_NEW,
              payload: { newTodo: e.target.value },
            })
          }
        ></input>
        <button onClick={() => dispatchTodos({ type: TodoActionEnum.ADD })}>
          Add Todo
        </button>
      </div>
      <div>
        {todosState.todos.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => {
                dispatchTodos({
                  type: TodoActionEnum.TOGGLE_STATE,
                  payload: todo,
                });
              }}
            ></input>
            {todo.desc}
            <button onClick={() => dispatchTodos({ type: TodoActionEnum.DELETE, payload: todo })}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType,";

const initialState = {
  todos: [
    { id: 1, title: "Let's Play", due_date: "2024-03-24", status: "Pending" },
    {
      id: 2,
      title: "Got to Market",
      due_date: "2024-02-24",
      status: "Completed",
    },
  ],
};
export const reduce = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case ADD_TODO:
      return { todos: [...state.todos, payload] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id != payload) };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

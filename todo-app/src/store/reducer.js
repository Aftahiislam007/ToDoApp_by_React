const initialState = {
  todos: [
    { title: "Let's Play", due_date: "24/03/2024", status: "pending" },
    { title: "Got to Market", due_date: "24/02/2024", status: "completed" },
  ],
};
export const reduce = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return { todos: [...state.todos, payload] };
    default:
      return state;
  }
};

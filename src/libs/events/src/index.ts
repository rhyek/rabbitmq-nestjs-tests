export const newTodoReceivedEventPattern = 'new-todo-received';
export type NewTodoReceivedEvent = {
  todo: {
    description: string;
  };
};

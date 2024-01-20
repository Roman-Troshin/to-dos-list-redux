export const selectToDoById = (id) => ({toDos}) =>
	toDos.find((toDo) => toDo.id === id);

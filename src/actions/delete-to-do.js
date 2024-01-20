export const deleteToDo = (toDoId) => {
	return (dispatch) => {
		return fetch(`http://localhost:3004/todos/${toDoId}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена ', response);
				dispatch({
					type: 'DELETE_TO_DO',
					payload: toDoId,
				});
			});
	};
};

export const updateToDo = (taskInformation) => {
	const { id, value } = taskInformation.toDo;
	
	return (dispatch) => {
		return fetch(`http://localhost:3004/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача обновлена ', response);
				dispatch({
					type: 'UPDATE_TO_DO',
					payload: taskInformation,
				});
			});
	}
}

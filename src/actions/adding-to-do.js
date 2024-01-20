export const addingToDo = (value) => {
	return (dispatch) => {
		return fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача добавлена: ', response);
				dispatch({
					type: 'ADD_TO_DO',
					payload: response,
				});
			});
	};
};

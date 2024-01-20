import { processUserRequestForSerchAndSort } from "../help-functions/process-user-request-for-serch-and-sort";


export const loadToDos = (userSearchValue, isSortSwitched) => (dispatch) => {
	return	fetch(
		`http://localhost:3004/todos${processUserRequestForSerchAndSort(
			userSearchValue,
			isSortSwitched,
			
			)}`,
			)
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				dispatch({
					type: 'LOAD_TO_DOS',
					payload: loadedToDos,
				})
			});
	}


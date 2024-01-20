import { INITIAL_TO_DOS_STATE } from "../constants/initial-to-dos-state"; 

export const toDosReducer = (state = INITIAL_TO_DOS_STATE, { type, payload }) => {

	switch (type) {
		case 'LOAD_TO_DOS': {
			return payload
		}
		case 'DELETE_TO_DO': {
			return state.filter((toDo) => (toDo.id !== payload))
		}
		case 'UPDATE_TO_DO': {
			return state.toSpliced(payload.index, 1, payload.toDo)
		}
		case 'ADD_TO_DO': {
				return state.concat(payload);
		}
		default:
			return state;
	}
};
import { INITIAL__USER_SETTINGS_STATE } from "../constants/initial-user-settings-state"; 

export const userSettingsReducer = (state = INITIAL__USER_SETTINGS_STATE, { type, payload }) => {
	switch (type) {
		case 'CHANGE_CHECKBOX_VALUE': {
			return {
				...state,
				isSortChecked: !state.isSortChecked,
			};
		}
		case 'SET_FIELD_SEARCH_VALUE': {
			return {
				...state,
				fieldSearchValue: payload,
			};
		}
		default:
			return state;
	}
};

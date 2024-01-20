import { useSelector, useDispatch } from 'react-redux';

import { selectIsSortChecked } from '../../selectors';

import { CHANGE_IS_SORT_CHECKED } from '../../actions';

export const ToDosSort = () => {
	const isSortChecked = useSelector(selectIsSortChecked);

	const dispatch = useDispatch();

	return (
		<div>
			<input
				name="sortCheckbox"
				id="sortCheckbox"
				type="checkbox"
				value={isSortChecked}
				onChange={() => dispatch(CHANGE_IS_SORT_CHECKED)}
			/>
			<label htmlFor="sortCheckbox">Сортировать по алфавиту</label>
		</div>
	);
};

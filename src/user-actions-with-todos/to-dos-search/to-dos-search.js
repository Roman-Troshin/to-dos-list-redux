import styles from './to-dos-search.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFieldSearchValue } from '../../actions';

export const ToDosSearch = () => {
	const [currentSearchFieldValue, setCurrentSearchFieldValue] = useState('');

	const dispatch = useDispatch();

	return (
		<div className={styles.searchContainer}>
			<input
				name="searchingToDosField"
				type="text"
				value={currentSearchFieldValue}
				placeholder="Поиск..."
				onChange={({ target }) => setCurrentSearchFieldValue(target.value)}
			/>
			<div>
				<button
					type="button"
					onClick={() => {
						dispatch(setFieldSearchValue(currentSearchFieldValue));
					}}
				>
					Найти
				</button>
				<button
					type="button"
					onClick={() => {
						setCurrentSearchFieldValue('');
						dispatch(setFieldSearchValue(''));
					}}
				>
					Очистить
				</button>
			</div>
		</div>
	);
};

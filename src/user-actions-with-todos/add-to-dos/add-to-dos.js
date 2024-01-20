import styles from './add-to-dos.module.css'

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addingToDo } from '../../actions';

export const AddToDos = () => {
	const dispatch = useDispatch();

const [fieldValue, setFieldValue] = useState('');

const onRequestAddToDo = (event, value) => {
	event.preventDefault();
	setFieldValue('');
	dispatch(addingToDo(value));
};

	return (
		<div>
			<form className={styles.form} onSubmit={(event) => onRequestAddToDo(event, fieldValue)}>
				<input
				name="toDosField"
				type="text"
				value={fieldValue}
				onChange={({target}) => setFieldValue(target.value)}
				></input>
				<button type="submit">
					Добавить задачу
				</button>
			</form>
		</div>
	)
};

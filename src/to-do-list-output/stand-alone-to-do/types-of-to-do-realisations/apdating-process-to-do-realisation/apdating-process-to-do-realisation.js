import styles from './apdating-process-to-do-realisation.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { updateToDo } from '../../../../actions';
import { selectToDoById, selectToDos } from '../../../../selectors';

export const ApdatingProcessToDoRealisation = ({
	actualToDoValue,
	setActualToDoValue,
	setIsToDoInModificationProcess,
	task,
}) => {
	const toDos = useSelector(selectToDos);

	const toDo = useSelector(selectToDoById(task.id));

	const toDoIndex = toDos.findIndex((OneToDo) => OneToDo.id === toDo.id);

	const dispatch = useDispatch();

	const dateForUpdateToDo = {
		index: toDoIndex,
		toDo: {
			id: toDo.id,
			value: actualToDoValue,
		},
	};

	const onRequestUpdateToDo = (toDo) => {
		dispatch(updateToDo(toDo));
	};

	return (
		<div className={styles.todoItem}>
			<input
				name="changingToDosField"
				type="text"
				value={actualToDoValue}
				onChange={({ target }) => setActualToDoValue(target.value)}
			/>
			<div>
				<button
					type="button"
					onClick={() => {
						setActualToDoValue(toDo.value);
						setIsToDoInModificationProcess(false);
					}}
				>
					Отменить
				</button>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(false);
						onRequestUpdateToDo(dateForUpdateToDo);
					}}
				>
					Сохранить
				</button>
			</div>
		</div>
	);
};

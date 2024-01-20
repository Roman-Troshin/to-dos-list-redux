import styles from './default-to-do-realisation.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { deleteToDo } from '../../../../actions';
import { selectToDoById } from '../../../../selectors';

export const DefaultToDoRealisation = ({
	actualToDoValue,
	setIsToDoInModificationProcess,
	task,
}) => {
	const toDo = useSelector(selectToDoById(task.id));

	const dispatch = useDispatch();

	const onRequestDeleteToDo = () => {
		dispatch(deleteToDo(toDo.id));
	};

	return (
		<div className={styles.todoItem}>
			<div>{actualToDoValue}</div>
			<div>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(true);
					}}
				>
					Исправить
				</button>
				<button
					type="button"
					onClick={() => {
						onRequestDeleteToDo();
					}}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

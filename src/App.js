import styles from './App.module.css';

import { ToDosListOutput } from './to-do-list-output/to-do-list-output';
import { AddToDos } from './user-actions-with-todos/add-to-dos/add-to-dos';
import { ToDosSearch } from './user-actions-with-todos/to-dos-search/to-dos-search';
import { ToDosSort } from './user-actions-with-todos/to-dos-sort/to-dos-sort';

export const App = () => {
	return (
		<div className={styles.container}>
			<div className={styles.toDosItemList}>
				<h3 className={styles.header}>Список дел на 2024 год</h3>
				<div className={styles.settings}>
					<ToDosSort />
					<ToDosSearch />
				</div>
				<ToDosListOutput />
			</div>
			<AddToDos />
		</div>
	);
};

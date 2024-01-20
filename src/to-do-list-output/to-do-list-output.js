import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectToDos, selectFieldSearchValue, selectIsSortChecked } from '../selectors';
import { loadToDos } from '../actions';

import { StandaloneToDo } from './stand-alone-to-do/standaloneToDo';

import { getRandomKeyForTask } from '../help-functions/get-random-key-for-task';

export const ToDosListOutput = () => {
	const toDos = useSelector(selectToDos);
	const fieldSearchValue = useSelector(selectFieldSearchValue);
	const isSortChecked = useSelector(selectIsSortChecked);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadToDos(fieldSearchValue, isSortChecked));
	}, [dispatch, fieldSearchValue, isSortChecked]);

	return (
		<div>
			{toDos.map((toDo) => (
				<StandaloneToDo key={getRandomKeyForTask()} task={toDo} />
			))}
		</div>
	);
};

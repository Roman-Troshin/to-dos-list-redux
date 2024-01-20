import { useState } from 'react';

import { DefaultToDoRealisation } from './types-of-to-do-realisations/default-to-do-realisation/default-to-do-realisation';
import { ApdatingProcessToDoRealisation } from './types-of-to-do-realisations/apdating-process-to-do-realisation/apdating-process-to-do-realisation';

export const StandaloneToDo = ({ task }) => {
	const [isToDoInUpdatingProcess, setIsToDoInUpdatingProcess] = useState(false);
	const [currentToDoValue, setCurrentToDoValue] = useState(task.value);

	return isToDoInUpdatingProcess === false ? (
		<DefaultToDoRealisation
			actualToDoValue={currentToDoValue}
			setIsToDoInModificationProcess={setIsToDoInUpdatingProcess}
			task={task}
		/>
	) : (
		<ApdatingProcessToDoRealisation
			actualToDoValue={currentToDoValue}
			setActualToDoValue={setCurrentToDoValue}
			setIsToDoInModificationProcess={setIsToDoInUpdatingProcess}
			task={task}
		/>
	);
};

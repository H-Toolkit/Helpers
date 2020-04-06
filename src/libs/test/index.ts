import * as os from 'os';

import { OperationSystemTypes } from '../../constants/enums';

export const currentRunningOs = (): OperationSystemTypes => {
	return OperationSystemTypes[os.type()];
};

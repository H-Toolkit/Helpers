import * as os from 'os';

import { OperationSystemTypes } from '../../constants/enums';

export function currentRunningOs(): OperationSystemTypes {
	return OperationSystemTypes[os.type()];
}

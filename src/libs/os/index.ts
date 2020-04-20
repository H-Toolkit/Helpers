import * as os from 'os';

import { OperationSystemTypes } from '../../constants/enums';
import { OSType } from '../../constants/types';

export function currentRunningOs(): OperationSystemTypes {
	return OperationSystemTypes[os.type() as OSType];
}

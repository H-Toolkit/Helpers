import * as os from 'os';
export enum OperationSystemTypes {
	Windows_NT = 'Windows',
	Darwin = 'macOS',
	Linux = 'Linux',
}
// export type OS_Types = 'Windows' | 'macOS' | 'Linux';

export class OS {
	// static isCurrentRunningOs(type: OS_Types): boolean {
	// 	return this.currentRunningOs() === type;
	// }

	static currentRunningOs(): OperationSystemTypes {
		return OperationSystemTypes[os.type()];
	}
}

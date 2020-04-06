import * as Helpers from '../../src/main';
import * as Tester from '@h-toolkit/tester';
import { OperationSystemTypes } from '../../src/constants/enums';

Tester.assert({
	method: {
		_function: Helpers.OS.currentRunningOs,
		method_name: 'currentRunningOs',
		args: [],
		expect: OperationSystemTypes.Windows_NT,
	},
	logIfFailOnly: true,
});

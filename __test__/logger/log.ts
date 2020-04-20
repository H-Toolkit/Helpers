import Tester from '@h-toolkit/tester';
import Helpers from '../../src/main';

Tester.assert({
	method: {
		_function: Helpers.Logger.log,
		method_name: 'log',
		args: ['Log', 'on http://localhost:3000'],
		expect: undefined,
	},
	noLogFor: { table: true },
});

import Tester from '@h-toolkit/tester';
import Helpers from '../../src/main';

Tester.assert({
	method: {
		_function: Helpers.Logger.warn,
		method_name: 'warn',
		args: ['Warning', 'on http://localhost:3000'],
		expect: undefined,
	},
	noLogFor: { table: true },
});

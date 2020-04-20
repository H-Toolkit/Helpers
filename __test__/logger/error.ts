import Tester from '@h-toolkit/tester';
import Helpers from '../../src/main';

Tester.assert({
	method: {
		_function: Helpers.Logger.error,
		method_name: 'error',
		args: ['Error', 'on http://localhost:3000'],
		expect: undefined,
	},
	noLogFor: { table: true },
});

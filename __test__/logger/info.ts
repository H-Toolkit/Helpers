import Tester from '@h-toolkit/tester';
import Helpers from '../../src/main';

Tester.assert({
	method: {
		_function: Helpers.Logger.info,
		method_name: 'info',
		args: ['Information', 'on http://localhost:3000'],
		expect: undefined,
	},
	noLogFor: { table: true },
});

import Helpers from '../../src/main';
import Tester from '@h-toolkit/tester';

Tester.assert({
	method: {
		_function: Helpers.Math.randomNumberInRange,
		method_name: 'randomNumberInRange',
		multiple: [
			{ args: [2, 2], expect: 2 },
			{ args: [2, 10], expect: 2 },
			{ args: [2, 5], expect: 2 },
			{ args: [2, 2, true], expect: 2 },
		],
	},
	noLogFor: { table: true },
});

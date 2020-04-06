import * as Helpers from '../../src/main';
import * as Tester from '@h-toolkit/tester';

Tester.assert({
	method: {
		_function: Helpers.DataTypes.whichOneOfTypes,
		method_name: 'whichOneOfTypes',
		multiple: [
			{ args: [1, ['null', 'array']], expect: false },
			{ args: [1, ['number', 'string']], expect: 'number' },
			{ args: [NaN, ['null', 'undefined']], expect: false },
			{ args: [NaN, ['number', 'undefined']], expect: 'number' },
			{ args: [true, ['array', 'object']], expect: false },
			{ args: [true, ['boolean', 'object']], expect: 'boolean' },
			{ args: [[], ['number', 'object']], expect: false },
			{ args: [[], ['array', 'object']], expect: 'array' },
			{ args: [() => {}, ['number', 'undefined']], expect: false },
			{ args: [() => {}, ['function', 'undefined']], expect: 'function' },
			// { args: [_classing], expect: false },
			// { args: null, expect: true },
		],
	},
	logIfFailOnly: true,
});

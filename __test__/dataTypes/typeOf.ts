import Helpers from '../../src/main';
import Tester from '@h-toolkit/tester';

interface Ix {}
const _interfacing: Ix = {};

class Classing {}
const _classing = new Classing();

enum _enum {}

Tester.assert({
	method: {
		_function: Helpers.DataTypes.typeOf,
		method_name: 'typeOf',
		multiple: [
			{ args: [_classing], expect: 'classing' },
			{ args: [Symbol('any')], expect: 'symbol' },
			{ args: [undefined], expect: 'undefined' },
			{ args: [null], expect: 'null' },
			{ args: [true], expect: 'boolean' },
			{ args: [false], expect: 'boolean' },
			{ args: [NaN], expect: 'number' },
			{ args: [0], expect: 'number' },
			{ args: [5e3], expect: 'number' },
			{ args: [1.999], expect: 'number' },
			{ args: ['ahmed'], expect: 'string' },
			{ args: [Helpers.OS.currentRunningOs()], expect: 'string' },
			{ args: [[]], expect: 'array' },
			{ args: [new Array()], expect: 'array' },
			{ args: [{}], expect: 'object' },
			{ args: [Helpers], expect: 'object' },
			{ args: [_interfacing], expect: 'object' },
			{ args: [_enum], expect: 'object' },
			{ args: [() => {}], expect: 'function' },
			{ args: [new Function()], expect: 'function' },
			{ args: [function* () {}], expect: 'function' },
			// { args: null, expect: '' },
			// { args: null, expect: '' },
			// { args: null, expect: '' },
		],
	},
	noLogFor: { succeeded: true },
});

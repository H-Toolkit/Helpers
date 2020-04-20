import Helpers from '../../src/main';
import Tester from '@h-toolkit/tester';

enum _enum1 {
	a,
	c,
	b,
}
enum _enum2 {
	k1 = 'v1',
	k2 = 'v2',
	k3 = 'v3',
}

Tester.assert({
	method: {
		_function: Helpers.DataTypes.enumToArray,
		method_name: 'enumToArray',
		multiple: [
			{ args: [_enum1], expect: ['a', 'c', 'b'] },
			{ args: [_enum2], expect: ['v1', 'v2', 'v3'] },
			{ args: [_enum1, true], expect: ['0', '1', '2', 'a', 'c', 'b'] },
			{ args: [_enum2, true], expect: ['k1', 'k2', 'k3'] },
			// { args: null, expect: '' },
		],
	},
	noLogFor: { succeeded: true },
});

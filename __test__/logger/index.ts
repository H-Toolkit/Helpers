import Tester from '@h-toolkit/tester';
import Helpers from '../../src/main';

Tester.assert({
	method: {
		_function: Helpers.Logger.log,
		method_name: 'log',
		multiple: [
			{ args: ['ServerStart', 'on http://localhost:3000'], expect: undefined },
			{ args: ['ServerStart', 'on', 'http://localhost:3000'], expect: undefined },
			{
				args: [
					{
						color: 'yellow',
						content: 'ServerStarts',
						additions: ['squareBrackets', 'parentheses', 'curlyBrackets', 'angleBrackets'],
					},
					{ content: 'ServerStarts', color: 'green' },
				],
				expect: undefined,
			},
			{
				args: [{ color: 'yellow', content: 'ServerStarts' }, { color: 'blue', content: 'on' }, 'http://localhost:3000'],
				expect: undefined,
			},
			// { args: [], expect: undefined },
		],
	},
	noLogFor: { table: true },
});

import('./info');
import('./log');
import('./warn');
import('./error');

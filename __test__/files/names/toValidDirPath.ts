import * as Helpers from '../../../src/main';
import * as Tester from '@h-toolkit/tester';

/* generate file name */
const fileName = 'a/a\\a/a<a>a*a?a.mp4';
// 'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./`1234567890-=`~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?/-*+ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظًٌَُلإإ‘÷×؛<>ٍِ][لأأـ،/:"|~ْ}{لآآ’,.؟}].mp4';

const expectedFileName = 'a/a\\a/aaaaa.mp4';
/* Test case: remove all invalid files name */
Tester.assert({
	method: {
		_function: Helpers.Files.Names.toValidDirPath,
		method_name: 'toValidDirPath',
		multiple: [
			{ args: ['./top_download?./' + fileName], expect: './top_download/' + expectedFileName },
			{ args: ['C:/top_download?. /' + fileName], expect: 'C:/top_download/' + expectedFileName },
			{ args: ['/top_download?./' + fileName], expect: '/top_download/' + expectedFileName },
		],
	},
	logIfFailOnly: true,
});

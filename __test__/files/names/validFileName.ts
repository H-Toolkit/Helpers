import Helpers from '../../../src/main';
import Tester from '@h-toolkit/tester';

/* generate file name */
const fileName = //'a/a\\a/a<a>a*a?a.mp4';
	'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./`1234567890-=`~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?/-*+ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظًٌَُلإإ‘÷×؛<>ٍِ][لأأـ،/:"|~ْ}{لآآ’,.؟}].mp4';
const expectFileName = //'a/a\\a/a<a>a*a?a.mp4';
	"qwertyuiop[]asdfghjkl;'zxcvbnm,.`1234567890-=`~!@#$%^&()_+QWERTYUIOP{}ASDFGHJKLZXCVBNM-+ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظًٌَُلإإ‘÷×؛ٍِ][لأأـ،~ْ}{لآآ’,.؟}].mp4";

/* Test case: remove all invalid files name */

Tester.assert({
	method: {
		_function: Helpers.Files.Names.validFileName,
		method_name: 'validFileName',
		args: [fileName],
		expect: expectFileName,
	},
	noLogFor: { succeeded: true },
});

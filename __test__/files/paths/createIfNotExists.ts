import * as Helpers from '../../../src/main';
import * as Tester from '@h-toolkit/tester';

/* generate file name */
const fileName = 'a/a\\a/a<a>a*a?a.mp4';
// 'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./`1234567890-=`~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?/-*+ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظًٌَُلإإ‘÷×؛<>ٍِ][لأأـ،/:"|~ْ}{لآآ’,.؟}].mp4';

const expectedFileName = 'a\\a\\a\\aaaaa.mp4';
const currentProjectDir = 'C:\\projects\\GitHub\\h-toolkit\\';

/* Test case: check and create if not exists file or folder path */
Tester.assert({
	method: {
		_function: Helpers.Files.Paths.createIfNotExists,
		method_name: 'createIfNotExists',
		multiple: [
			{
				args: ['./outputs/asd../' + fileName],
				expect: currentProjectDir + 'helpers\\outputs\\asd\\' + expectedFileName,
			},
			{
				args: ['./outputs/asd ./' + fileName],
				expect: currentProjectDir + 'helpers\\outputs\\asd\\' + expectedFileName,
			},
			{
				args: ['./outputs/asd  ../' + fileName],
				expect: currentProjectDir + 'helpers\\outputs\\asd\\' + expectedFileName,
			},
			{
				args: ['./outputs/asd/asd/asd/3'],
				expect: currentProjectDir + 'helpers\\outputs\\asd\\asd\\asd\\3',
			},
			{
				args: ['.\\outputs\\asd1\\asd\\asd\\'],
				expect: currentProjectDir + 'helpers\\outputs\\asd1\\asd\\asd',
			},
			{
				args: ['./outputs/asd/asd/asd2'],
				expect: currentProjectDir + 'helpers\\outputs\\asd\\asd\\asd2',
			},

			{
				args: ['/projects/GitHub/h-toolkit/helpers/outputs/Top downloader/video.mp4'],
				expect: 'C:\\projects\\GitHub\\h-toolkit\\helpers\\outputs\\Top downloader\\video.mp4',
			},
			{
				args: ['C:\\projects\\GitHub\\h-toolkit\\helpers\\outputs\\Top downloader\\Thug Life Magic.mp4'],
				expect: 'C:\\projects\\GitHub\\h-toolkit\\helpers\\outputs\\Top downloader\\Thug Life Magic.mp4',
			},
		],
	},
	logIfFailOnly: true,
});

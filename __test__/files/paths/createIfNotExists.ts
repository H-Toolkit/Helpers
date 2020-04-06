import * as Helpers from '../../../src/main';
import * as Tester from '@h-toolkit/tester';

/* generate file name */
const fileName = 'a/a\\a/a<a>a*a?a.mp4';
// 'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./`1234567890-=`~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?/-*+ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظًٌَُلإإ‘÷×؛<>ٍِ][لأأـ،/:"|~ْ}{لآآ’,.؟}].mp4';

/* Test case: check and create if not exists file or folder path */
Helpers.Files.Paths.createIfNotExists('./outputs/asd../' + fileName);
Helpers.Files.Paths.createIfNotExists('./outputs/asd ./' + fileName);
Helpers.Files.Paths.createIfNotExists('./outputs/asd  ../' + fileName);
Helpers.Files.Paths.createIfNotExists('\\Top downloader\\Thug Life Magic.mp4');
Helpers.Files.Paths.createIfNotExists('./outputs/asd/asd/asd/3');
Helpers.Files.Paths.createIfNotExists('.\\outputs\\asd1\\asd\\asd\\');
Helpers.Files.Paths.createIfNotExists('./outputs/asd/asd/asd2');
// Helpers.Files.Paths.createIfNotExists('C:\\Users\\hisha\\Videos\\Top downloader\\Thug Life Magic.mp4');
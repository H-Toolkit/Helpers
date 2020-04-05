import * as path from 'path';
import * as fs from 'fs';
// import * as os from 'os';
import { commonRegex, RecognizeFiles } from '../../constants/common-regex';
import { Names } from './Names';
import { OS } from '../os';
export class Paths {
	static createIfNotExists(_path: string, opts?: Partial<{ recognizeFiles: RecognizeFiles }>): string {
		if (!opts) opts = { recognizeFiles: RecognizeFiles.implicate };

		const incomePath = Names.toValidDirPath(_path);
		_path = this._canConvertPathToAbsolute(Names.toValidDirPath(_path));

		let fullDirName: string = _path;
		let fullFileName: string;
		if (commonRegex.endWithFileName[opts.recognizeFiles].test(incomePath)) {
			fullFileName = path.basename(_path);
			fullDirName = this._removeFileName(_path, fullFileName);
		}
		this._generateDirsIfNotExists(fullDirName);

		// Create the file if not exists
		if (fullFileName && !fs.existsSync(_path)) fs.writeFileSync(_path, undefined);
		return _path;
	}

	private static _removeFileName(_path: string, fullFileName: string): string {
		return _path.replace(RegExp(fullFileName + '$'), '');
	}

	private static _canConvertPathToAbsolute(_path: string): string {
		if (!path.isAbsolute(_path) || (OS.currentRunningOs() === 'Windows' && path.isAbsolute(_path)))
			return path.resolve(_path);
		return _path;
	}

	private static _generateDirsIfNotExists(fullDirName: string): void {
		const paths = fullDirName.split(commonRegex.splitFoldersJunctions);
		const dirs: string[] = [];
		// Extract all directories from path
		for (let i = 0; i < paths.length; i++) {
			const _splitPath = paths[i];
			if (!i || !_splitPath) continue;
			const previous = dirs.length ? dirs[dirs.length - 1] : paths[0];
			dirs.push(path.join(previous, _splitPath));
		}
		// Create all dirs if not exists
		for (const dir of dirs) if (!fs.existsSync(dir)) fs.mkdirSync(dir);
	}
}

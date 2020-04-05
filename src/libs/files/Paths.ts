import * as path from 'path';
import * as fs from 'fs';
import { commonRegex, RecognizeFiles } from '../../constants/common-regex';
import { Names } from './Names';

export class Paths {
	static createIfNotExists(_path: string, opts?: { recognizeFiles?: RecognizeFiles }): string {
		if (!opts) opts = {};

		const incomePath = Names.validDirPath(_path);
		_path = Names.validDirPath(_path);

		if (!path.isAbsolute(_path)) _path = path.resolve(_path);

		let fullDirName: string = _path;
		let fullFileName: string;
		if (commonRegex.endWithFileName[opts.recognizeFiles || RecognizeFiles.implicate].test(incomePath)) {
			fullFileName = path.basename(_path);
			fullDirName = this.removeFileName(_path, fullFileName);
		}
		this.generateDirsIfNotExists(fullDirName);

		// Create the file if not exists
		if (fullFileName && !fs.existsSync(_path)) fs.writeFileSync(_path, undefined);
		return _path;
	}

	private static removeFileName(_path: string, fullFileName: string): string {
		return _path.replace(RegExp(fullFileName + '$'), '');
	}

	private static generateDirsIfNotExists(fullDirName: string): void {
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

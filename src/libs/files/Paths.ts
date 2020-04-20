import * as path from 'path';
import * as fs from 'fs';

import * as OS from '../os';
import * as Names from './Names';
import { commonRegex } from '../../constants/common-regex';
import { RecognizeFiles } from '../../constants/enums';

/* Global methods */
export function createIfNotExists(_path: string, opts?: { recognizeFiles: RecognizeFiles }): string {
	if (!opts) opts = { recognizeFiles: RecognizeFiles.implicate };

	const incomePath = Names.toValidDirPath(_path);
	_path = _canConvertPathToAbsolute(Names.toValidDirPath(_path));

	let fullDirName: string = _path;
	let fullFileName: string;
	if (commonRegex.endWithFileName[opts.recognizeFiles].test(incomePath)) {
		fullFileName = path.basename(_path);
		fullDirName = _removeFileName(_path, fullFileName);
	}
	_generateDirsIfNotExists(fullDirName);

	// Create the file if not exists
	if (fullFileName! && !fs.existsSync(_path)) fs.writeFileSync(_path, undefined);
	return _path;
}

/* Private methods */
const _removeFileName = (_path: string, fullFileName: string): string => {
	return _path.replace(RegExp(fullFileName + '$'), '');
};

const _canConvertPathToAbsolute = (_path: string): string => {
	if (!path.isAbsolute(_path) || (OS.currentRunningOs() === 'Windows' && path.isAbsolute(_path)))
		return path.resolve(_path);
	return _path;
};

const _generateDirsIfNotExists = (fullDirName: string): void => {
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
};

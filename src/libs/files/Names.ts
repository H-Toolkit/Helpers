import * as path from 'path';

import { commonRegex } from '../../constants/common-regex';
import { PathType } from '../../constants/enums';

/* Global methods */
export const validFileName = (fileName: string): string => {
	return _removeExtraSpaces(fileName.replace(commonRegex.invalidFilesName, ''));
};

export const toValidDirPath = (dirPath: string): string => {
	const pathType = path.isAbsolute(dirPath) ? PathType.absolute : PathType.relative;
	const _removedInvalidSymbols = dirPath.replace(commonRegex.invalidDirPath[pathType], '');
	const _removedInvalidDirEnds = _removeInvalidDirEnds(_removedInvalidSymbols);
	return _removeExtraSpaces(_removedInvalidDirEnds);
};

/* Private methods */
const _removeInvalidDirEnds = (dirPath: string): string => {
	return dirPath.replace(commonRegex.invalidDirsEnd, '$1');
};

const _removeExtraSpaces = (fileName: string): string => {
	return fileName.replace(commonRegex.extraSpaces, ' ');
};

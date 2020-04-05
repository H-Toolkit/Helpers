import { commonRegex, PathType } from '../../constants/common-regex';
import * as path from 'path';
export class Names {
	static validFileName(fileName: string): string {
		return this._removeExtraSpaces(fileName.replace(commonRegex.invalidFilesName, ''));
	}

	static toValidDirPath(dirPath: string): string {
		const pathType = path.isAbsolute(dirPath) ? PathType.absolute : PathType.relative;
		return this._removeExtraSpaces(
			this.removeInvalidDirEnds(dirPath.replace(commonRegex.invalidDirPath[pathType], ''))
		);
	}

	private static removeInvalidDirEnds(dirPath: string): string {
		return dirPath.replace(commonRegex.invalidDirsEnd, '$1');
	}

	private static _removeExtraSpaces(fileName: string): string {
		return fileName.replace(commonRegex.extraSpaces, ' ');
	}
}

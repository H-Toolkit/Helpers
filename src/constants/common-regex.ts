export enum RecognizeFiles {
	extension = 'extension',
	implicate = 'implicate',
}

export enum PathType {
	relative = 'relative',
	absolute = 'absolute',
}

export const commonRegex = {
	invalidFilesName: /[<>:"\/\\|\?\*]/g /* Windows [<>:"\/|?*] Linux [\] */,
	invalidDirPath: {
		relative: /[:<>"|\?\*]/g /* Windows [<>"|?*] Linux [] */,
		absolute: /[<>"|\?\*]/g /* consider that is path is absolute cannot remove colleen it's belong to driver*/,
	},

	extraSpaces: /\s+/g,
	splitFoldersJunctions: /\\+|\/+/,

	invalidDirsEnd: /(?:\b(?:\.|\s)*)(\\+|\/+)/g,

	endWithFileName: {
		extension: /\.\w+$/, // consider path/file.ext only
		implicate: /([^\/|\\]|\.\w+)$/, // consider [path/file, path/file.ext] as files
	},
};

export const commonRegex = {
	// Remove invalid symbols if input "file_name"
	invalidFilesName: /[<>:"\/\\|\?\*]/g /* Windows [<>:"\/|?*] Linux [\] */,

	// remove invalid symbols if input "file_path" or "dir_path"
	invalidDirPath: {
		relative: /[:<>"|\?\*]/g /* Windows [<>"|?*] Linux [] */,
		absolute: /[<>"|\?\*]/g /* consider that is path is absolute cannot remove colleen it's belong to driver*/,
	},

	// To extract dirs paths
	splitFoldersJunctions: /\\+|\/+/,

	// To remove any invalid dirs end
	invalidDirsEnd: /(?:\b[.\s]+)((?:\\|\/)+)/g,

	// Remove extra spaces
	extraSpaces: /\s+/g,

	// Pattern to extract file name
	endWithFileName: {
		extension: /\.\w+$/, // consider [ 'path/file.ext' ] cases only
		implicate: /([^\/|\\]|\.\w+)$/, // consider [ 'path/file' , 'path/file.ext' ] cases as files
	},
};

import chalk from 'chalk';
import { deepEqual } from '../dataTypes/index';

type ForegroundColor =
	| 'black'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'magenta'
	| 'cyan'
	| 'white'
	| 'gray'
	| 'grey'
	| 'blackBright'
	| 'redBright'
	| 'greenBright'
	| 'yellowBright'
	| 'blueBright'
	| 'magentaBright'
	| 'cyanBright'
	| 'whiteBright';
type BackgroundColor =
	| 'bgBlack'
	| 'bgRed'
	| 'bgGreen'
	| 'bgYellow'
	| 'bgBlue'
	| 'bgMagenta'
	| 'bgCyan'
	| 'bgWhite'
	| 'bgGray'
	| 'bgGrey'
	| 'bgBlackBright'
	| 'bgRedBright'
	| 'bgGreenBright'
	| 'bgYellowBright'
	| 'bgBlueBright'
	| 'bgMagentaBright'
	| 'bgCyanBright'
	| 'bgWhiteBright';
type Colors = ForegroundColor | BackgroundColor;
// [More colors here.](https://github.com/chalk/chalk/blob/master/readme.md#256-and-truecolor-color-support)

type LoggersTypes = 'log' | 'info' | 'warn' | 'error';

type BracketsTypes = 'parentheses' | 'angleBrackets' | 'curlyBrackets' | 'squareBrackets';

interface LoggedObject {
	content: any;
	color?: Colors;
	additions?: BracketsTypes[];
}

const defaultColor: { [key: string]: Colors[] } = {
	info: ['green', 'cyan'],
	log: ['yellow', 'cyan'],
	warn: ['red', 'yellowBright'],
	error: ['bgRed', 'redBright'],
};

function LoggersGenerator(type: LoggersTypes) {
	return (...logs: (LoggedObject | string)[]): void => {
		const result: string[] = [];
		// for (const _log of logs) {
		const isStandard = logs.every((_log: any) => typeof _log === 'string');
		for (let index = 0; index < logs.length; index++) {
			const _log = logs[index];
			if (typeof _log === 'string') {
				if (isStandard)
					if (!index)
						result.push(
							coloring(defaultColor[type][0], additions({ additions: ['squareBrackets'], content: _log }) + ':')
						);
					else result.push(coloring(defaultColor[type][1], _log));
				else result.push(coloring(defaultColor[type][0], _log));
			} else {
				if (_log.additions) _log.content = additions(_log);
				result.push(coloring(_log.color! || defaultColor[type], _log.content));
			}
		}
		console.log(...result);
	};
}

function coloring(color: Colors, content: any) {
	return chalk[color](content);
}

function additions(_log: LoggedObject): string {
	return _log.additions!.reduce((text: string, brackets: string): string => {
		if (brackets === 'parentheses') return '(' + text + ')';
		else if (brackets === 'angleBrackets') return '<' + text + '>';
		else if (brackets === 'curlyBrackets') return '{' + text + '}';
		else if (brackets === 'squareBrackets') return '[' + text + ']';
		else return '؟' + text + '?';
	}, _log.content);
}
export const info = LoggersGenerator('info');
export const log = LoggersGenerator('log');
export const warn = LoggersGenerator('warn');
export const error = LoggersGenerator('error');

import { Enum } from '../types/Enum';

/* Global methods */
export function typeOf(value: any): string {
	/* undefined */
	if (value === undefined) return 'undefined';
	else if (value === null) return 'null';
	else return value.constructor.name.replace(/^[A-Z]/, (letter: string) => letter.toLowerCase());
}

export function whichOneOfTypes(value: any, types: string[]): string | false {
	const _type = typeOf(value);
	return types.indexOf(_type) + 1 ? _type : false;
}

export function enumToArray<E extends Enum<E>>(_enum: E, keys?: boolean): string[] {
	return Object[keys ? 'keys' : 'values'](_enum).filter((v) => typeof v === 'string');
}

export function deepEqual(v1: any, v2: any) {
	return v1 === v2 || JSON.stringify(v1) === JSON.stringify(v2);
}

/* Private methods */

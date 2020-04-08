import { Enum } from '../../constants/types';
import { CommonDataTypes } from '../../constants/enums';

/* Global methods */
export function typeOf(value: any): string {
	/* undefined */
	if (value === undefined) return CommonDataTypes.undefined;
	else if (value === null) return CommonDataTypes.null;
	else if (CommonDataTypes[value.constructor.name]) return CommonDataTypes[value.constructor.name];
	else return value.constructor.name;
}

export function whichOneOfTypes(value: any, types: string[]): string | false {
	const _type = typeOf(value);
	return types.indexOf(_type) + 1 ? _type : false;
}

export function enumToArray<E extends Enum<E>>(_enum: E, keys?: boolean): string[] {
	return Object[keys ? 'keys' : 'values'](_enum).filter((v) => typeof v === 'string');
}

/* Private methods */

import { isArray } from 'util';

let _privateParsedArguments: { [key: string]: any };

/* Global methods */
export function bindArgsToEnv(): typeof _privateParsedArguments {
	if (!_privateParsedArguments) {
		_privateParsedArguments = parseArguments();
		for (const key in _privateParsedArguments) {
			if (_privateParsedArguments.hasOwnProperty(key)) {
				process.env[key] = _privateParsedArguments[key];
			}
		}
	}
	return _privateParsedArguments;
}

/* Private methods */
const parseArguments = (): any => {
	const _arguments = process.argv;
	const _parsedArgs: any = {};
	for (const _arg of _arguments) {
		if (/^--\w/.test(_arg)) {
			const _key = /^--(\w+)/.exec(_arg)![1];
			const _hasValue = /\=.+/.test(_arg);
			const _value = _hasValue ? /=(.+)$/.exec(_arg)![1] : null;
			// try {
			if (_hasValue) {
				// Has a value
				if (_parsedArgs.hasOwnProperty(_key)) {
					// has previous value
					if (['boolean', 'string', 'number'].indexOf(typeof _parsedArgs[_key]) + 1) {
						_parsedArgs[_key] = [_parsedArgs[_key], typeAssert(_value!)];
					} else {
						// previous value is array
						if (isArray(_parsedArgs[_key]))
							_parsedArgs[_key] = [..._parsedArgs[_key], ...typeAssert(_value!, _parsedArgs[_key])];
						else _parsedArgs[_key] = { ..._parsedArgs[_key], ...typeAssert(_value!, _parsedArgs[_key]) };
					}
				} else {
					_parsedArgs[_key] = typeAssert(_value!);
				}
			}
		}
		// console.log('Env -> parseArguments -> _parsedArgs', _parsedArgs);
	}
	// const parsed = {};
	return _parsedArgs;
};

const typeAssert = (_value: string, returnTo?: any): any => {
	let result: any;
	// previous value of type string
	if (['true', 'false'].indexOf(_value) + 1) {
		// previous value equal is true or false
		result = _value === 'true';
		if (isArray(returnTo)) result = [result];
	} else if (Number(_value)) {
		// previous value equal is a valid number
		result = Number(_value);
		if (isArray(returnTo)) result = [result];
	} else {
		try {
			result = JSON.parse(_value);
			if (isArray(returnTo) && !isArray(result)) result = Object.entries(result);
		} catch (error) {
			// console.log('Env -> parseArguments -> error', error);
			// value is string
			result = _value;
		}
	}
	return result;
};
// }

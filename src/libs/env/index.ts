import { isArray } from 'util';

/* Global methods */
export const bindArgsToEnv = (): any => {
	return parseArguments();
};

/* Private methods */
const parseArguments = (): any => {
	const _arguments = process.argv;
	const _parsedArgs: any = {};
	for (const _arg of _arguments) {
		if (/^--\w/.test(_arg)) {
			const _key = /^--(\w+)/.exec(_arg)[1];
			const _hasValue = /\=.+/.test(_arg);
			const _value = _hasValue ? /=(.+)$/.exec(_arg)[1] : null;
			// console.log({ _arg, _key, hasValue, _value });
			// try {
			if (_hasValue) {
				// Has a value
				if (_parsedArgs.hasOwnProperty(_key)) {
					// has previous value
					if (['boolean', 'string', 'number'].indexOf(typeof _parsedArgs[_key]) + 1) {
						_parsedArgs[_key] = [_parsedArgs[_key], typeAssert(_value)];
					} else {
						// previous value is array
						if (isArray(_parsedArgs[_key])) _parsedArgs[_key] = [..._parsedArgs[_key], ...typeAssert(_value)];
						else _parsedArgs[_key] = { ..._parsedArgs[_key], ...typeAssert(_value) };
					}
				} else {
					_parsedArgs[_key] = typeAssert(_value);
				}
			}
			// } catch (error) {
			// 	throw new Error(JSON.stringify({ error: { _arg, _key, _hasValue, _value } }));
			// }
		}
		console.log('Env -> parseArguments -> _parsedArgs', _parsedArgs);
	}
	// const parsed = {};
	return _parsedArgs;
};

const typeAssert = (_value: string): any => {
	let result: any;
	// previous value of type string
	if (['true', 'false'].indexOf(_value) + 1) {
		// previous value equal is true or false
		result = _value === 'true';
	} else if (Number(_value)) {
		// previous value equal is a valid number
		result = Number(_value);
	} else {
		try {
			// const validJson = JSON.parse(_value);
			result = JSON.parse(_value);
			// if (isArray(validJson)){ result }
		} catch (error) {
			// console.log('Env -> parseArguments -> error', error);
			// value is string
			result = _value;
		}
	}
	console.log('Env -> typeAssert -> result', result);
	return result;
};
// }

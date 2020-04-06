import * as Helpers from '../../src/main';
import * as Tester from '@h-toolkit/tester';

process.argv.push(
	...[
		'--dev',
		'--a1=dev',
		'--a2=1',
		'--a2=false',
		'--a3=[1, "hisham", false]',
		'--a4={"name": "hisham", "age": "26", "bY": 1994, "m": false}',
		'--a5=hisham',
		'--a5=true',
		'--a5=1',
		'--a5=["ali"]',
		'--objToArr={"name": "hisham"}',
		'--objToArr=["love",true, 1]',
		'--arrToObj=["love",true, 1]',
		'--arrToObj={"name": "hisham"}',
		'--a8=["love",true, 1]',
		'--a8=["love2",false, 3]',
		'--a9={"age": 19,"name":"hisham", "values": [2,true, "love"]}',
		'--a9={"age2": 19,"name2":"hisham", "values2": [2,true, "love"]}',
	]
);

console.log('parseArgs => ', Helpers.Env.bindArgsToEnv());
console.log('--------');

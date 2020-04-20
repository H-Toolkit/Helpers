export function randomNumberInRange(startRange: number, endRange: number, isFloat?: boolean): number {
	const num = Math.random() * (endRange - startRange) + startRange;
	if (isFloat) return num;
	return Math.floor(num);
}

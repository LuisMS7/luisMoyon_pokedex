/* eslint-disable @typescript-eslint/no-explicit-any */

const extractStringsFromObject = (obj: any): string[] => {
	const result: string[] = [];

	const traverseObject = (data: any) => {
		if (typeof data === "string") {
			result.push(data);
		} else if (typeof data === "object" && data !== null) {
			for (const key in data) {
				traverseObject(data[key]);
			}
		}
	};

	traverseObject(obj);
	return result;
};

export default extractStringsFromObject;

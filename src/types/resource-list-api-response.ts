export type ResourceListApiResponse<T> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};

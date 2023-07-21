/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AxiosResponse } from "axios";

export const useApi = <T>(
	apiRequest: () => Promise<AxiosResponse<T, any>>,
): {
	request: () => Promise<any>;
	response?: T;
	error: boolean;
	loading: boolean;
} => {
	const [response, setResponse] = useState<T>();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async () => {
		let response = null;
		try {
			setLoading(true);
			response = (await apiRequest()).data;
			setResponse(response);
		} catch {
			setError(true);
		}
		setLoading(false);

		return response;
	};

	return {
		request,
		response,
		error,
		loading,
	};
};

import { act, renderHook } from "@testing-library/react-hooks";
import {
	mockGetOnFailure,
	mockGetOnSuccess,
} from "@utils/test-utils/axios-mock";
import client from "@lib/axios-instance";
import { useApi } from "@hooks/useApi";

type MockType = {
	count: number;
};

const mockEndpoint = "mockEndpoint";
const mockApiFunction = () => client.get<MockType>(mockEndpoint);

describe("useApi", () => {
	it("should return response when client respond successful", async () => {
		mockGetOnSuccess(mockEndpoint, { count: 1 });
		const { result } = renderHook(() => useApi<MockType>(mockApiFunction));
		const {
			request,
			response: initialResponse,
			loading,
			error,
		} = result.current;
		expect(loading).toEqual(false);
		expect(error).toEqual(false);
		expect(initialResponse).toEqual(undefined);

		await act(async () => {
			await request();
		});

		const { response: actualResponse } = result.current;

		expect(actualResponse?.count).toEqual(1);
	});

	it("should return error when client respond with error", async () => {
		mockGetOnFailure(mockEndpoint, 400);
		const { result } = renderHook(() => useApi<MockType>(mockApiFunction));
		const {
			request,
			response: initialResponse,
			loading,
			error: initialError,
		} = result.current;
		expect(loading).toEqual(false);
		expect(initialError).toEqual(false);
		expect(initialResponse).toEqual(undefined);

		await act(async () => {
			await request();
		});

		const { response: actualResponse, error: currentError } =
			result.current;

		expect(actualResponse).toEqual(undefined);
		expect(currentError).toEqual(true);
	});
});

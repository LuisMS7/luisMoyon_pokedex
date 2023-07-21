import client from "@lib/axios-instance";
import MockAdapter from "axios-mock-adapter";

export const mockClient = new MockAdapter(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockGetOnSuccess = (endpoint: string, mockResponse: any) => {
	mockClient.onGet(endpoint).reply(200, mockResponse);
};

export const mockGetOnFailure = (endpoint: string, statusCode: number) => {
	mockClient.onGet(endpoint).reply(statusCode);
};

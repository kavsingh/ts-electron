import { ProductsService, OpenAPI } from "./__generated__";

OpenAPI.BASE = `${NATIVE_API_BASE_URL}/v1`;

export const fetchProductCategories = () =>
	withGeneralAuthHeader(() => ProductsService.getProductCategories());

const withGeneralAuthHeader = async <T>(fn: () => Promise<T>): Promise<T> => {
	const previousHeaders = structuredClone(OpenAPI.HEADERS);

	// this is a bit shit
	OpenAPI.HEADERS = {
		...OpenAPI.HEADERS,
		Authorization: `Bearer ${NATIVE_API_APP_TOKEN}`,
	};

	try {
		return await fn();
	} catch (reason) {
		throw reason instanceof Error ? reason : new Error(String(reason));
	} finally {
		OpenAPI.HEADERS = previousHeaders;
	}
};

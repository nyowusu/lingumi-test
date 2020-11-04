const isJson = (response: Response): boolean => {
  const contentType = response.headers.get("Content-Type");
  return !!(contentType && contentType.indexOf("application/json") !== -1);
};

export const defaultOptions = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  method: "GET",
};

export async function request<T = { [key: string]: any }>(
  url: string,
  options: RequestInit = {},
  fetchFn: typeof fetch = fetch
): Promise<T> {
  const allOptions = { ...defaultOptions, ...options };

  const response = await fetchFn(url, allOptions);

  const json = isJson(response) ? await response.json() : null;

  if (response.ok) {
    return json;
  }

  throw new Error(json);
}

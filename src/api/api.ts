import Cookies from "js-cookie";

const api = (() => {
  const BASE_URL = `https://fakestoreapi.com`;

  interface RequestOptions {
    headers?: Record<string, string>;
    method?: string;
    body?: string;
  }

  function fetchWithUrl(url: string, options: RequestOptions = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token: string) {
    return Cookies.set("token", token);
  }

  function getAccessToken() {
    return Cookies.get("token");
  }

  function removeToken() {
    return Cookies.remove("token");
  }

  async function login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const response = await fetchWithUrl(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, // "mor_2314"
        password, // "83r5^_"
      }),
    });

    const responseJson = await response.json();
    const { token } = responseJson;

    if (!responseJson) {
      throw new Error("Something went wrong");
    }

    return token;
  }

  async function getAllProducts() {
    const response = await fetchWithUrl(`${BASE_URL}/products`, {
      method: "GET",
    });
    const responseJson = await response.json();

    return responseJson;
  }

  return {
    login,
    getAllProducts,
    putAccessToken,
    getAccessToken,
    fetchWithUrl,
    removeToken,
  };
})(); // IIFE (Immediately Invoked Function Expression)

export default api;

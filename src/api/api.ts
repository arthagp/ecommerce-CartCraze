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
    const response = await fetchWithUrl(`${BASE_URL}/products`);
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getCategoriesJewelry() {
    const response = await fetchWithUrl(
      `${BASE_URL}/products/category/jewelery`
    );
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getCategoriesMensClothing() {
    const response = await fetchWithUrl(
      `${BASE_URL}/products/category/men's clothing`
    );
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getCategoriesWomensClothing() {
    const response = await fetchWithUrl(
      `${BASE_URL}/products/category/women's clothing`
    );
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getCategoriesElectronics() {
    const response = await fetchWithUrl(
      `${BASE_URL}/products/category/electronics`
    );
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getItemProduct(id: string) {
    const response = await fetchWithUrl(`${BASE_URL}/products/${id}`);
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  //userId 2 -> carts 3

  async function getCartsByCartUserId_2() {
    const response = await fetchWithUrl(`${BASE_URL}/carts/3`);
    const responsejSon = await response.json();
    if (!responsejSon) {
      throw new Error("Something went wrong");
    }
    return responsejSon;
  }

  // ADD NEW CARTS

  type AddNewCartProps = {
    productId: number;
    quantity: number;
  };

  async function addNewCartByUserId_2({
    productId,
    quantity,
  }: AddNewCartProps) {
    const response = await fetchWithUrl(`${BASE_URL}/carts`, {
      method: "POST",
      body: JSON.stringify({
        userId: 2,
        date: new Date(),
        products: [{ productId, quantity }],
      }),
    });

    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  async function getSingleProduct(productId: number) {
    const response = await fetchWithUrl(`${BASE_URL}/products/${productId}`);
    const responseJson = await response.json();
    if (!responseJson) {
      throw new Error("Something went wrong");
    }
    return responseJson;
  }

  return {
    login,
    getAllProducts,
    putAccessToken,
    getAccessToken,
    fetchWithUrl,
    removeToken,
    getCategoriesJewelry,
    getCategoriesMensClothing,
    getCategoriesWomensClothing,
    getCategoriesElectronics,
    getItemProduct,
    getCartsByCartUserId_2,
    addNewCartByUserId_2,
    getSingleProduct,
  };
})(); // IIFE (Immediately Invoked Function Expression)

export default api;

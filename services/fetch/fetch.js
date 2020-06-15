import { Fetch } from "@services/interceptors";

export const fetchData = async () => {
  const options = {
    method: "GET",
    url:
      "https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js",
  };
  try {
    const response = await Fetch(options);
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: [] };
  }
};

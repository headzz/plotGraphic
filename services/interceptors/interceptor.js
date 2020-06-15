import axios from "axios";

const instance = axios.create();
/**
 * @function Fetch
 * @description interceptor created to transform data that will be used as an input for the chart plot
 */
instance.interceptors.response.use(
  (response) => {
    const data = response.data.reduce((item, value) => {
      const newDate = new Date(value[0]);

      item.push({ date: newDate, value: value[1] });
      return item;
    }, []);

    response.data = data;
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export default instance;

import axios from "axios";
import { getProductsData } from "../redux/productaction/actionCreator";
// import { getProductsData } from "../redux/actionCreator";
let baseurl = "https://fakestoreapi.com/products";
export const getData = (dispatch, url) => {
  return axios
    .get(url)
    .then((response) => {
      dispatch(getProductsData(response.data));
    })
    .catch((error) => {
      console.log("error");
    });
};

export const fetchProductDetails = async (setSingle, setLoading, id) => {
  setLoading(true);
  await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setSingle(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAll = (setUrl) => {
  setUrl(baseurl);
};
export const getMen = (setUrl) => {
  setUrl(`${baseurl}/category/men's clothing`);
};
export const getWomen = (setUrl) => {
  setUrl(`${baseurl}/category/women's clothing`);
};
export const getJel = (setUrl) => {
  setUrl(`${baseurl}/category/jewelery`);
};
export const getEle = (setUrl) => {
  setUrl(`${baseurl}/category/electronics`);
};

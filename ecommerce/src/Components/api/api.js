import axios from "axios";
export const getProductData = (dispatch)=>{
    setTimeout(() => {
        axios
          .get("http://localhost:3000/products")
          .then((res) => {
            // console.log(res.data);
            dispatch({ type: "SUCCESS", payload: res.data });
          })
          .catch(() => {
            dispatch({ type: "ERROR" });
          });
      }, 2000);
}

export const addToCart = (data)=>{
    axios.post("http://localhost:3000/cart", data).then(()=>{
        alert("Items successfully added to cart")
    })
}

export const removeItem = (id, setCart)=>{
    axios.delete(`http://localhost:3000/cart/${id}`).then(()=>{
      axios.get("http://localhost:3000/cart").then((data) => {
      setCart(data.data);
      console.log(data.data);
    }); 
    })
  }

  export const getcartItem = (setCart)=>{
    axios.get("http://localhost:3000/cart").then((data) => {
      setCart(data.data);
      console.log(data.data);
    });
  }
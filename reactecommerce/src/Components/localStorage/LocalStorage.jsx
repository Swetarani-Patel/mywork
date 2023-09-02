import { getCartItem } from "../../redux/cartAction/cartActionCreator";

   
export const addToCart = (toast, single, dispatch, selectedSize) => {
    let arr = JSON.parse(localStorage.getItem('cart')) || [];
    const filteredArr = arr.filter((items) => {
      return items.id === single.id;
    });
  
    if (filteredArr.length === 0) {
      arr.push({ ...single, size: selectedSize, quantity:1 });
      localStorage.setItem('cart', JSON.stringify(arr));
      dispatch(getCartItem(arr));
      const words = single.title.split(' ').slice(0, 3).join(' ');
      
      toast({
        title: "Item Added to Cart",
        description: `${words} has been added to your cart.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      filteredArr[0].quantity += 1;
     
      toast({
        title: "Item Already Exists",
        description: "This item is already in your cart.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Text, Image, Button, Flex, Input, ButtonGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import CustomModal from "./CustomModal";
import EmptyCart from "./EmptyCart";
import { removeCartItem, updateCartQuantity, getCouponCode } from "./CartFunction";

function Cart() {
  const storedData = useSelector((store) => {
    return store.cart.cart;
  });

  const [cart, setCart] = useState(storedData);
  const [discount, setDiscount] = useState(0.1);
  const [coupon, setCoupon] = useState({
    code: '',
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountAmount = totalPrice * discount;
  const discountedTotal = totalPrice - discountAmount;

  const couponData = (e) => {
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const openConfirmationModal = (itemId) => {
    setItemIdToRemove(itemId);
    setIsConfirmationModalOpen(true);
  };

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemIdToRemove, setItemIdToRemove] = useState(null);

  const handleRemoveItem = () => {
    if (itemIdToRemove) {
      removeCartItem(itemIdToRemove, cart, setCart);
      setIsConfirmationModalOpen(false);
    }
  };

  return (
    <Box p={4} w={'70rem'} h={'30rem'}>
      <Flex>
        {cart.length === 0 ? ( 
         <EmptyCart/>
        ) : (
          <Box flex={3}>
            {cart.map((ele) => (
              <Flex key={ele.id} align="center" mb={4}>
                <Flex mb={"1rem"}>
                  <Box>
                    <Image
                      src={ele.image}
                      alt={ele.title}
                      boxSize="100px"
                      mr={4}
                    />
                  </Box>
                  <Box align={"left"}>
                    <Text fontWeight="semibold">{ele.title} &nbsp;</Text>
                    <Text color="gray.600" fontSize="sm">
                      {ele.category}
                    </Text>
                    <Text fontSize="md">${ele.price * ele.quantity}</Text>
                    <Text>{ele.size}</Text>

                    <ButtonGroup>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateCartQuantity(ele.id, 1, cart, setCart)}
                      >
                        +
                      </Button>
                      <Text>{ele.quantity}</Text>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateCartQuantity(ele.id, -1, cart, setCart)}
                      >
                        -
                      </Button>
                    </ButtonGroup>

                    <Button
                      variant="link"
                      color="red.500"
                      onClick={() => openConfirmationModal(ele.id)}
                    >
                      <MdDelete size={"1.1rem"} />
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Box>
        )}
        {
          cart.length === 0 ? (" ") :
        
        (<Box flex={1} ml={8}>
  <Flex justifyContent="space-between" mb={2}>
    <Input size="md" placeholder="Enter coupon" name="code" onChange={couponData} />
    <Button
      ml={"0.2rem"}
      fontSize={"sm"}
      w={"10rem"}
      _hover={{ bg: "gray" }}
      onClick={() => getCouponCode(coupon, setDiscount)}
    >
      Apply Coupon
    </Button>
  </Flex>
  <Box border={"1px solid black"} p={4} rounded="md">
    <Text fontSize="lg" fontWeight="semibold" mb={2}>
      Summary
    </Text>
    <Flex justifyContent="space-between" mb={2}>
      <Text>Total Price:</Text>
      <Text>${totalPrice.toFixed(2)}</Text>
    </Flex>
    <Flex justifyContent="space-between" mb={2}>
      <Text>Discount:</Text>
      <Text>${discountAmount.toFixed(2)}</Text>
    </Flex>
    <Flex justifyContent="space-between" mt={2}>
      <Text fontWeight="semibold">Total:</Text>
      <Text fontWeight="semibold">${discountedTotal.toFixed(2)}</Text>
    </Flex>
    <Button mt={4} isFullWidth _hover={{ bg: "gray" }}>
      Proceed to Checkout
    </Button>
  </Box>
        </Box>)}

      </Flex>

      <CustomModal 
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        handleRemoveItem={handleRemoveItem}
      />
    </Box>
  );
}

export default Cart;

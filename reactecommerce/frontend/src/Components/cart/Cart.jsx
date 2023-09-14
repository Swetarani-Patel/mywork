import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Input,
  ButtonGroup,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  ModalFooter,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import CustomModal from "./CustomModal";
import EmptyCart from "./EmptyCart";
import {
  removeCartItem,
  updateCartQuantity,
  getCouponCode,
} from "./CartFunction";
import axios from "axios";
import { getCartItem } from "../../redux/cartAction/cartActionCreator";
import { useNavigate } from "react-router-dom";

function Cart() {
  const storedData = useSelector((store) => {
    return store.cart.cart;
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [cart, setCart] = useState(storedData);
  const [discount, setDiscount] = useState(0.1);
  const [coupon, setCoupon] = useState({
    code: "",
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

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    mobile: "",
    name: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  async function handlecheckoutok() {
    const token = localStorage.getItem("access-token");
    const isMobileValid = /^[0-9]{10}$/.test(address.mobile);
    const iszipValid = /^[0-9]{6}$/.test(address.zip);
    if (
      address.name &&
      address.street &&
      address.city &&
      address.state &&
      iszipValid &&
      isMobileValid
    ) {
      toast({
        title: "Order Successful",
        description:
          "Thank you for your order! Your order has been successfully placed. You will be redirected to the home page in 3 seconds.",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      try {
        await axios.post("http://localhost:8000/checkout", {
          token,
          address,
        });

        localStorage.clear();
        localStorage.setItem("access-token", token);
        setCart([]);
        dispatch(getCartItem([]));

        onClose();
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    } else {
      toast({
        title: "Incomplete Information",
        description: " Please complete all required fields.",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  const handleCheckout = () => {
    const token = localStorage.getItem("access-token");
    if (!token) {
      toast({
        title: "Login Required",
        description:
          "Please log in or create an account to proceed with checkout.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      //req.body = {token:token}
      onOpen();
    }
  };

  return (
    <Box p={4} w={"70rem"}>
      <Flex>
        {cart.length === 0 ? (
          <EmptyCart />
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
                        onClick={() =>
                          updateCartQuantity(ele.id, 1, cart, setCart)
                        }
                      >
                        +
                      </Button>
                      <Text>{ele.quantity}</Text>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          updateCartQuantity(ele.id, -1, cart, setCart)
                        }
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
        {cart.length === 0 ? (
          " "
        ) : (
          <Box flex={1} ml={8}>
            <Flex justifyContent="space-between" mb={2}>
              <Input
                size="md"
                placeholder="Enter coupon"
                name="code"
                onChange={couponData}
              />
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
              <Button
                mt={4}
                isFullWidth
                _hover={{ bg: "gray" }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        )}
      </Flex>

      <CustomModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        handleRemoveItem={handleRemoveItem}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text fontSize="16px" fontWeight="600">
              Thank you for choosing Glamio! To ensure a seamless delivery,
              please provide your shipping address so we can send you the order
              details to your email.
            </Text>

            <FormControl mt={2}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={address.name}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                type="text"
                name="street"
                placeholder="Street"
                value={address.street}
                onChange={handleInputChange}
                required
              />
            </FormControl>

            <FormControl mt={2}>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                type="number"
                name="zip"
                placeholder="ZIP Code"
                value={address.zip}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                type="number"
                name="mobile"
                placeholder="Mobile Number"
                value={address.mobile}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              _hover={{ background: "gray.600" }}
              backgroundColor="black"
              color="#fff"
              onClick={handlecheckoutok}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Cart;

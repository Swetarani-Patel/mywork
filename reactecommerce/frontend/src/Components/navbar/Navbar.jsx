import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  Button,
  IconButton,
  useDisclosure,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authaction/authaction";

const Navbar = () => {
  const accessToken = localStorage.getItem("access-token");
  const profile = localStorage.getItem("user-profile");
  const state = useSelector((state) => state);
  let cartItem = state.cart.cart.length;
  console.log(state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 
  function handleLogout() {
  
  if(localStorage.getItem("access-token")){
    dispatch(logout());
  }else{
  
    navigate("/signup")
  }
  
    
  }
  return (
    <Box
      bg={"gray.200"}
      py={4}
      px={8}
      boxShadow={"lg"}
      position={"sticky"}
      top={"0"}
      zIndex={"10"}
    >
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" fontSize="2xl" fontWeight="bold">
          Glam<span style={{ color: "#EF9B0F" }}>io.</span>
        </ChakraLink>
        <Spacer />
        <Flex>
          <ChakraLink as={Link} to="/" mx={4}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/product" mx={4}>
            Product
          </ChakraLink>
          <ChakraLink as={Link} to="/about" mx={4}>
            About
          </ChakraLink>
          <ChakraLink as={Link} to="/contact" mx={4}>
            Contact
          </ChakraLink>
        </Flex>
        <Spacer />
        {accessToken && (
          <Image
            src={
              profile
                ? state.auth.user.photoURL
                : "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"
            }
           borderRadius={'5rem'} w={'2.5rem'} mr={'1rem'}/>
        )}
        <Text>
          <Button border="2px" borderColor="gray.400" onClick={handleLogout}>
            <AiOutlineLogin />
            &nbsp;{accessToken ? "Logout" : "Login"}
          </Button>{" "}
        </Text>
        &nbsp;&nbsp;
        <Link to="/cart">
          <Button border="2px" borderColor="gray.400">
            <BsCart4 /> &nbsp; Cart ({cartItem})
          </Button>{" "}
        </Link>
        &nbsp;&nbsp;
        <IconButton aria-label="Toggle Color Mode" size="sm" variant="ghost" />
      </Flex>
    </Box>
  );
};

export default Navbar;

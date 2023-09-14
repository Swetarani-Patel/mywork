import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function CustomModal({
  handleRemoveItem,
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
}) {
  return (
    <Modal
      isOpen={isConfirmationModalOpen}
      onClose={() => setIsConfirmationModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Removal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to remove this item from the cart?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={handleRemoveItem}>
            YES
          </Button>{" "}
          &nbsp;&nbsp;
          <Button onClick={() => setIsConfirmationModalOpen(false)}>NO</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;

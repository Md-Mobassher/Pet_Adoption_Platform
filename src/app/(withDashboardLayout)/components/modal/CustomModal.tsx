import { Modal, ModalContent } from "@nextui-org/modal";

export default function CustomModal({
  isOpen,
  onOpenChange,
  children,
  ...props
}: any) {
  return (
    <>
      <Modal
        {...props}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>{children}</ModalContent>
      </Modal>
    </>
  );
}

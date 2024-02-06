import { Modal } from "@shopify/polaris";
import React from "react";

function ImportPopup() {
  return (
    <Modal open={false} title={undefined} onClose={function (): void {
      throw new Error("Function not implemented.");
    } } >

    </Modal>
  );
}

export default ImportPopup;
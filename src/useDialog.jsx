import React, { useRef } from "react";

const styles = `<style>
.dialogDefault {
  background: transparent;
  border: none;
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.dialogDefault::backdrop {
  background: hsla(0, 0%, 100%, 85%);
}
</style>`;

document.head.insertAdjacentHTML("beforeend", styles)

export function useDialog() {
  const dialogRef = useRef();

  const openDialog = () => dialogRef.current.showModal();

  const closeDialog = () => dialogRef.current.close();

  function Dialog({ className = "", children }) {
    return (
      <dialog ref={dialogRef} className={`dialogDefault ${className}`}>
        {children}
      </dialog>
    );
  }

  return [Dialog, openDialog, closeDialog];
}

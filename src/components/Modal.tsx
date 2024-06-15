"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import XMark from "../../public/icons/xmark.svg";

const Modal = ({ children }: { children: ReactNode }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();
  const modalRoot = document.getElementById("modal-root-content") as Element;

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    if (!modalRef?.current?.open) {
      modalRef?.current?.showModal();
    }
  }, []);
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={handleClose}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col px-2 pt-1 pb-4 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 w-10/12"
    >
      <span className="flex justify-end cursor-pointer" onClick={handleClose}>
        <Image src={XMark} alt="Close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    modalRoot
  );
};

export default Modal;

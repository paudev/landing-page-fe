"use client";

import {
  type ElementRef,
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { useRouter } from "next/navigation";
import useOutsideClick from "@/hooks/useOutsideClick";

export const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const onDismiss = () => {
    router.back();
  };
  useOutsideClick(() => {
    onDismiss();
  }, dialogRef);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md flex justify-center items-center z-50 bg-transparent">
      <dialog
        ref={dialogRef}
        className="flex flex-col bg-transparent"
        onClose={onDismiss}
      >
        {/** TODO: proper X icon */}
        <button
          onClick={onDismiss}
          className="absolute top-8 right-2 z-50 text-black bg-white h-10 w-10 flex justify-center items-center rounded-full font-bold opacity-70"
        >
          X
        </button>
        {children}
      </dialog>
    </div>
  );
};

export default function Modal({ children }: PropsWithChildren) {
  const modalRoot = document.getElementById("modal-root");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const scroll = document.getElementsByClassName(
      "disableScroll"
    )[0] as HTMLElement;

    body?.style.setProperty("overflow", "hidden", "important");
    scroll?.style.setProperty("overflow", "hidden", "important");

    setMounted(true);

    return () => {
      body?.style.setProperty("overflow", "auto", "important");
      scroll?.style.setProperty("overflow", "auto", "important");

      setMounted(false);
    };
  }, []);

  return mounted && modalRoot
    ? createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot)
    : null;
}

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Backdrop({ children }: { children: ReactNode }) {
  return (
    <div className="absolute z-40 flex h-screen w-full items-center justify-center bg-black/75 backdrop-blur-sm">
      {createPortal(
        <div className="absolute z-50">{children}</div>,
        document.body
      )}
    </div>
  );
}

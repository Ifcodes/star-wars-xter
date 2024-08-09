import clsx from "clsx";
import { ReactNode, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useClickAway } from "react-use";
import "./model-styles.scss";
import Title from "../../atoms/typography/title";

interface IModalProps {
  title: string;
  showModal: boolean;
  closeModal: (val: boolean) => void;
  children: ReactNode;
}
const Modal = ({ title, showModal, closeModal, children }: IModalProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    closeModal(false);
  });

  return (
    <div
      className={clsx("overlay", {
        "open-overlay": showModal,
      })}
    >
      <dialog open={showModal} ref={ref}>
        <header className="modal-nav">
          <Title text={title} variant="h1" />
          <IoMdClose
            size={24}
            onClick={() => closeModal(false)}
            className="cursor-pointer"
          />
        </header>
        <div className="modal-cont">{children}</div>
      </dialog>
    </div>
  );
};

export default Modal;

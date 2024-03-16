import { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { SiIfixit } from 'react-icons/si';

export interface ModalProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export interface ModalUIProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ isOpen, setOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalUI setOpen={setOpen}>{children}</ModalUI>,
    document.getElementById('modal') as HTMLDivElement,
  );
};

const ModalUI = ({ setOpen, children }: ModalUIProps) => {
  return (
    <div
      className="absolute top-0 flex flex-col items-center w-full h-full backdrop-blur-md z-10"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.a
        className="sticky top-0 w-full h-[20dvh]"
        initial={{ y: '-50%' }}
        whileHover={{
          y: 0,
        }}
      >
        <SiIfixit className="w-full h-[50%] py-6 text-indigo-500" />
      </motion.a>
      <motion.main
        className={
          'sticky top-[10dvh] flex flex-col items-center w-full h-[90dvh] bg-indigo-50 rounded-t-2xl overflow-y-scroll'
        }
        initial={{ opacity: 0, y: '50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.main>
    </div>
  );
};

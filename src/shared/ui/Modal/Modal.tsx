import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group'
import s from './Modal.module.sass'
import animationStyles from './animations.module.sass';
import {GrFormClose} from 'react-icons/gr'
import {Portal} from "@/shared/lib/Portal";
import {useKeyboard} from "@/shared/lib/KeyboardManager";

const ANIMATION_TIME = 200

const useMount = ({isOpened}: {isOpened: boolean}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if(isOpened && !mounted) {
      setMounted(true);
    } else if (!isOpened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [isOpened])
  return {mounted}
}

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};
const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

interface layoutProps {
  children: React.ReactNode
  onClose: () => void
  isOpened: boolean
}
export const Layout = ({ onClose, children, isOpened }: layoutProps) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [animationIn, setAnimationIn] = useState(false);

  useKeyboard({
    key: 'Escape',
    callback: onClose,
    disabled: false,
  });


  useEffect(() => {
    document.body.classList.add('modalOpen')
    return () => {
      document.body.classList.remove('modalOpen')
    }
  }, [])
  useEffect(() => {
    setAnimationIn(isOpened);
  }, [isOpened]);
  return (
    <div className={s.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={s.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={s.content}>
          <div className={s.closeBtn} onClick={onClose}><GrFormClose size={30}/></div>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

interface ModalProps {
  children: React.ReactNode
  isOpened: boolean
  onClose: () => void
}
export const Modal = ({children, isOpened, onClose}: ModalProps) => {
  const { mounted } = useMount({ isOpened });
  if (!mounted) {
    return null;
  }
  return (
    <Portal>
      <Layout onClose={onClose} isOpened={isOpened}>
        {children}
      </Layout>
    </Portal>
  );
};


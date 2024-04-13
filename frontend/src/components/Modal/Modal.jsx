import React from 'react'
import { useSpring, animated } from 'react-spring';

const Modal = ({ isOpen, children }) => {

  const animationProps = useSpring({
    opacity: isOpen ? 1 : 0
  });

  if (!isOpen) return null
  
  return (
    <animated.div className='modal' style={animationProps}>
      {children}
    </animated.div>
  )
}

export default Modal
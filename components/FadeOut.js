import React, { useRef, useContext, useLayoutEffect } from "react"
import { gsap } from "gsap"
import AnimateInOut from "./AnimateInOut"

const FadeOut = ({ children, delay, x, y, durationIn, durationOut }) => (
  <AnimateInOut
    as="div"
    // durationIn={durationIn || 1}
    durationOut={durationOut || 0.75}
    delay={delay}
    from={{
      transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      opacity: 0,
      duration: 0.75,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      duration: 1,
      x: 0,
      y: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FadeOut
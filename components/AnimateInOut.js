import React, { useRef, useContext, useLayoutEffect } from "react"
import { TransitionContext } from "./TransitionContext"
import { gsap } from "gsap"

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro,
}) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set })
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    })

    // outro animation
    if (!skipOutro) {
      timeline.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      )
    }
  }, [])

  return (
    <div as={as} sx={from} ref={el}>
      {children}
    </div>
  )
}

export default React.memo(AnimateInOut)
import { gsap } from "gsap"
import { TransitionContext } from "./TransitionContext"
import { useState, useContext, useRef, useLayoutEffect } from "react"

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, background } = useContext(TransitionContext)
  const el = useRef()

  useLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  useLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    })
  }, [background])

  return <div ref={el}>{displayChildren}</div>
}
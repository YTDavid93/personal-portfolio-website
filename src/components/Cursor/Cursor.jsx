import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animFrame;

    // Track mouse position
    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 5 + "px";
      cursor.style.top = my - 5 + "px";
    };

    // Animate the lagging ring
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + "px";
      ring.style.top = ry - 18 + "px";
      animFrame = requestAnimationFrame(animateRing);
    };

    // Hover effect on interactive elements
    const handleMouseEnter = () => {
      cursor.style.transform = "scale(2)";
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "rgba(200,240,74,0.6)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(200,240,74,0.4)";
    };

    // Attach hover listeners to interactive elements
    const interactiveEls = document.querySelectorAll(
      "a, button, .project-item, .skill-tag"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);
    animFrame = requestAnimationFrame(animateRing);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

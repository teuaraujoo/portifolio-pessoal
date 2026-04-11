import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    if (window.innerWidth < 768) {
      cursorDot.style.display = "none";
      cursorOutline.style.display = "none";
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      cursorOutline.style.left = outlineX + "px";
      cursorOutline.style.top = outlineY + "px";

      animationFrameId = requestAnimationFrame(animateCursor);
    }

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
}

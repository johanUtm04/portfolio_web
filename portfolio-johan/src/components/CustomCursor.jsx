import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black
                 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default CustomCursor;
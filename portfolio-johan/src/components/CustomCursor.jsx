import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Punto central */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full
                   pointer-events-none z-[10001]"
        style={{
          transform: `translate3d(${pos.x - 1}px, ${pos.y - 1}px, 0)`,
        }}
      />

      {/* Anillo */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full
                   border-2 border-black pointer-events-none
                   z-[10000] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;

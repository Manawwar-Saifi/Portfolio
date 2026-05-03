// app/components/LenisProvider.js
"use client";

import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    // Check if the component is mounted on the client side
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        // You can customize options here
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Assign the instance to the ref for potential later access
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return <>{children}</>;
}


// useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1, // smoothness (0-1)
//       duration: 1.2, // scroll duration
//       smoothWheel: true,
//       smoothTouch: true,
//     });
//     console.log(lenis);
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);
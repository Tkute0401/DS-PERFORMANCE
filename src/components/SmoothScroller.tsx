"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.2, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

"use client";

import React, { useEffect } from "react";
import { ParpellFloatingLogo } from "./ParpellFloatingLogo";

interface Parpell3DSpinProps {
  onLoaded?: () => void;
  onProgress?: (progress: number) => void;
  className?: string;
}

/**
 * Replaced heavy Three.js / WebGL 3D render with lightweight, elegant Floating Logo
 */
export function Parpell3DSpin({ onLoaded, onProgress, className = "" }: Parpell3DSpinProps) {
  useEffect(() => {
    onProgress?.(100);
    onLoaded?.();
  }, [onLoaded, onProgress]);

  return <ParpellFloatingLogo className={className} />;
}

export default Parpell3DSpin;

// components/ThreeSceneWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";


const Scene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-100 to-sky-200/10 dark:from-slate-900 dark:to-sky-900/10" />
  ),
});

export default function ThreeSceneWrapper() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-slate-900" />}>
      <Scene />
    </Suspense>
  );
}
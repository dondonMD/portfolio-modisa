"use client";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("../../portfolio/src/app/ThreeScene"), {
  ssr: false,
});

export default function SceneClientWrapper() {
  return <ThreeScene />;
}

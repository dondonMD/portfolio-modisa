"use client";
import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../../portfolio/src/app/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-100 to-primary-light/10 dark:from-gray-900 dark:to-primary-dark/10" />
  ),
});

export default function SceneClientWrapper() {
  return <Scene />;
}

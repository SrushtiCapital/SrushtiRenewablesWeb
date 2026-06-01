"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const blobs = [
  {
    wrapper:
      "absolute -left-[15%] top-[8%] h-[min(520px,55vh)] w-[min(640px,70vw)]",
    inner: "traveling-gradient-blob-a",
  },
  {
    wrapper:
      "absolute -right-[10%] top-[32%] h-[min(480px,50vh)] w-[min(560px,65vw)]",
    inner: "traveling-gradient-blob-b",
  },
  {
    wrapper:
      "absolute left-[20%] top-[62%] h-[min(400px,45vh)] w-[min(500px,55vw)]",
    inner: "traveling-gradient-blob-c",
  },
] as const;

export function TravelingGradient() {
  const { scrollYProgress } = useScroll();

  const blobYs = [
    useTransform(scrollYProgress, [0, 1], ["0%", "35%"]),
    useTransform(scrollYProgress, [0, 1], ["15%", "-25%"]),
    useTransform(scrollYProgress, [0, 1], ["55%", "10%"]),
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="traveling-gradient-base absolute inset-0" />

      {blobs.map((blob, i) => (
        <motion.div
          key={blob.inner}
          style={{ y: blobYs[i] }}
          className={blob.wrapper}
        >
          <div className={`${blob.inner} h-full w-full rounded-full`} />
        </motion.div>
      ))}
    </div>
  );
}

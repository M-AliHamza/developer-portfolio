"use client"

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("./homepage/experience"), {
  ssr: false,
});

const Education = dynamic(() => import("./homepage/education"), {
  ssr: false,
});

export { Experience, Education };
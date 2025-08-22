"use client"

import dynamic from "next/dynamic";

const GlowCard = dynamic(() => import("./glow-card"), {
  ssr: false,
});

export default function GlowCardWrapper({ children, identifier }) {
  return <GlowCard identifier={identifier}>{children}</GlowCard>;
}
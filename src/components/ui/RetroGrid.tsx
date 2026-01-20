"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RetroGrid() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.2]">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
            />

            {/* Moving Perspective Grid */}
            <div className="absolute inset-0 [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)]">
                <div className="animate-grid w-[200%] h-[200%] -ml-[50%] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_2px_at_center,rgba(48,232,122,0.15)_0,transparent_100%)] bg-[length:24px_24px]"
                />
            </div>
        </div>
    );
}

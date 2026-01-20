"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function WorldGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [48 / 255, 232 / 255, 122 / 255], // Primary Green
            glowColor: [0.05, 0.2, 0.1], // Subtle Green Glow
            markers: [
                { location: [52.2297, 21.0122], size: 0.1 }, // Warsaw
                { location: [40.7128, -74.0060], size: 0.05 }, // NYC
                { location: [51.5074, -0.1278], size: 0.05 }, // London
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden opacity-80 mix-blend-screen pointer-events-none">
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}

#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/index.js"],
        bundle: true,
        outfile: "dist/bundle.js",
        sourcemap: true,
    },
    { root: "dist" }
);

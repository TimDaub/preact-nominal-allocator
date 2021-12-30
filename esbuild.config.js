#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
    {
        logLevel: "info",
        entryPoints: ["src/index.js"],
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        loader: {".js": "jsx"},
        bundle: true,
        outfile: "dist/bundle.js",
    },
{ root: "dist" }
);

/*
"esbuild ./src/index.js --bundle --outfile=dist/bundle.js --loader:.js=jsx --jsx-factory=h --jsx-fragment=Fragment --serve=5000 --servedir=dist"*/

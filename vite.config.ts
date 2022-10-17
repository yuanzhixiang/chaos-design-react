import {defineConfig} from "vite"

export default defineConfig({

    build: {
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "chaosd",
            formats: ["es", "umd"]
        }
    }
})

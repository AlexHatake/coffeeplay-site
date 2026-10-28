import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    isSsrBuild && {
      name: "empty-css-for-ssr",
      enforce: "pre" as const,
      resolveId(id: string) {
        if (id.endsWith(".css")) return "\0empty.css";
        return null;
      },
      load(id: string) {
        if (id === "\0empty.css") return "export default {}";
        return null;
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    noExternal: true,
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
}))

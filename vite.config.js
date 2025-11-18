import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/wow-wotlk-guild/', // <--- add this
    plugins: [react()],
});

import { defineConfig } from 'vite';

export default defineConfig({
    base: '/emotion/', // 👉 이렇게 해줘야 index.html 경로들이 emotion 하위에서 맞춰짐
    publicDir: 'emotion', // (기본값이지만 명시해도 OK)
    build: {
        outDir: 'emotion', // 기본 빌드 경로
        emptyOutDir: true,
    },
});
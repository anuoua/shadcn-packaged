# Shadcn Packaged

This is a package of all [shadcn/ui](https://ui.shadcn.com/) components without CLI for easy use. 

It simply exports all the useful files with type declaration.

## Pre work

1. Create a new react project.
2. [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation).

## Install

```shell
npm i tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
npm i shadcn-packaged
```

## Configuation

tailwind.config.js

```javascript
const config = {
  content: [
    "...",
    "./node_modules/shadcn-packaged/**/*.{jsx,js,ts,tsx}",
  ],
  presets: [require("shadcn-packaged/tailwind.config")],
};
export default config;
```

next.config.js

```javascript
const nextConfig = {
  // ...
  transpilePackages: ["shadcn-packaged"],
};

export default nextConfig;
```

vite [#optimizedeps-include](https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include)

```javascript
export default defineConfig({
  optimizeDeps: {
    include: ['shadcn-packaged/**/*.{js,jsx,ts,tsx}'],
  },
})
```

## Usage

- shadcn-packaged/ui/*: components
- shadcn-packaged/hooks/*: hooks
- shadcn-packaged/lib/utils: utils

```javascript
import { Button } from 'shadcn-packaged/ui/button';
import { cn } from 'shadcn-packaged/lib/utils';
import { useToast } from 'shadcn/hooks/use-toast';
```

## Type declaration and IDE auto import

This package support vscode auto import, add below code to project main.tsx or root layout.tsx in NextJS

```typescript
/// <reference types="shadcn-packaged" />
```

## Custom Theme

to do...

## License

MIT anuoua

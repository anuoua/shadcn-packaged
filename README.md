# Shadcn Packaged

This is an npm package that exports all [shadcn/ui](https://ui.shadcn.com/) components without the need for a CLI, designed for ease of use. 

It simply provides all useful files along with type declarations.

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

vite.config.js [#optimizedeps-include](https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include)

```javascript
export default defineConfig({
  optimizeDeps: {
    include: ['shadcn-packaged/**/*.{js,jsx,ts,tsx}'],
  },
})
```

## Usage

Package Struct

- shadcn-packaged/ui/*: components
- shadcn-packaged/hooks/*: hooks
- shadcn-packaged/lib/utils: utils

Import style

> If you have a fully customized style in tailwindcss entry, you don't need to import it

```javascript
import "shadcn-packaged/index.css";
```

Import code

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

index.css | global.css (the tailwindcss entry)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* theme here */
  }

  .dark {
    /* theme here */
  }
}
```

## License

MIT anuoua

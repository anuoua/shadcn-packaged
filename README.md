# Shadcn Packaged

**Support Tailwindcss V4**

This is an npm package that exports all [shadcn/ui](https://ui.shadcn.com/) components without the need for a CLI, designed for ease of use. 

It simply provides all useful files along with type declarations.

Weekly publish latest version components to npm.

## Pre work

1. Create a new react project.
2. [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation).

## Install

```shell
npm i class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
npm i shadcn-packaged
```

## Configuation

For nextjs user, next.config.js

```javascript
const nextConfig = {
  // ...
  transpilePackages: ["shadcn-packaged"],
};

export default nextConfig;
```

For vite user, vite.config.js

```javascript
export default defineConfig({
  optimizeDeps: {
    include: ['shadcn-packaged/**/*.{js,jsx,ts,tsx}'],
  },
})
```

## Usage

Import default style

> If you have a fully customized style in global entry css file, see [Custom Theme](#custom-theme), you don't need to import it

The global entry css file, `index.css` | `global.css`

```css
@import "shadcn-packaged/index.css";
/* source detection, according to the actual path specified */
@source "../node_modules/shadcn-packaged";
```

Import code

```javascript
import { Button } from 'shadcn-packaged/ui/button';
import { cn } from 'shadcn-packaged/lib/utils';
import { useToast } from 'shadcn/hooks/use-toast';
```

Package Struct

- shadcn-packaged/ui/*: components
- shadcn-packaged/hooks/*: hooks
- shadcn-packaged/lib/utils: utils

## Type declaration and IDE auto import

This package support vscode auto import.

If the automatic code import does not take effect, please try the following methods.

1. add below code to project main.tsx or root layout.tsx in NextJS.

```typescript
/// <reference types="shadcn-packaged" />
```

2. change tsconig.json

```json
{
  "compilerOptions": {
    // append to exist types
    "types": ["...", "./node_modules/shadcn-packaged/**/*.ts"] 
  }
}
```

## Custom Theme

The global entry css file, `index.css` | `global.css`, more detail see [shadcn theme](https://ui.shadcn.com/docs/theming)

```css
@import "tailwindcss";
@import "tw-animate-css";

/* source detection, according to the actual path specified */
@source "../node_modules/shadcn-packaged";

@custom-variant dark (&:is(.dark *));

:root {
  ...
}

.dark {
  ...
}

@theme inline {
  ...
}

@layer base {
  ...
}
```

## License

MIT anuoua

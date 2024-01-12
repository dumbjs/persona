# @dumbjs/persona

> Low level controls to build browser theming engine

- [@dumbjs/persona](#dumbjspersona)
  - [API](#api)

## API

```ts
const getTheme: ({ storageKey }?: { storageKey?: string }) => string;

const getSystemTheme: () => "dark" | "light";

const removeTheme: ({
  element,
  clearStorage,
  storageKey,
}?: {
  element?: HTMLElement;
  clearStorage?: boolean;
  storageKey?: string;
}) => void;

const getThemeFromStorage: (storageKey?: string) => string;

const isThemerEnabled: ({ storageKey }?: { storageKey?: string }) => boolean;

const setTheme: (
  theme: string,
  {
    element,
    storageKey,
    store,
  }: {
    element?: HTMLElement;
    storageKey?: string;
    store?: boolean;
  }
) => void;

const onThemeChange: (handler: (systemTheme: string) => void) => void;
```

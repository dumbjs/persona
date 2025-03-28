const defaults = {
  storageKey: "themer",
};

const getMatcher = () => window.matchMedia("(prefers-color-scheme: dark)");

export const getTheme = ({
  element = null,
  storageKey = defaults.storageKey,
} = {}) => {
  if (element) {
    return getThemeFromElement(element);
  }
  return getThemeFromStorage(storageKey);
};

export const getThemeFromElement = (element) => {
  return element.getAttribute("data-theme");
};

export const getSystemTheme = () => {
  const isDark = getMatcher().matches;
  return isDark ? "dark" : "light";
};

export const removeTheme = ({
  element = document.body,
  clearStorage = true,
  storageKey = defaults.storageKey,
} = {}) => {
  if (element) {
    element.removeAttribute("data-theme");
  }
  if (clearStorage) {
    localStorage.removeItem(storageKey);
  }
};

export const getThemeFromStorage = (
  storageKey: string = defaults.storageKey
) => {
  return localStorage.getItem(storageKey);
};

export const isThemerEnabled = ({ storageKey = defaults.storageKey } = {}) => {
  return getTheme({ storageKey }) ? true : false;
};

export const setTheme = (
  theme: string,
  { element = document.body, storageKey = defaults.storageKey, store = true }
) => {
  if (store) {
    localStorage.setItem(storageKey, theme);
  }
  element.setAttribute("data-theme", theme);
};

export const onSystemThemeChange = (handler: (systemTheme: string) => void) => {
  getMatcher().addEventListener("change", (e) => handler(getSystemTheme()));
};

/**
 * @deprecated use `onSystemThemeChange` instead
 */
export const onThemeChange = onSystemThemeChange;

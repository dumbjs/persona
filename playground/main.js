import {
  setTheme,
  isThemerEnabled,
  onThemeChange,
  removeTheme,
  getTheme,
  getSystemTheme,
} from "@dumbjs/persona";

const themerSelect = document.getElementById("themer-options");

// Initial Load Theme
if (isThemerEnabled()) {
  themerSelect.value = getTheme() || getSystemTheme();
  setTheme(themerSelect.value);
} else {
  themerSelect.value = "default";
}

themerSelect.addEventListener("change", (e) => {
  if (e.target.value === "default") {
    removeTheme();
    return;
  }
  setTheme(e.target.value, { store: true });
});

onThemeChange((systemTheme) => {
  if (isThemerEnabled()) {
    return;
  }
  setTheme(systemTheme, false);
});

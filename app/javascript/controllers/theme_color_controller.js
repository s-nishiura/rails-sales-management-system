import { Controller } from "@hotwired/stimulus";
import { formatHex, oklch } from "culori";

// Connects to data-controller="theme-color"
export default class extends Controller {
  connect() {
    this.setThemeColor("theme-color", "--color-primary");
    this.setThemeColor("background-color", "--color-primary-content");
  }

  getThemeColor(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(
      variable,
    );
  }

  setThemeColor(name, variable) {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = formatHex(oklch(this.getThemeColor(variable)));
    document.head.appendChild(meta);
  }
}

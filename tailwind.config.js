const defaultTheme = require("tailwindcss/defaultTheme");

const buildList = (length, indicator, multi = 10) => {
  const json = Array(length)
    .fill(0)
    .reduce((prev, current, index) => {
      let str = prev;
      index++;

      if (index === 1) str = "{";
      str += `\"${index * multi}\": \"${index * multi}${indicator}\"`;

      if (index === length) return str + "}";
      else return str + ",";
    }, "");

  return JSON.parse(json);
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false,
  theme: {
    colors: {
      ...defaultTheme.colors,
      success: "#1abc9c",
      danger: "#e74c3c",
      warning: "#fcbf00",
    },
    minWidth: {
      ...buildList(40, "px", 50),
      full: "100%",
      screen: "100vw",
      unset: "unset",
    },
    maxWidth: {
      ...buildList(40, "px", 50),
      full: "100%",
      screen: "100vw",
      unset: "unset",
    },
    minHeight: {
      ...buildList(40, "px", 50),
      full: "100%",
      screen: "100vh",
      unset: "unset",
    },
    maxHeight: {
      ...buildList(40, "px", 50),
      full: "100%",
      screen: "100vh",
      unset: "unset",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

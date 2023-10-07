/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/header-img.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        golde: "#DBB081",
        backgcolor: "#F2F2F2",
      },
      spacing: {
        128: "32rem",
        130: "36rem",
        132: "800px",
        112: "26rem",
        155: "650px",
        180: "850px",
        1000: "1100px",
      },
      boxShadow: {
        "9xl": " rgba(17, 12, 46, 0.15) 0px 0px 20px -8px;",
      },
    },
  },
  plugins: [],
};

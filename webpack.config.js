const path = require("path");

module.exports = {
  mode: "development", // Cambiar a "development" si es necesario durante el desarrollo
  entry: {
    main: "./Src/Js/main.js",
    scripts: "./Src/Js/scripts.js",
  }, // Ruta del archivo principal de entrada en la carpeta src
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build/js"), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar la regla a los archivos JS
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: "babel-loader", // Usar Babel para transpilar el código
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "Src"),
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "Src"),
    compress: true,
    port: 9000,
  },
};

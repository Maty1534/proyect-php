const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", // Cambiar a "development" si es necesario durante el desarrollo
  entry: {
    main: "./Src/Js/main.js",
    scripts: "./Src/Js/scripts.js",
  }, // Ruta del archivo principal de entrada en la carpeta src
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "Src/dist"), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar la regla a los archivos JS
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: "babel-loader", // Usar Babel para transpilar el código
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        include: path.resolve(__dirname, "Src"),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./Src/Styles/styles.css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", // Cambiar a "development" si es necesario durante el desarrollo
  entry: {
    main: "./Src/Js/main.js",
    scripts: "./Src/Js/scripts.js",
  }, // Ruta del archivo principal de entrada en la carpeta src
  output: {
    filename: "[path]/[name].bundle.js",
    path: path.resolve(__dirname, "dist/js"), // Carpeta de salida
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        include: path.resolve(__dirname, "Src"),
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "Src"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[path]/[name].css", // Carpeta para archivos CSS compilados
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

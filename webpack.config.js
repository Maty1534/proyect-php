const path = require("path");
const { Script } = require("vm");

module.exports = {
  // Desarrollar en 'development' hasta que logre obtener un 'production' que es en producción.
  mode: "development",
  entry: {
    main: "./Src/Js/main.js",
    scripts: "./Src/Js/scripts.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "Src/build/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Se aplica a los archivos JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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

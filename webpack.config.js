/** @format */

const path = require("path");
const glob = require("glob");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const PATHS = {
  app: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
};

const commonConfig = merge([
  {
    entry: {
      // by default: It will look in ./src/index.js as the default entry point.
      // Moreover, it will spit out the bundle in ./dist/main.js.
      index: "./src/js/index.js",
    },
    output: {
      filename: path.join("js", "[name]-[hash].js"),
      path: path.resolve(__dirname, PATHS.dist),
      // publicPath: PATHS.dist
    },
    optimization: {
      /* when I add that, css is not added and page displays without styling
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors", // will create seperately: vendor bundle & runtime bundle
            chunks: "all"
          }
        }
      },
      runtimeChunk: "single" //  create a single runtime bundle for all chunks: 
      */
    },
  },
  parts.stylelint(),
  parts.eslint({ include: PATHS.app }),
  parts.loadHtml({ include: PATHS.app }),
]);

const productionConfig = merge([
  { devtool: "source-map" }, // useful for debugging as well as running benchmark tests. one with a fairly quick build speed
  parts.clean(PATHS.dist),
  parts.keepVendorHashConsistent(),
  parts.babel({ include: PATHS.app }),
  // prod only:
  parts.extractCSS({
    use: ["css-loader", parts.nextGenerationCss(), "sass-loader"], // if it works: pageOne.css should have only one keyframes
  }),
  // In case you want to compress your images, use image-webpack-loader, svgo-loader (SVG specific), or imagemin-webpack-plugin. */
  parts.loadImages({
    options: {
      limit: 5000,
      name: path.join("img", "[name].[ext]"),
    },
  }),
  parts.copyRootFiles({
    context: PATHS.app,
    from: "**/*",
    to: PATHS.dist,
    ignore: [
      "css/*",
      "js/*",
      "img/*",
      "**/*index.html",
      "private/*",
      "scripts/*",
      "notes.txt",
    ],
  }),
  /*  parts.copyVendorJs({
    context: PATHS.app,
    from: "/home/ustrd/Documents/javascript-projects/modernizr-3.7.1.min.js",
    to: "js/vendor",
  }), */
]);

/* The loadImages() configuration defaults to url-loader during development and uses both url-loader and file-loader in production 
  to maintain smaller bundle sizes. 
  url-loader uses file-loader implicitly when limit is set, 
  file-loader outputs image files and returns paths to them instead of inlining.
  Below the limit, it should inline the image while above it should emit a separate asset and a path to it. 
  The CSS lookup works because of css-loader. You can also try importing the image from JavaScript code and see what happens. 
  Be careful not to apply both loaders on images at the same time! */

const developmentConfig = merge([
  {
    devtool: "cheap-module-eval-source-map", // devtool: "eval-source-map", is the highest quality option of the inline options. It's also the slowest one as it emits the most data:
  },
  parts.devServer({
    contentBase: PATHS.app,
  }),
  parts.loadCSS({ include: PATHS.app }), // development only
  parts.loadImages(),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

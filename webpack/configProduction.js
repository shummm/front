"use strict";

const path = require ("path");
const extractTextWebpackPlugin = require ("extract-text-webpack-plugin");
const friendlyErrorsWebpackPlugin = require ("friendly-errors-webpack-plugin");
const htmlWebpackPlugin = require ("html-webpack-plugin");
const notifierWebpackPlugin = require ("webpack-notifier");
const uglifyJsWebpackPlugin = require ("uglifyjs-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require ("webpack");



module. exports = () => {

  return {

    "mode": "production",


    "entry": {
      "build": path. resolve ("src", "index.js"),
    },


    "output": {
      "pathinfo": true,
      "filename": "[name].js",
      "path": path. resolve ("build", "production"),
      "publicPath": "/",
      "sourceMapFilename": "[name].source.map",
//      "library": "[name]",
    },


    "resolve": {

      "extensions": [".js", ".json", ".vue", ".pug"],

      "alias": {
        "vue$": "vue/dist/vue.runtime.min.js",
        "vue-router$": "vue-router/dist/vue-router.min.js",
        "vue-resource$": "vue-resource/dist/vue-resource.min.js",
        "vuex$": "vuex/dist/vuex.min.js",
      },
    },


    "optimization": {
      "runtimeChunk": true,
      "splitChunks": {
        "chunks": "all",
      },
      "minimizer": [
        new uglifyJsWebpackPlugin ({
          "sourceMap": true,
          "uglifyOptions": {
            "compress": {
              "inline": false,
              "warnings": false,
              "drop_console": true,
              "unsafe": true,
            },
          },
        }),
      ],
    },


    "module": {

      "rules": [

        {
          "enforce": "pre",
          "test": /\.vue$/,
          "loader": "eslint-loader",
          "exclude": /node_modules/,
          "options": {
            "fix": true,
          },
        },

        {
          "enforce": "pre",
          "test": /\.js$/,
          "loader": "eslint-loader",
          "exclude": /node_modules/,
          "options": {
            "fix": true,
          },
        },

        {
          "test": /\.vue$/,
          "loader": "vue-loader",
          "exclude": /node_modules/,
          "options": {
            "css": extractTextWebpackPlugin. extract ({
              "use": "css-loader",
              "fallback": "vue-style-loader",
            }),
            "postcss": {
              "plugins": {
                "cssnano": {},
              },
            },
            "loaders": {
              "pug": "pug-plain-loader",
            },
          },
        },

        {
          "test": /\.js$/,
          "loader": "babel-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.pug$/,
          "loader": "pug-plain-loader",
          "exclude": /node_modules/,
        },

        {
          "test": /\.css$/,
          "use": [
            "vue-style-loader",
            {
              "loader": "css-loader",
              "options": { "importLoaders": 1, },
            },
            "postcss-loader",
          ],
          "exclude": /node_modules/,
        },


        {
          "test": /\.(png|jpg|gif)$/,
          "loader": "file-loader",
        },
      ],
    },


    "plugins": [
      new vueLoaderPlugin (),

      new friendlyErrorsWebpackPlugin (),

      new extractTextWebpackPlugin ("style.css"),

      new notifierWebpackPlugin ({
        "title": "production",
        "alwaysNotify": true,
      }),

      new htmlWebpackPlugin ({
        "filename": "index.htm",
        "template": path. resolve ("src", "index.htm"),
        "inject": true,
        "hash": true,
        "minify": true,
        "xhtml": true,
      }),
    ],
  };
};

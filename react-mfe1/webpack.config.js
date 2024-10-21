const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "./src/index.tsx"),
    mode: "development",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "index.js"
        // publicPath: "auto"
    },
    devServer: {
        port: 3002,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",

        }),
        new ModuleFederationPlugin({
            name: "HostMfe",
            filename: "static/chunks/remoteEntry.js",

            exposes: {
                "./Navbar":"./src/components/Navbar.tsx",
                "./Dashboard": "./src/components/Dashboard.tsx",
                "./ProductList":"./src/components/ProductList.tsx"
            },
            shared: {
                react: {
                    // eager:true,
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    // eager:true,
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
    ],
};
module.exports = {
  devServer: {
    proxy: {
      "/store": {
        target: "http://localhost:8081",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};

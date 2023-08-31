const path = require("path");
const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, "public"),
  db: {
    url: "mongodb://localhost/Vue-test",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  facebook: {
    appId: "201873988436075",
    appSecret: "8c783e50b665359341d641fa12631f7c",
  },
};

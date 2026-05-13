const path = require("path");
const swaggerUi = require("swagger-ui-express");

const swaggerFilePath = path.resolve(__dirname, "../../swagger-output.json");

function loadSwaggerDocument() {
  try {
    delete require.cache[require.resolve(swaggerFilePath)];
    return require(swaggerFilePath);
  } catch (error) {
    return {
      openapi: "3.0.0",
      info: {
        title: "Node Auth API",
        version: "1.0.0",
      },
      paths: {},
    };
  }
}

function setupSwagger(app) {
  const swaggerDocument = loadSwaggerDocument();
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger;

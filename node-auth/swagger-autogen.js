const path = require("path");
const dotenv = require("dotenv");
const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.js"];

const doc = {
  info: {
    title: "Node Auth API",
    description: "Auto-generated API documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 5000}`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

async function generateSwagger() {
  const result = await swaggerAutogen(outputFile, endpointsFiles, doc);
  return result.success;
}

if (require.main === module) {
  generateSwagger().then((success) => {
    if (!success) {
      process.exit(1);
    }
  });
}

module.exports = generateSwagger;

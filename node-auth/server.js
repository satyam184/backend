const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./src/config/db");
const generateSwagger = require("./swagger-autogen");

async function startServer() {
  const swaggerGenerated = await generateSwagger();
  if (!swaggerGenerated) {
    console.warn("Swagger docs could not be generated.");
  }

  const app = require("./src/app");
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();

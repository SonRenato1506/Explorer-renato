require("express-async-errors");
require("dotenv/config")
const AppError = require("./utils/AppError")
const uploadConfig = require("./config/upload")

const cors = require("cors")
const migrationRun = require("./database/sqlite/migrations")
const express = require("express");

const routes = require("./routes/index.js")

migrationRun();


const app = express();

app.use(express.json());
app.use(cors())
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error);
  

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
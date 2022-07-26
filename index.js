const express = require("express");
const path = require("path");
const cors = require("cors");
const Sequelize = require("sequelize");

const routes = require("./routes");
const User = require("./models/User");
const Course = require("./models/Course");
const CourseModule = require("./models/CourseModule");
const Content = require("./models/Content");

const app = express();
const PORT = process.env.PORT || 5000;

let sequelize;

// Connections
if (process.env.CLEARDB_DATABASE_URL) {
  sequelize = new Sequelize(`${process.env.CLEARDB_DATABASE_URL}`);

  // declare react files in build as static
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  // serve index.html from the build folder
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  sequelize = new Sequelize("sqlnode", "root", "Mmtec@36257", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
}

app.use(cors());
app.use(express.json());
app.use(routes);

// Initialize sequelize models
User.init(sequelize);
Course.init(sequelize);
CourseModule.init(sequelize);
Content.init(sequelize);

// Initialize sequelize associations
User.associate(sequelize.models);
Course.associate(sequelize.models);
CourseModule.associate(sequelize.models);
Content.associate(sequelize.models);

// Authenticate connections
try {
  sequelize.authenticate();
  console.log("Connection with Sequelize has been established successfully.");
  app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server running ...`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;

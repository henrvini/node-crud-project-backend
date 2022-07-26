const express = require("express");

const UserController = require("./controllers/UserController");
const CourseController = require("./controllers/CourseController");
const CourseModuleController = require("./controllers/CourseModuleController");
const ContentController = require("./controllers/ContentController");

const routes = express.Router();

// USERS ROUTES
routes.get("/users", UserController.index);
routes.get("/users/:user_id", UserController.detail);

routes.post("/users/register", UserController.store);

routes.put("/users", UserController.update);

routes.delete("/users/:user_id", UserController.delete);

// COURSES ROUTES
routes.get("/courses", CourseController.index);
routes.get("/courses/:course_id", CourseController.detail);

routes.post("/courses/register", CourseController.store);

routes.put("/courses", CourseController.update);

routes.delete("/courses/:course_id", CourseController.delete);

// MODULES ROUTES
routes.get("/courseModules/:course_id", CourseModuleController.index);
routes.get("/courseModules/details/:module_id", CourseModuleController.detail);
routes.get("/allCourseModules", CourseModuleController.indexAll);

routes.post("/courseModules/register", CourseModuleController.store);

routes.put("/courseModules", CourseModuleController.update);

routes.delete("/courseModules/:module_id", CourseModuleController.delete);

// CONTENTS ROUTES
routes.get("/contents/:module_id", ContentController.index);
routes.get("/contents/details/:content_id", ContentController.detail);
routes.get("/allContents", ContentController.indexAll);

routes.post("/contents/register", ContentController.store);

routes.put("/contents", ContentController.update);
routes.put("/contents/status", ContentController.updateStatus);

routes.delete("/contents/:content_id", ContentController.delete);

module.exports = routes;

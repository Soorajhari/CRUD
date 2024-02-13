const express = require("express");
const Router = express.Router();
const Employeecontrollers = require("../controllers/Employeecontrollers");

Router.post("/add-User", Employeecontrollers.userDetails);
Router.get("/get-users", Employeecontrollers.getUserDetails);
Router.get("/editUser/:id", Employeecontrollers.getEditUser);
Router.put("/update/:id", Employeecontrollers.updateUsers);
Router.delete("/delete-user/:id", Employeecontrollers.deleteUsers);
Router.get("/get-data/:userValue", Employeecontrollers.SearchUser);


module.exports = Router;

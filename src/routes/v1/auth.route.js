const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");
const validateAuthRegister = validate(authValidation.register);
const validateAuthLogin = validate(authValidation.login);

const router = express.Router();

// TODO: CRIO_TASK_MODULE_AUTH - Implement "/v1/auth/register" and "/v1/auth/login" routes with request validation
router.post("/register", validateAuthRegister, authController.register);
router.post("/login", validateAuthLogin, authController.login);

module.exports = router;

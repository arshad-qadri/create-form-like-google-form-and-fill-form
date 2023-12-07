const {
  createForm,
  getformById,
  storeFormValue,
} = require("../controllers/form.controller");

const router = require("express").Router();

router.post("/create-form", createForm);
router.post("/save-form-value", storeFormValue);
router.post("/form/:url", getformById);

module.exports = router;

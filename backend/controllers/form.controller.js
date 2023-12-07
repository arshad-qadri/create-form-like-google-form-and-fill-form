const { FormModel, FormValueModel } = require("../models");
const Form = FormModel;

const createForm = async (req, res) => {
  const { url, form } = req.body;
  const newForm = await Form.create({ url, form });
  await newForm.save();
  res.send({ success: true, message: "Form created successfully!" });
};

const getformById = async (req, res) => {
  const form = await Form.find({ url: req.params.url });
  if (form && !form.length > 0) {
    return res.status(404).send({ success: false, message: "Form not found" });
  }
  res.send(...form);
};
const storeFormValue = async (req, res) => {
  const { formId, url, formData } = req.body;

  const newFormValue = await FormValueModel.create({ formId, url, formData });
  await newFormValue.save();
  res
    .status(200)
    .send({ success: true, message: "Form submitted successfully" });
};

module.exports = { createForm, getformById, storeFormValue };

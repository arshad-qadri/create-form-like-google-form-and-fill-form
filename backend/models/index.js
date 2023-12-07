const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    form: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("Forms", formSchema);

const FormValueSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  formData: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const FormValueModel = mongoose.model("Form_Data", FormValueSchema);

module.exports = { FormModel, FormValueModel };

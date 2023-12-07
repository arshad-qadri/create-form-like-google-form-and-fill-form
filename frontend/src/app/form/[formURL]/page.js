"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../../variable";

const SaveFormValue = ({ params }) => {
  const [form, setForm] = useState([]);
  const [formData, setFormData] = useState([]);
  // console.log(params);
  useEffect(() => {
    axios
      .post(`${baseURL}/form/${params?.formURL}`)
      .then((res) => {
        // console.log(res.data);
        setForm(res.data);
        let temp = [];
        res.data?.form.map((item) =>
          temp.push({
            fieldName: item.fieldName,
            [item.fieldName]: "",
            label: item.value,
          })
        );
        setFormData(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log("form===", formData);
  }, [formData]);
  const handleInputChange = (e, index) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const formF = [...formData];
    formF[index][name] = value;
    setFormData(formF);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
   await axios.post(`${baseURL}/save-form-value`, {
      formId: form?._id,
      url: params.formURL,
      formData,
    }).then((response)=>{
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
  };
  return (
    <div className="w-1/2 mx-auto  bg-slate-100 h-screen p-5">
      <h1 className="font-bold text-2xl underline text-center">Fill Form</h1>

      {formData?.length > 0 && (
        <div className="mt-10">
          {formData.map((item, index) => (
            <div key={index} className="mt-5">
              <label className="capitalize">{item?.label}</label> <br />
              <input
                type="text"
                className="border focus:outline-none px-2 py-2 rounded-md placeholder:capitalize w-full"
                placeholder={item?.label}
                value={item.value}
                name={item?.fieldName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
          <br />
          <button
            onClick={handleSubmitForm}
            className="bg-black text-white px-3 py-2 mt-3"
          >
            Submit
          </button>
        </div>
      )}

      {/* {form.map((item, index) => (
        <div className="flex gap-x-3 mt-4" key={index}>
          <div>
            <label>Enter field name</label> <br />
            <input
              type="text"
              className="border focus:outline-none px-2 py-2 rounded-md"
              placeholder="Enter field name"
              value={item.value}
              name={"value"}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <label>Is Required</label> <br />
            <select
              className="border focus:outline-none px-2 py-2 rounded-md"
              defaultValue={item.isRequired}
              onChange={(e) => handleChangeSelector(e, index)}
            >
              <option>select</option>
              <option value={"true"}>True</option>
              <option value={"false"}>False</option>
            </select>
          </div>
        </div>
      ))} */}
      {/* <button
        onClick={handleSaveForm}
        className="bg-black text-white px-3 py-2 mt-3"
      >
        Save
      </button> */}
    </div>
  );
};

export default SaveFormValue;

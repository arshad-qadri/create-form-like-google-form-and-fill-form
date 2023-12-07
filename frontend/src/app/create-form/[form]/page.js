"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../../variable";

const FormCreate = ({ params }) => {
  // console.log("params===", params);
  const [form, setForm] = useState([
    { field: 1, fieldName: "", value: "", isRequired: "" },
  ]);
  const addField = () => {
    setForm([
      ...form,
      {
        field: form.length + 1,
        fieldName: "",
        value: "",
        isRequired: "",
      },
    ]);
  };

  const handleInputChange = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    const formF = [...form];
    formF[index][name] = value;
    formF[index].fieldName = value?.trim()?.replaceAll(" ", "_");
    setForm(formF);
  };
  const handleChangeSelector = (event, index) => {
    const value = event.target.value;
    console.log(value);
    const formF = [...form];
    formF[index].isRequired = value === "true" ? true : false;
    setForm(formF);
  };
  // useEffect(() => {
  //   console.log("form===", form);
  // }, [form]);
  const handleSaveForm =async ()=>{
  await  axios.post(`${baseURL}/create-form`,{url:params.form, form}).then((response)=>{
      // console.log("response===",response);
      alert(response.data?.message);

    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="w-9/12 mx-auto mt-5">
      <div className="flex justify-end">
        <button
          onClick={addField}
          className="bg-black text-3xl text-white px-3 py-1"
        >
          +
        </button>
      </div>

      {form.map((item, index) => (
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
      ))}
      <button onClick={handleSaveForm} className="bg-black text-white px-3 py-2 mt-3">Save</button>
    </div>
  );
};

export default FormCreate;

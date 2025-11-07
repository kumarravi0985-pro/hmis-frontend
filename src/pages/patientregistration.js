import React, { useState } from "react";
import "./PatientRegistration.css";

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    title: "",
    patientName: "",
    sex: "",
    dob: "",
    age: "",
    months: "",
    days: "",
    married: "",
    relatedPerson: "",
    relationship: "",
    patientType: "",
    contactNo: "",
    permanentAddress: "",
    state: "",
    district: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = "Please select a title";
    if (!formData.patientName.trim())
      newErrors.patientName = "Name is required";
    if (!formData.contactNo.trim())
      newErrors.contactNo = "Mobile No. is required";
    else if (!/^[6-9]\d{9}$/.test(formData.contactNo))
      newErrors.contactNo = "Enter a valid 10-digit mobile no.";
    if (!formData.permanentAddress.trim())
      newErrors.permanentAddress = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Patient Registered Successfully!");
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="registration-container">
      <h2>Patient Registration</h2>

      <form className="registration-form" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="form-row">
          <label>
            Title <span className="required">*</span>
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? "error-input" : ""}
          >
            <option value="">Select</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Master">Master</option>
            <option value="Baby">Baby</option>
          </select>
          {errors.title && <div className="error-text">{errors.title}</div>}
        </div>

        {/* Patient Name */}
        <div className="form-row">
          <label>
            Patient Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={errors.patientName ? "error-input" : ""}
          />
          {errors.patientName && (
            <div className="error-text">{errors.patientName}</div>
          )}
        </div>

        {/* Sex */}
        <div className="form-row">
          <label>Sex</label>
          <select name="sex" value={formData.sex} onChange={handleChange}>
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="T">Transgender</option>
          </select>
        </div>

        {/* DOB */}
        <div className="form-row">
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Months</label>
          <input
            type="number"
            name="months"
            value={formData.months}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
          />
        </div>

        {/* Married */}
        <div className="form-row">
          <label>Married</label>
          <select
            name="married"
            value={formData.married}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </div>

        {/* Related Person */}
        <div className="form-row">
          <label>Related Person</label>
          <input
            type="text"
            name="relatedPerson"
            value={formData.relatedPerson}
            onChange={handleChange}
          />
        </div>

        {/* Relationship */}
        <div className="form-row">
          <label>Relationship</label>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Spouse">Spouse</option>
            <option value="Guardian">Guardian</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
          </select>
        </div>

        {/* Patient Type */}
        <div className="form-row">
          <label>Patient Type</label>
          <select
            name="patientType"
            value={formData.patientType}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="Private">Private</option>
            <option value="PMJAY">PMJAY</option>
          </select>
        </div>

        {/* Contact No */}
        <div className="form-row">
          <label>
            Contact No <span className="required">*</span>
          </label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            maxLength="10"
            className={errors.contactNo ? "error-input" : ""}
          />
          {errors.contactNo && (
            <div className="error-text">{errors.contactNo}</div>
          )}
        </div>

        {/* Address */}
        <div className="form-row">
          <label>
            Address <span className="required">*</span>
          </label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            className={errors.permanentAddress ? "error-input" : ""}
          />
          {errors.permanentAddress && (
            <div className="error-text">{errors.permanentAddress}</div>
          )}
        </div>

        {/* State */}
        <div className="form-row">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Bihar">Bihar</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Manipur">Manipur</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>

        {/* District */}
        <div className="form-row">
          <label>District</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Patna">Patna</option>
            <option value="Gaya">Gaya</option>
            <option value="Nalanda">Nalanda</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* PIN */}
        <div className="form-row">
          <label>PIN</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Save
          </button>
          <button
            type="reset"
            className="btn-reset"
            onClick={() =>
              setFormData({
                title: "",
                patientName: "",
                sex: "",
                dob: "",
                age: "",
                months: "",
                days: "",
                married: "",
                relatedPerson: "",
                relationship: "",
                patientType: "",
                contactNo: "",
                permanentAddress: "",
                state: "",
                district: "",
                pin: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistration;

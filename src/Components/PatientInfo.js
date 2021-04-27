import React from "react";
import "./PatientInfo.css";

function PatientInfo() {
  return (
    <div className="patient-info">
      <p>Priya Mehata 32Y 4AM</p>
      <p>ID:P0987</p>
      <p>
        With <span>G3</span>
        <span>PO</span>
        <span>L1</span>
        <span>A1</span>
      </p>
      <p>8 week pregnant</p>
      <p>LMP:20/01/2020</p>
      <p>EDD:29/10/2020</p>
    </div>
  );
}

export default PatientInfo;

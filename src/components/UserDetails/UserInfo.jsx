import React from "react";

const PersonalInfo = () => {
  return (
    <section className="user_detail_information_personalInfo">
      <h4 className="title">Personal Information</h4>
      <div className="grid">
        <div>
          <p>full Name</p>
          <h4>Grace Effiom</h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>07060780922</h4>
        </div>
        <div>
          <p>Email Address</p>
          <h4>grace@gmail.com</h4>
        </div>
        <div>
          <p>Bvn</p>
          <h4>07060780922</h4>
        </div>
        <div>
          <p>Gender</p>
          <h4>Female</h4>
        </div>
        <div>
          <p>Marital status</p>
          <h4>Single</h4>
        </div>
        <div>
          <p>Children</p>
          <h4>None</h4>
        </div>
        <div>
          <p>Type of residence</p>
          <h4>Parent’s Apartment</h4>
        </div>
      </div>
    </section>
  );
};

function UserInfo() {
  return (
    <div className="user_detail_information">
      <PersonalInfo />
      <PersonalInfo />
      <PersonalInfo />
      <PersonalInfo />
      <PersonalInfo />
    </div>
  );
}

export default UserInfo;

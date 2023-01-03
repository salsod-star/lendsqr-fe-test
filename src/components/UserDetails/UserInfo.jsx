import React from "react";

const PersonalInfo = ({ user }) => {
  let email = user.email.length > 15 ? user.email : "";
  const index = email.indexOf("@");
  email = `${email.slice(0, index)} ${email.slice(index)}`;

  return (
    <section className="user_detail_information_personalInfo">
      <h4 className="title">Personal Information</h4>
      <div className="grid">
        <div>
          <p>full Name</p>
          <h4>
            {user.profile.firstName} {user.profile.lastName}
          </h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>{user.profile.phoneNumber}</h4>
        </div>
        <div>
          <p>Email Address</p>
          <h4>{email || user.email}</h4>
        </div>
        <div>
          <p>Bvn</p>
          <h4>{user.profile.bvn}</h4>
        </div>
        <div>
          <p>Gender</p>
          <h4>{user.profile.gender}</h4>
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
          <h4>{user.profile.address}</h4>
        </div>
      </div>
    </section>
  );
};

const EducationInfo = ({ user: { education } }) => {
  // let email = user.email.length > 15 ? user.email : "";
  // const index = email.indexOf("@");
  // email = `${email.slice(0, index)} ${email.slice(index)}`;

  return (
    <section className="user_detail_information_personalInfo">
      <h4 className="title">Education and Employment</h4>
      <div className="grid">
        <div>
          <p>level of education</p>
          <h4>{education.level}</h4>
        </div>
        <div>
          <p>employment status</p>
          <h4>{education.employmentStatus}</h4>
        </div>
        <div>
          <p>sector of employment</p>
          <h4>{education.sector}</h4>
        </div>
        <div>
          <p>Duration of employment</p>
          <h4>{education.duration}</h4>
        </div>
        <div>
          <p>office email</p>
          <h4>{education.officeEmail}</h4>
        </div>
        <div>
          <p>Monthly income</p>
          <h4>
            ₦{education.monthlyIncome[0]} - ₦{education.monthlyIncome[0]}
          </h4>
        </div>
        <div>
          <p>loan repayment</p>
          <h4>{education.loanRepayment}</h4>
        </div>
      </div>
    </section>
  );
};

const SocialInfo = ({ user: { socials } }) => {
  return (
    <section className="user_detail_information_personalInfo">
      <h4 className="title">Socials</h4>
      <div className="grid">
        <div>
          <p>Twitter</p>
          <h4>{socials.twitter}</h4>
        </div>
        <div>
          <p>Facebook</p>
          <h4>{socials.facebook}</h4>
        </div>
        <div>
          <p>Instagram</p>
          <h4>{socials.instagram}</h4>
        </div>
      </div>
    </section>
  );
};

const GuarantorInfo = ({ user: { guarantor } }) => {
  return (
    <section className="user_detail_information_personalInfo">
      <h4 className="title">Personal Information</h4>
      <div className="grid">
        <div>
          <p>full Name</p>
          <h4>
            {guarantor.firstName} {guarantor.lastName}
          </h4>
        </div>
        <div>
          <p>Phone Number</p>
          <h4>{guarantor.phoneNumber}</h4>
        </div>
        <div>
          <p>Address</p>
          <h4>{guarantor.address}</h4>
        </div>
        <div>
          <p>Gender</p>
          <h4>{guarantor.gender}</h4>
        </div>
      </div>
    </section>
  );
};

function UserInfo({ user }) {
  return (
    <div className="user_detail_information">
      <PersonalInfo user={user} />
      <EducationInfo user={user} />
      <SocialInfo user={user} />
      <GuarantorInfo user={user} />
    </div>
  );
}

export default UserInfo;

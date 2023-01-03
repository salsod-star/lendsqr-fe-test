import Button from "../CustomElements/CustomButton";
import FormInput from "../CustomElements/FormInput";
import arrDown from "../asset/drop-down.svg";
import calenderIcon from "../asset/calendar.svg";

const Filter = () => {
  const arrowStyle = {
    backgroundImage: `url(${arrDown})`,
    backgroundSize: "13px",
    backgroundPosition: "90% 50%",
    backgroundRepeat: "no-repeat",
  };

  const dateStyle = {
    backgroundImage: `url(${calenderIcon})`,
    // width: "6.57px",
    // height: "11.21px",
    backgroundSize: "15px",
    backgroundPosition: "90% 50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="filter">
      <form className="filter_form">
        <div className="field">
          <label>Organization</label>
          <select name="organization" style={arrowStyle}>
            <option value="">Select</option>
          </select>
        </div>
        <div className="field">
          <FormInput
            type="text"
            name="username"
            label="Username"
            isLabel={true}
            placeholder="User"
          />
        </div>
        <div className="field">
          <FormInput
            type="email"
            name="email"
            label="Email"
            isLabel={true}
            placeholder="Email"
          />
        </div>
        <div className="field">
          <FormInput
            type="datetime"
            name="date"
            label="Date"
            isLabel={true}
            placeholder="Date"
            style={dateStyle}
          />
        </div>
        <div className="field">
          <FormInput
            type="tel"
            name="telephone"
            label="Phone Number"
            isLabel={true}
            placeholder="Phone Number"
          />
        </div>

        <div className="field">
          <label>Status</label>
          <select name="status" style={arrowStyle}>
            <option value="">Select</option>
          </select>
        </div>

        <div className="field_action_btn">
          <Button type="button" className="btn">
            Reset
          </Button>
          <Button type="button" className="btn">
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;

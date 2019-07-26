import React from "react";
// import EachLangTable from "./EachLangTable";
// // import Image from "../../UI/Image";
import Text from "../../components/UI/Text";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import DatePicker from "../../components/UI/DatePicker";
import DropDown from "../../components/UI/DropDown";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  handleChange,
  addBike,
  handleFileChange
} from "../../store/cms/action";

class CMS extends React.Component {
  render() {
    const { file } = this.props;
    return (
      <div className="App">
        <Input
          type="text"
          id="name"
          label="name"
          action={this.props.handleChange}
        />
        <input
          type="file"
          id="pic"
          onChange={e => this.props.handleFileChange(e.target.files)}
          multiple
        />
        <Input
          type="number"
          id="engine"
          label="engine"
          action={this.props.handleChange}
        />
        {/** calendar selcet will be here */}
        <DatePicker
          label="releaseDate"
          id="releaseDate"
          action={this.props.handleChange}
        />
        <Input
          type="number"
          id="power"
          label="power"
          action={this.props.handleChange}
        />
        <Input
          type="number"
          id="torque"
          label="torque"
          action={this.props.handleChange}
        />
        <Input
          type="number"
          id="maxSpeed"
          label="maxSpeed"
          action={this.props.handleChange}
        />
        <Input
          type="number"
          id="zeroToSixty"
          label="zeroToSixty"
          action={this.props.handleChange}
        />
        <Input
          type="number"
          id="millage"
          label="millage"
          action={this.props.handleChange}
        />
        <Input
          type="text"
          id="frontSuspension"
          label="frontSuspension"
          action={this.props.handleChange}
        />
        <Input
          type="text"
          id="rearSuspension"
          label="rearSuspension"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          name="brakes"
          label="brakes"
          values={["dual drum", "dual disc", "rear disc ", "front disc"]}
          action={this.props.handleChange}
        />
        {/** tyre types  will be a  drop down here*/}
        <Input
          type="radio"
          values={["tubeless", "tube", "rear tubeless", "front tubeless"]}
          name="tyreType"
          label="typeType"
          action={this.props.handleChange}
        />
        {/**abs will a boolean radio */}
        <Input
          type="radio"
          values={["true", "false"]}
          name="abs"
          label="abs"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="passSwitch"
          label="passSwitch"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["digital", "manual", "hybrid"]}
          name="console"
          label="console"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="antiTheft"
          label="antiTheft"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="stepUpSeat"
          label="stepUpSeat"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="lowFuelIndicator"
          label="lowFuelIndicator"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="maintenanceIndicator"
          label="maintenanceIndicator"
          action={this.props.handleChange}
        />
        <Input
          type="radio"
          values={["true", "false"]}
          name="lowBatteryIndicator"
          label="lowBatteryIndicator"
          action={this.props.handleChange}
        />
        <Input
          type="button"
          value="add"
          file={file}
          action={this.props.addBike}
        />
      </div>
    );
  }

  componentWillMount() {}
}
const mapStateToProps = state => {
  return {
    file: state.cms.file
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChange: paylaod => dispatch(handleChange(paylaod)),
    addBike: file => dispatch(addBike(file)),
    handleFileChange: file => dispatch(handleFileChange(file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CMS);

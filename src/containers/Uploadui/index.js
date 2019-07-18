import React from "react";
// import EachLangTable from "./EachLangTable";
// // import Image from "../../UI/Image";
import Text from "../../components/UI/Text";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
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
          onChange={e => this.props.handleFileChange(e.target.files[0])}
        />
        <Input
          type="number"
          id="engine"
          label="engine"
          action={this.props.handleChange}
        />
        {/** calendar selcet will be here */}
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

        {/** brakes will be a  drop down here*/}
        {/** tyre types  will be a  drop down here*/}
        {/**abs will a boolean radio */}
        <Input
          type="number"
          id="millage"
          label="millage"
          action={this.props.handleChange}
        />

        {/**passSwitch will be radio */}
        {/*** console will be a drop down */}
        {/**antiTheft will be a radio */}
        {/**stepUpSeat will be radio */}
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
        {/** lowFuelIndicator will be a radio */}
        {/** maintenanceIndicator will be a radio */}
        {/** lowBatteryIndicator will be a radio */}
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

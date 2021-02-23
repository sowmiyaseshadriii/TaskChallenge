import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser
  };
};

class EditUser extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }
  render() {
    console.log(this.props)
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.errorResponseDataUser) {
        swal("Failed!", this.props.errorResponseDataUser, "error");
      } else {
        swal(
          "User Updated!",
            this.props.getResponseDataUser.fname +
            " " +
            this.props.getResponseDataUser.lname,
          "success"
        );
      }
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h5 className="text-center">Edit Employee Details</h5>
          <FormComponent 
            onSubmit={(data) => {
              this.handleSubmit(data);
            }} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(EditUser);

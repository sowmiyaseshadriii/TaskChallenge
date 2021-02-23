import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};
class CreateUser extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    const { getResponseDataUser, errorResponseDataUser } =this.props;
    if(getResponseDataUser || errorResponseDataUser){
      if(getResponseDataUser){
        swal("New User Created!", this.props.getResponseDataUser.fname+" "+this.props.getResponseDataUser.lname , "success");
      }else{
        swal("Failed!", this.props.errorResponseDataUser , "error");
      }
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h5 className="text-center">Create New Employee</h5>
          <FormComponent
            onSubmit={(data) => {
              this.handleSubmit(data);
            }}
          />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUser);

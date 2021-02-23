import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
    return {
      getUserDetail: state.users.getUserDetail,
      errorUserDetail: state.users.errorUserDetail,
    };
  };


const DetailComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">First Name</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.fname}</td>
        </tr>
        <tr>
          <td width="200">Last Name</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.lname}</td>
        </tr>
        <tr>
          <td width="200">Age</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.age}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.email}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailComponent);
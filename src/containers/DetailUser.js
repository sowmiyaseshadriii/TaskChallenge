import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import DetailComponent from "../components/DetailComponent";

class DetailUser extends Component {

  componentDidMount(){
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <Container>
          <BackComponent />
          <h5 className="text-center">Employee Details</h5>
          <DetailComponent/>
        </Container>
      </div>
    );
  }
}

export default connect()(DetailUser);
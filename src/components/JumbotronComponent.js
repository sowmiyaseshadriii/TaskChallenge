import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    title: state.users.title,
    //errorUsersList: state.users.errorUsersList,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <h4 className="text-center">ABC Management System</h4>        
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
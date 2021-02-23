import React, { Component } from 'react'
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../actions/userAction";
import { Container } from 'reactstrap';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList());
        this.props.dispatch(deleteDataUser());
    }

    render() {
        return (
            <Container>
               <TableComponent />
            </Container>
        )
    }
}

export default connect()(Home);
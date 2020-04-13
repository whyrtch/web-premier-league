import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ListCard from "../component/ListCard";

class Team extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log("props")
        console.log(this.props)
        return(
            <Fragment>
                {
                    this.props.loading ?
                        "loading"
                        :
                        <ListCard data={this.props.squad} loading={this.props.loading}/>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    loading : state.selectedTeam.loading,
    squad : state.selectedTeam.data.squad,
    data : state.selectedTeam.data
});


export default connect(mapStateToProps)(Team);
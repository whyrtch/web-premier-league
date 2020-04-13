import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import ListCard from "../component/ListCard";
import Loading from "../atom/Loading";

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
                       <Loading/>
                        :
                        <div>
                            <div className="h3 mt-4 w-100 flex-center">
                                Squad List
                            </div>
                            <ListCard data={this.props.squad} loading={this.props.loading}/>
                        </div>
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
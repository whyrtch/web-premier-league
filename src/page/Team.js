import React, { Fragment} from "react";
import {connect} from "react-redux";
import ListCard from "../component/ListCard";
import Loading from "../atom/Loading";

const Team = (props) => {

    return(
        <Fragment>
            {
                props.loading ?
                    <Loading/>
                    :
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="h3 mt-4 w-100 flex-center">
                                {props.data.shortName}
                            </div>
                            <div className="my-5">
                                <img className="custome-height-16 w-100" src={props.data.crestUrl} alt={props.data.name}/>
                            </div>
                            <ul className="list-group mt-3">
                                <li className="list-group-item"><strong>Name</strong>: {props.data.name}</li>
                                <li className="list-group-item"><strong>Address</strong>: {props.data.address}</li>
                                <li className="list-group-item"><strong>Phone</strong>: {props.data.phone}</li>
                                <li className="list-group-item"><strong>Website</strong>: {props.data.website}</li>
                                <li className="list-group-item"><strong>Email</strong>: {props.data.email}</li>
                                <li className="list-group-item"><strong>Email</strong>: {props.data.email}</li>
                                <li className="list-group-item"><strong>Club Colors</strong>: {props.data.clubColors}</li>
                                <li className="list-group-item"><strong>Venue</strong>: {props.data.venue}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="h3 mt-4 w-100 flex-center">
                                Squad List
                            </div>
                            <ListCard data={props.squad} class={"custome-height-5"} loading={props.loading}/>
                        </div>
                    </div>
            }
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    loading : state.selectedTeam.loading,
    squad : state.selectedTeam.data.squad,
    data : state.selectedTeam.data
});


export default connect(mapStateToProps)(Team);
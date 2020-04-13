import React, {Component} from "react";
import {getSelectedTeamAction, getTeamsAction} from "../redux/action";
import ListCard from "../component/ListCard";
import {connect} from "react-redux";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked : false
        }
    };

    componentDidMount() {
        this.props.getTeamsAction()
    };

    cardClicked = (id) => {
        console.log(id);
        this.props.getSelectedTeamAction(id)
        this.setState({
            clicked : true
        })
    };

    render() {
        const {clicked} = this.state;
        if (clicked) {
            this.props.history.push("/team")
        }
        return(
            <ListCard data={this.props.teams} loading={this.props.loading} handleClick={this.cardClicked}/>
        );
    }
}

const mapStateToProps = (state) => ({
    loading : state.listTeams.loading,
    teams : state.listTeams.teams
});

const mapDispatchToProps = {
    getTeamsAction,
    getSelectedTeamAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
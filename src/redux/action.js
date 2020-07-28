import axios from 'axios';
import API from '../util/Global';

let headers = {
    'X-Auth-Token': API.token,
};

function getAxios(url) {
    return axios.get(url, {headers});
}

export const getTeamsAction = async ()=> {

    return (dispatch) => {
        dispatch({
            type : 'GET_TEAMS'
        });


        await getAxios(API.apiPremierLeague)
            .then(res => {
                dispatch({
                    type: 'GET_TEAMS_SUCCESS',
                    payload: res.data.teams
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_TEAMS_FAILED'
                });
                throw err;
            })
    }
};

export const getSelectedTeamAction = async (id) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_SELECTED_TEAM'
        });
        await getAxios(API.apiTeams + id)
            .then(res => {
            dispatch({
                type: 'GET_SELECTED_TEAM_SUCCESS',
                payload: res.data
            })
        })
            .catch(err => {
                dispatch({
                    type: 'GET_SELECTED_TEAM_FAILED'
                });
                throw err;
            })
    }
};

const appState = {
    listTeams: {
        teams: [],
        loading: true
    },
    selectedTeam : {
        data: [],
        loading: true
    }
};

const app = (state = {...appState}, action) => {
    console.log('action : ', action.type)
    switch (action.type) {
        case 'GET_TEAMS' :
            return {
                ...state,
                listTeams: {
                    ...state.listTeams,
                    loading: true
                }
            };
        case 'GET_TEAMS_SUCCESS':
            return {
                ...state,
                listTeams: {
                    teams: action.payload,
                    loading : false
                }
            };
        case 'GET_TEAMS_FAILED':
            return {
                ...state,
                listTeams: {
                    ...state.listTeams,
                    loading: true
                }
            };

        case 'GET_SELECTED_TEAM' :
            return {
                ...state,
                selectedTeam: {
                    ...state.selectedTeam,
                    loading: true
                }
            };
        case 'GET_SELECTED_TEAM_SUCCESS':
            return {
                ...state,
                selectedTeam: {
                    data: action.payload,
                    loading : false
                }
            };
        case 'GET_SELECTED_TEAM_FAILED':
            return {
                ...state,
                selectedTeam: {
                    ...state.selectedTeam,
                    loading: true
                }
            };
        default:
            return state
    }
};

export default app;
import { ACTION_TYPES } from "../actions/campaignAction";

const initialState = {
    createCampaignMsg: "",
    campaigns: [],
    campaignNames: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CAMPAIGN_CREATED:
            console.log(action.payload)
            return {...state, createCampaignMsg:action.payload};
        case ACTION_TYPES.RECIEVED_CAMPAIGN:
            console.log(action)
            return {...state, campaigns:action.payload};
        case ACTION_TYPES.RECIEVED_CAMPAIGN_NAMES:
            console.log(action)
            return {...state, campaignNames:action.payload};
        default:
            return state;
    }
}
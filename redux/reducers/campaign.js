import { ACTION_TYPES } from "../actions/campaignAction";

const initialState = {
    createCampaignMsg: undefined,
    createCampaignError: undefined,

    updateCampaignMsg: undefined,
    updateCampaignError: undefined,

    campaigns: [],
    campaignsError: undefined,
    
    campaignNames: [],
    campaignNamesError: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CAMPAIGN_CREATED:
            console.log(action.payload)
            return {...state, createCampaignMsg:action.payload, createCampaignError:undefined};
        case ACTION_TYPES.CREATE_CAMPAIGN_FAILED:
            console.log(action.payload)
            return {...state, createCampaignError:action.payload};

        case ACTION_TYPES.RECIEVED_CAMPAIGN:
            console.log(action)
            return {...state, campaigns:action.payload, campaignsError:undefined};
        case ACTION_TYPES.GET_CAMPAIGN_FAILED:
            console.log(action)
            return {...state, campaignsError:action.payload};

        case ACTION_TYPES.RECIEVED_CAMPAIGN_NAMES:
            console.log(action)
            return {...state, campaignNames:action.payload , campaignNamesError:undefined};
        case ACTION_TYPES.GET_CAMPAIGN_NAMES_FAILED:
            console.log(action)
            return {...state, campaignNamesError:action.payload};

        case ACTION_TYPES.CAMPAIGN_UPDATED:
            console.log(action.payload)
            return {...state, updateCampaignMsg:action.payload, updateCampaignError:undefined};
        case ACTION_TYPES.UPDATE_CAMPAIGN_FAILED:
            console.log(action.payload)
            return {...state, updateCampaignError:action.payload};

        default:
            return state;
    }
}
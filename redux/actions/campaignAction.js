export const ACTION_TYPES = {
    CREATE_CAMPAIGN: "CREATE_CAMPAIGN",
    CAMPAIGN_CREATED: "CAMPAIGN_CREATED",
    GET_CAMPAIGN:"GET_CAMPAIGN",
    RECIEVED_CAMPAIGN:"RECIEVED_CAMPAIGN",
    GET_CAMPAIGN_NAMES:"GET_CAMPAIGN_NAMES",
    RECIEVED_CAMPAIGN_NAMES: "RECIEVED_CAMPAIGN_NAMES"
  };
  
  export const createCampaignAction = (rsp) => ({
    type: ACTION_TYPES.CAMPAIGN_CREATED,
    payload: rsp,
  });

  export const getCampaignNamesAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_CAMPAIGN_NAMES,
    payload: rsp,
  });

  export const getCampaignAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_CAMPAIGN,
    payload: rsp,
  });

  export default {
    createCampaignAction,
    getCampaignAction,
    getCampaignNamesAction
  };
  
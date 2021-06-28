export const ACTION_TYPES = {
    CREATE_CAMPAIGN: "CREATE_CAMPAIGN",
    CAMPAIGN_CREATED: "CAMPAIGN_CREATED",
    CREATE_CAMPAIGN_FAILED: "CREATE_CAMPAIGN_FAILED",

    GET_CAMPAIGN:"GET_CAMPAIGN",
    RECIEVED_CAMPAIGN:"RECIEVED_CAMPAIGN",
    GET_CAMPAIGN_FAILED:"GET_CAMPAIGN_FAILED",

    GET_CAMPAIGN_NAMES:"GET_CAMPAIGN_NAMES",
    RECIEVED_CAMPAIGN_NAMES: "RECIEVED_CAMPAIGN_NAMES",
    GET_CAMPAIGN_NAMES_FAILED:"GET_CAMPAIGN_NAMES_FAILED",
  };
  
  export const createCampaignAction = (rsp) => ({
    type: ACTION_TYPES.CAMPAIGN_CREATED,
    payload: rsp,
  });
  export const createCampaignActionFailed = (rsp) => ({
    type: ACTION_TYPES.CREATE_CAMPAIGN_FAILED,
    payload: rsp,
  });

  export const getCampaignAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_CAMPAIGN,
    payload: rsp,
  });
  export const getCampaignActionFailed = (rsp) => ({
    type: ACTION_TYPES.GET_CAMPAIGN_FAILED,
    payload: rsp,
  });

  export const getCampaignNamesAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_CAMPAIGN_NAMES,
    payload: rsp,
  });
  export const getCampaignNamesActionFailed = (rsp) => ({
    type: ACTION_TYPES.GET_CAMPAIGN_NAMES_FAILED,
    payload: rsp,
  });

  export default {
    createCampaignAction,
    createCampaignActionFailed,
    getCampaignAction,
    getCampaignActionFailed,
    getCampaignNamesAction,
    getCampaignNamesActionFailed,
  };
  
import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import MultiEmail from "../components/MultiEmail";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ACTION_TYPES } from "../redux/actions/campaignAction";
import Floating from "../components/Floating";
import Image from "next/image";
import pic from "../public/Login.svg";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Createcampaign() {
  const dispatch = useDispatch();
  const router = useRouter();
  const createdCampaignMsg = useSelector(
    (state) => state.campaign.createCampaignMsg
  );
  const createdCampaignError = useSelector(
    (state) => state.campaign.createCampaignError
  );

  const fetchedToken = useSelector((state) => state.auth.token);

  React.useEffect(() => {
    if (fetchedToken === "" || !fetchedToken) router.push("/");
  });

  // const [toEmails, setToEmails] = React.useState([]);
  //EMAILS
  const [toEmails, setToEmails] = React.useState([]);
  const changeToEmails = (emails) => {
    setToEmails(emails);
  };
  const [ccEmails, setCcEmails] = React.useState([]);
  const changeCcEmails = (emails) => {
    setCcEmails(emails);
  };
  const [bccEmails, setBccEmails] = React.useState([]);
  const changeBccEmails = (emails) => {
    setBccEmails(emails);
  };

  //Campaign
  const [campaign, setCampaign] = React.useState("");
  const handleCampaignChange = (event) => {
    setCampaign(event.target.value);
  };

  //ALL FORM DATA HANDLER

  //ONSEND HANDLER
  const onsend = async () => {
    const data = {
      to: toEmails,
      cc: ccEmails,
      bcc: bccEmails,
      campaignName: campaign,
    };

    console.log(data);
    dispatch({ type: ACTION_TYPES.CREATE_CAMPAIGN, payload: data });
    console.log(createdCampaignMsg);

    setToEmails([]);
    setCcEmails([]);
    setBccEmails([]);
    setCampaign("");
  };

  return (
    <div>
      <main>
        <Layout>
          <div
            style={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="lg:flex">
              <div
                className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"
                style={{ height: "auto" }}
              >
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                  <div
                    className="h-auto w-full max-w-md -mr-10"
                    style={{
                      objectFit: "contain",
                      maxWidth: "120%",
                      height: "auto",
                    }}
                  >
                    <Image src={pic} alt="." />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className=" px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-10 xl:px-24 xl:max-w-2xl">
                  <h2
                    className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-5xl
xl:text-bold"
                    style={{
                      color: "#ff3d00",
                      fontWeight: "bold",
                    }}
                  >
                    Create Campaign
                  </h2>

                  {createdCampaignError ? (
                    <Alert severity="error" className="max-w-lg mx-auto my-5">
                      <AlertTitle>Error</AlertTitle>
                      <strong>{createdCampaignError}</strong>
                    </Alert>
                  ) : (
                    <></>
                  )}

                  {createdCampaignMsg ? (
                    <Alert severity="success" className="max-w-lg mx-auto my-5">
                      <AlertTitle>Successful</AlertTitle>
                      <strong>{createdCampaignMsg}</strong>
                    </Alert>
                  ) : (
                    <></>
                  )}

                  <div className="mt-12">
                    <form>
                      <div>
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                          Campaign Name
                        </div>
                        <TextField
                          required
                          className="w-full"
                          id="outlined-basic"
                          placeholder="Enter Campaign Name"
                          variant="outlined"
                          value={campaign}
                          onChange={handleCampaignChange}
                        />
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Emails
                          </div>
                        </div>
                        <MultiEmail
                          required
                          email={toEmails}
                          handler={changeToEmails}
                          placeholder="To"
                        />
                        <br />
                        <MultiEmail
                          email={ccEmails}
                          handler={changeCcEmails}
                          placeholder="Cc"
                        />
                        <br />
                        <MultiEmail
                          email={bccEmails}
                          handler={changeBccEmails}
                          placeholder="Bcc"
                        />
                      </div>
                      <div className="mt-10">
                        <div className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className="m-10"
                            onClick={onsend}
                            style={{
                              width: "320px",
                              height: "56.3px",
                              fontWeight: "bold",
                            }}
                          >
                            Create
                          </Button>
                        </div>
                      </div>
                      <div className="h-16 w-full md:h-1"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Floating />
        </Layout>
      </main>
    </div>
  );
}

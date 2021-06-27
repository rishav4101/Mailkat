import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import dynamic from "next/dynamic";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES as ac1 } from "../redux/actions/campaignAction";
import { ACTION_TYPES as ac2 } from "../redux/actions/mailAction";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import MultiEmail from "../components/MultiEmail";
import { ACTION_TYPES } from "../redux/actions/authAction";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const plugins = dynamic(() => import("suneditor/src/plugins"), {
  ssr: false,
});

export default function Mail() {
  const dispatch = useDispatch();
  const fetchedCampaignNames = useSelector(
    (state) => state.campaign.campaignNames
  );

  React.useEffect(() => {
    dispatch({ type: ac1.GET_CAMPAIGN_NAMES });
    console.log(fetchedCampaignNames);
  }, []);

  const editor = React.useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  //EMAIL BODY
  const [emailHtml, setEmailHtml] = React.useState("");
  const handleChange = (content) => {
    setEmailHtml(content);
    console.log(content); //Get Content Inside Editor
  };

  //CAMPAIGN NAME HANDLER
  const [camName, setCamName] = React.useState("");
  const handleCamNameChange = (event) => {
    setCamName(event.target.value);
  };

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

  //SUBJECT
  const [subject, setSubject] = React.useState("");
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  //SCHEDULE HANDLERS
  const [schedule, setSchedule] = React.useState("");
  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const [timely, setTimely] = React.useState(1);
  const handleTimelyChange = (event) => {
    setTimely(event.target.value);
  };

  const [onceDate, setOnceDate] = React.useState(new Date());
  const handleOnceDateChange = (date) => {
    setOnceDate(date);
  };

  const [dailyDate, setDailyDate] = React.useState(
    new Date()
  );
  const handleDailyDateChange = (date) => {
    setDailyDate(date);
  };

  const [weeklyDay, setWeeklyDay] = React.useState("Sunday");
  const handleWeeklyDayChange = (event) => {
    setWeeklyDay(event.target.value);
  };
  const [weeklyTime, setWeeklyTime] = React.useState(new Date());
  const handleWeeklyTimeChange = (date) => {
    setWeeklyTime(date);
  };

  const ar = [];
  for (var i = 1; i <= 28; i++) {
    ar.push(i);
  }
  const [monthlyDay, setMonthlyDay] = React.useState(ar[0]);
  const handleMonthlyDayChange = (event) => {
    setMonthlyDay(event.target.value);
  };
  const [monthlyTime, setMonthlyTime] = React.useState(new Date());
  const handleMonthlyTimeChange = (date) => {
    setMonthlyTime(date);
  };

  const [yearlyDate, setYearlyDate] = React.useState(new Date());
  const handleYearlyDateChange = (date) => {
    console.log(date);
    setYearlyDate(date);
  };
  const presentYear = new Date();
  const minDateThisYear = new Date(presentYear.getFullYear(), 0, 1, 0, 0, 0, 0);
  const maxDateThisYear = new Date(
    presentYear.getFullYear(),
    11,
    31,
    23,
    59,
    59,
    999
  );

  //ALL FORM DATA HANDLER
  const [data, setData] = React.useState({});

  const mailSentMsg = useSelector((state) => state.mail.mailSentMsg);

  //ONSEND HANDLER
  const onSend = () => {
    const data = {
      subject: subject,
      body: emailHtml,
      recurrence: schedule,
    };

    if (camName === "") {
      (data["to"] = toEmails),
        (data["cc"] = ccEmails),
        (data["bcc"] = bccEmails);
    } else {
      data["campaignName"] = camName;
      data["to"] = [];
      data["cc"] = [];
      data["bcc"] = [];
    }

    if (data.recurrence === "") {
      data["recurrence"] = null;
    } else {
      if (data.recurrence === "Once") {
        data["second"] = onceDate.getSeconds();
        data["hour"] = onceDate.getHours();
        data["minute"] = onceDate.getMinutes();
        data["dayOfMonth"] = onceDate.getDate();
        data["month"] = onceDate.getMonth();
      } else if (data.recurrence === "Timely") {
        data["second"] = timely;
      } else if (data.recurrence === "Daily") {
        data["second"] = dailyDate.getSeconds();
        data["hour"] = dailyDate.getHours();
        data["minute"] = dailyDate.getMinutes();
      } else if (data.recurrence === "Weekly") {
        data["second"] = weeklyTime.getSeconds();
        data["hour"] = weeklyTime.getHours();
        data["minute"] = weeklyTime.getMinutes();
        data["dayOfWeek"] = weeklyDay;
      } else if (data.recurrence === "Monthly") {
        data["second"] = monthlyTime.getSeconds();
        data["hour"] = monthlyTime.getHours();
        data["minute"] = monthlyTime.getMinutes();
        data["dayOfMonth"] = monthlyDay;
      } else if (data.recurrence === "Yearly") {
        data["second"] = yearlyDate.getSeconds();
        data["hour"] = yearlyDate.getHours();
        data["minute"] = yearlyDate.getMinutes();
        data["dayOfMonth"] = yearlyDate.getDate();
        data["month"] = yearlyDate.getMonth();
      }
    }

    console.log(data);

    dispatch({ type: ac2.SEND_MAIL, payload: data });

    console.log(mailSentMsg);
  };

  //RENDER
  return (
    <div>
      <main>
        <Layout>
          <div
            className="flex flex-col justify-center rounded-xl p-7"
            style={{ boxShadow: "0px 0px 20px #ffccbc" }}
          >
            <h1 className="text-3xl lg:text-5xl my-5">Create a new mail</h1>
            <div className="flex flex-row flex-wrap">
              <div className="w-52 m-3">
                <FormControl variant="outlined" className="w-full">
                  <InputLabel id="demo-simple-select-filled-label">
                    Select Campaign
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={camName}
                    onChange={handleCamNameChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {fetchedCampaignNames.map((cm) => (
                      <MenuItem value={cm}>{cm}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {camName === "" ? (
                <>
                  <div className="w-full p-2">
                    <MultiEmail
                      email={toEmails}
                      handler={changeToEmails}
                      placeholder="To"
                    />
                  </div>
                  <div className="w-full p-2">
                    <MultiEmail
                      email={ccEmails}
                      handler={changeCcEmails}
                      placeholder="Cc"
                    />
                  </div>
                  <div className="w-full p-2">
                    <MultiEmail
                      email={bccEmails}
                      handler={changeBccEmails}
                      placeholder="Bcc"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="w-full p-2">
                <TextField
                  className="w-full"
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  value={subject}
                  onChange={handleSubjectChange}
                />
              </div>
            </div>
            <SunEditor
              getSunEditorInstance={getSunEditorInstance}
              onChange={handleChange}
              setOptions={{
                plugins: plugins,
                buttonList: [
                  // Default
                  ["undo", "redo"],
                  ["font", "fontSize", "formatBlock"],
                  ["paragraphStyle", "blockquote"],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["fontColor", "hiliteColor", "textStyle"],
                  ["removeFormat"],
                  ["outdent", "indent"],
                  ["align", "horizontalRule", "list", "lineHeight"],
                  ["table", "link", "image", "video", "audio"],
                  ["fullScreen", "showBlocks", "codeView"],
                  ["preview", "print"],
                  ["save"],
                  // (min-width:992px)
                  [
                    "%992",
                    [
                      ["undo", "redo"],
                      [
                        ":p-More Paragraph-default.more_paragraph",
                        "font",
                        "fontSize",
                        "formatBlock",
                        "paragraphStyle",
                        "blockquote",
                      ],
                      ["bold", "underline", "italic", "strike"],
                      [
                        ":t-More Text-default.more_text",
                        "subscript",
                        "superscript",
                        "fontColor",
                        "hiliteColor",
                        "textStyle",
                      ],
                      ["removeFormat"],
                      ["outdent", "indent"],
                      ["align", "horizontalRule", "list", "lineHeight"],
                      [
                        "-right",
                        ":i-More Misc-default.more_vertical",
                        "fullScreen",
                        "showBlocks",
                        "codeView",
                        "preview",
                        "print",
                        "save",
                        "template",
                      ],
                      [
                        "-right",
                        ":r-More Rich-default.more_plus",
                        "table",
                        "link",
                        "image",
                        "video",
                        "audio",
                        "math",
                        "imageGallery",
                      ],
                    ],
                  ],
                  // (min-width:768px)
                  [
                    "%768",
                    [
                      ["undo", "redo"],
                      [
                        ":p-More Paragraph-default.more_paragraph",
                        "font",
                        "fontSize",
                        "formatBlock",
                        "paragraphStyle",
                        "blockquote",
                      ],
                      [
                        ":t-More Text-default.more_text",
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "subscript",
                        "superscript",
                        "fontColor",
                        "hiliteColor",
                        "textStyle",
                        "removeFormat",
                      ],
                      [
                        ":e-More Line-default.more_horizontal",
                        "outdent",
                        "indent",
                        "align",
                        "horizontalRule",
                        "list",
                        "lineHeight",
                      ],
                      [
                        ":r-More Rich-default.more_plus",
                        "table",
                        "link",
                        "image",
                        "video",
                        "audio",
                        "math",
                        "imageGallery",
                      ],
                      [
                        "-right",
                        ":i-More Misc-default.more_vertical",
                        "fullScreen",
                        "showBlocks",
                        "codeView",
                        "preview",
                        "print",
                        "save",
                        "template",
                      ],
                    ],
                  ],
                ],
                placeholder: "Start writing your email here.",
                charCounter: true,
                width: "100%",
              }}
            />
            <div className="flex flex-row justify-start items-center">
              <div className="w-32 m-3">
                <FormControl variant="outlined" className="w-full">
                  <InputLabel id="demo-simple-select-filled-label">
                    Schedule
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={schedule}
                    onChange={handleScheduleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Once"}>Once</MenuItem>
                    <MenuItem value={"Timely"}>Timely</MenuItem>
                    <MenuItem value={"Daily"}>Daily</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                    <MenuItem value={"Yearly"}>Yearly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {schedule === "Once" ? (
                <div className="m-3">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      label="Pick Date Time"
                      onError={console.log}
                      minDate={new Date("2019-01-01T00:00")}
                      format="yyyy/MM/dd hh:mm a"
                      value={onceDate}
                      onChange={handleOnceDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date time",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : (
                <></>
              )}

              {schedule === "Timely" ? (
                <div className="m-3">
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="In Seconds"
                    variant="outlined"
                    value={timely}
                    onChange={handleTimelyChange}
                  />
                </div>
              ) : (
                <></>
              )}
              {schedule === "Daily" ? (
                <div className="m-3">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      label="Pick Time"
                      placeholder="08:00 AM"
                      mask="__:__ _M"
                      value={dailyDate}
                      onChange={handleDailyDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : (
                <></>
              )}
              {schedule === "Weekly" ? (
                <div className="m-3 flex flex-row justify-center items-center">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="w-32 m-2">
                      <FormControl variant="outlined" className="w-full">
                        <InputLabel id="demo-simple-select-filled-label2">
                          Select Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label2"
                          id="demo-simple-select-filled2"
                          value={weeklyDay}
                          onChange={handleWeeklyDayChange}
                        >
                          {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                          <MenuItem value={"Sunday"}>Sunday</MenuItem>
                          <MenuItem value={"Monday"}>Monday</MenuItem>
                          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                          <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                          <MenuItem value={"Thursday"}>Thursday</MenuItem>
                          <MenuItem value={"Friday"}>Friday</MenuItem>
                          <MenuItem value={"Saturday"}>Saturday</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <KeyboardTimePicker
                      label="Pick Time"
                      placeholder="08:00 AM"
                      mask="__:__ _M"
                      value={weeklyTime}
                      onChange={handleWeeklyTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : (
                <></>
              )}

              {schedule === "Monthly" ? (
                <div className="m-3 flex flex-row justify-center items-center">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="w-32 m-2">
                      <FormControl variant="outlined" className="w-full">
                        <InputLabel id="demo-simple-select-filled-label2">
                          Select Date
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label2"
                          id="demo-simple-select-filled2"
                          value={monthlyDay}
                          onChange={handleMonthlyDayChange}
                        >
                          {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                          {ar.map((m) => (
                            <MenuItem key={m} value={m}>
                              {m}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <KeyboardTimePicker
                      label="Pick Time"
                      placeholder="08:00 AM"
                      mask="__:__ _M"
                      value={monthlyTime}
                      onChange={handleMonthlyTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : (
                <></>
              )}

              {schedule === "Yearly" ? (
                <div className="m-3">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      label="Pick Date Time"
                      onError={console.log}
                      minDate={new Date("2019-01-01T00:00")}
                      format="yyyy/MM/dd hh:mm a"
                      value={yearlyDate}
                      minDate={minDateThisYear}
                      maxDate={maxDateThisYear}
                      onChange={handleYearlyDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date time",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              ) : (
                <></>
              )}

              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={onSend}
              >
                SEND
              </Button>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}

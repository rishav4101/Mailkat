import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import dynamic from "next/dynamic";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const plugins = dynamic(() => import("suneditor/src/plugins"), {
  ssr: false,
});

export default function Mail() {
  const editor = React.useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
    console.log(editor.current);
  };
  const handleChange = (content) => {
    console.log(content); //Get Content Inside Editor
  };

  const [value, setValue] = React.useState("");
  return (
    <div>
    <main>
    <Layout>
      <div className="flex flex-col justify-center">
      <Button onClick={() => console.log(value)}>SEND</Button>
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
          width:"100%"
        }}
      />
      </div>
    </Layout>
    </main>
    </div>
  );
}

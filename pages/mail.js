import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const { draftToHtml } =  dynamic(
    () => import('draftjs-to-html').then(mod => mod.EditorState),
    {
        ssr: false
    }
);

const {EditorState} =  dynamic(
    () => import('draft-js').then(mod => mod.EditorState),
    {
        ssr: false
    }
);

const convertToRaw =  dynamic(
    () => import('draft-js').then(mod => mod.convertToRaw),
    {
        ssr: false
    }
);

// import { Editor } from 'react-draft-wysiwyg';


const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    {
        ssr: false
    }
);


export default function Mail() {
    const [editorState, setEditorState] = React.useState(
        () => EditorState,
      );

  return (
    <div>
      <main>
        <Layout>
        <div>
        <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      </div>
            <Button onClick={() => console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))}>SEND</Button>
        </Layout>
      </main>
    </div>
  );
}

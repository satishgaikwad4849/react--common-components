import React, { useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import CustomButton from "./Button/button";

const CopyButton = ({ onClick, copied }) => (
  <CustomButton className="copy-button" onClick={onClick} disabled={copied}>
    {copied ? "Copied!" : "Copy Code"}
  </CustomButton >
);

const ReusableCodeEditor = ({ initialValue, options, style }) => {
  const editorRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if (editorRef.current) {
      const code = editorRef.current.editor.getValue();
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch((err) => console.error("Failed to copy: ", err));
    }
  };

  return (
    <div className="code-editor-container">
      <AceEditor
        ref={editorRef}
        mode="javascript"
        theme="monokai"
        name="code-editor"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={initialValue}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          ...options,
        }}
        style={style}
      />
      <CopyButton onClick={handleCopyClick} copied={copied} />
    </div>
  );
};

export default ReusableCodeEditor;

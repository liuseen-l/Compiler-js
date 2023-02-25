import Editor from "../../components/editor/editor";
import "./index.scss";

function Source() {
  return (
    <div className="source-container">
      <div className="target">
        <Editor fileTitle="Target"></Editor>
      </div>
      <div className="compliler">
        <div className="dragger">
          <span>==</span>
        </div>
        <Editor fileTitle="Compiler"></Editor>
      </div>
    </div>
  );
}

export default Source;

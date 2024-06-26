import React, { useMemo, useRef, useState } from "react";
import Output from "../Output";
import Source from "../Source";
import "./index.scss";

interface Istate {
  dragging: boolean;
  split: number;
}

function SplitPane() {
  const container = useRef<null | HTMLDivElement>(null);

  const [state, setState] = useState<Istate>({ dragging: false, split: 50 });

  const boundSplit: number = useMemo(() => {
    const { split } = state;
    return split < 20 ? 20 : split > 80 ? 80 : split;
  }, [state]);

  let startPosition: number = 0;
  let startSplit: number = 0;

  const dragStart: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
    e.preventDefault();

    // 每一次重新渲染，非响应式数据都变为初始值 console.log(startPosition, startSplit); 0 0
    setState({ ...state, dragging: true });
    startPosition = e.pageX;
    startSplit = boundSplit;
    console.log(startSplit, startPosition);
  };

  const dragEnd = () => {
    setState({ ...state, dragging: false });
  };

  const dragMove: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
    if (state.dragging) {
      // 获取x
      const position = e.pageX;
      // 获取offsetWidth
      const totalSize = container.current!.offsetWidth;
      
      const dp = position - startPosition;

      setState({ ...state, split: startSplit - 1 + (dp / totalSize) * 100 });
    }
  };

  return (
    <div
      className="split-pane"
      ref={container}
      onMouseMove={dragMove}
      onMouseUp={dragEnd}
      onMouseLeave={dragEnd}
    >
      {/* 编辑 */}
      <div className="left" style={{ ["width"]: boundSplit + "%" }}>
        <Source></Source>
        <div className="dragger" onMouseDown={dragStart}>
          <span>|||</span>
        </div>
      </div>
      <div className="right" style={{ ["width"]: 100 - boundSplit + "%" }}>
        <Output />
      </div>
    </div>
  );
}

export default SplitPane;

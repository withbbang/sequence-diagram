import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  NodeTypes,
  EdgeTypes,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeMouseHandler,
  EdgeMouseHandler
} from 'reactflow';
import styles from './Flow.module.scss';
import 'reactflow/dist/style.css';
import SVG from 'modules/SVG';

const FlowPT = ({
  title,
  nodeName,
  edgeName,
  addButtonType,
  titleNameRef,
  nodeNameRef,
  edgeNameRef,
  nodes,
  edges,
  nodeTypes,
  edgeTypes,
  onSetTitle,
  onSetNodeName,
  onSetEdgeName,
  onNodesDelete,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeDoubleClick,
  onEdgeDoubleClick,
  onKeyDown,
  onBlur,
  onSetAddButtonType,
  onAddNode
}: typeFlowPT) => {
  return (
    <>
      <div className={styles.wrap}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesDelete={onNodesDelete}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={onNodeDoubleClick}
          onEdgeDoubleClick={onEdgeDoubleClick}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} />
          <div className={styles.updatenode__controls}>
            <label>Title Label:</label>
            <input
              value={title}
              onKeyDown={(e) => onKeyDown(e, 'title')}
              onChange={(e) => onSetTitle(e.target.value)}
              onBlur={() => onBlur('title')}
              ref={titleNameRef}
            />
            <label>Node Label:</label>
            <input
              value={nodeName}
              onKeyDown={(e) => onKeyDown(e, 'node')}
              onChange={(e) => onSetNodeName(e.target.value)}
              onBlur={() => onBlur('node')}
              ref={nodeNameRef}
            />
            <label>Edge Label:</label>
            <input
              value={edgeName}
              onKeyDown={(e) => onKeyDown(e, 'edge')}
              onChange={(e) => onSetEdgeName(e.target.value)}
              onBlur={() => onBlur('edge')}
              ref={edgeNameRef}
            />
            <button onClick={() => onSetAddButtonType('diamondNode')}>
              Add Diamond Node
            </button>
            <button onClick={() => onSetAddButtonType('rectangleNode')}>
              Add Rectangle Node
            </button>
          </div>
        </ReactFlow>
        {(addButtonType === 'rectangleNode' ||
          addButtonType === 'diamondNode') && (
          <div className={styles.addBackground}>
            <div
              className={styles.close}
              onClick={() => onSetAddButtonType('')}
            >
              <SVG type="close" width="40px" height="40px" fill={'#fff'} />
            </div>
            <div className={styles.modalBody}>
              {[
                'none',
                'top',
                'left',
                'bottom',
                'right',
                'top-left',
                'left-bottom',
                'bottom-right',
                'right-top',
                'top-left-bottom',
                'left-bottom-right',
                'bottom-right-top',
                'right-top-left',
                'left-right',
                'top-bottom',
                'all'
              ].map((type) => (
                <span
                  key={type}
                  onClick={() => {
                    onAddNode(addButtonType, type);
                    onSetAddButtonType('');
                  }}
                >
                  <SVG
                    type={addButtonType}
                    fillTop={
                      type.includes('top') || type === 'all' ? '#000' : '#aaa'
                    }
                    fillLeft={
                      type.includes('left') || type === 'all' ? '#000' : '#aaa'
                    }
                    fillBottom={
                      type.includes('bottom') || type === 'all'
                        ? '#000'
                        : '#aaa'
                    }
                    fillRight={
                      type.includes('right') || type === 'all' ? '#000' : '#aaa'
                    }
                  />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

interface typeFlowPT {
  title: string;
  nodeName: string;
  edgeName: string;
  addButtonType: string;
  titleNameRef: React.MutableRefObject<HTMLInputElement | null>;
  nodeNameRef: React.MutableRefObject<HTMLInputElement | null>;
  edgeNameRef: React.MutableRefObject<HTMLInputElement | null>;
  nodes: Node<any, string | undefined>[];
  edges: Edge<any>[];
  nodeTypes: NodeTypes;
  edgeTypes: EdgeTypes;
  onSetTitle: React.Dispatch<React.SetStateAction<string>>;
  onSetNodeName: React.Dispatch<React.SetStateAction<string>>;
  onSetEdgeName: React.Dispatch<React.SetStateAction<string>>;
  onNodesDelete: (deleted: Array<Node>) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  onNodeDoubleClick: NodeMouseHandler;
  onEdgeDoubleClick: EdgeMouseHandler;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, type: string) => void;
  onBlur: (type: string) => void;
  onSetAddButtonType: React.Dispatch<React.SetStateAction<string>>;
  onAddNode: (type: string, handleType: string) => void;
}

export default FlowPT;

import React, { ChangeEvent } from 'react';
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
import styles from './EntityRelationship.module.scss';
import 'reactflow/dist/style.css';
import SVG from 'modules/SVG';
import { typeColumn } from 'modules/types';
import Column from './Column';

const EntityRelationshipPT = ({
  title,
  tableName,
  tableComment,
  edgeName,
  isAddUpdateTablePopup,
  columns,
  titleNameRef,
  tableNameRef,
  edgeNameRef,
  tables,
  edges,
  tableTypes,
  edgeTypes,
  onSetTitle,
  onSetTableName,
  onSetTableComment,
  onSetEdgeName,
  onTablesChange,
  onEdgesChange,
  onColumnInputChange,
  onAddColumn,
  onDragStart,
  onDragEnd,
  onDragOver,
  onAddTable,
  onRemoveColumn,
  onConnect,
  onTableDoubleClick,
  onEdgeDoubleClick,
  onKeyDown,
  onBlur,
  onAddUpdateTablePopup,
  onSave,
  onRestore,
  onInit,
  onAddHandle
}: typeEntityRelationshipPT): JSX.Element => {
  return (
    <>
      <div className={styles.wrap}>
        <ReactFlow
          nodes={tables}
          edges={edges}
          nodeTypes={tableTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onTablesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={onTableDoubleClick}
          onEdgeDoubleClick={onEdgeDoubleClick}
          onInit={onInit}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} />
          <div className={styles.updatetable__controls}>
            <label>Title Label:</label>
            <input
              value={title}
              onKeyDown={(e) => onKeyDown(e, 'title')}
              onChange={(e) => onSetTitle(e.target.value)}
              onBlur={() => onBlur('title')}
              ref={titleNameRef}
            />
            {/* <label>Table Label:</label>
            <input
              value={tableName}
              onKeyDown={(e) => onKeyDown(e, 'table')}
              onChange={(e) => onSetTableName(e.target.value)}
              onBlur={() => onBlur('table')}
              ref={tableNameRef}
            /> */}
            <label>Edge Label:</label>
            <input
              value={edgeName}
              onKeyDown={(e) => onKeyDown(e, 'edge')}
              onChange={(e) => onSetEdgeName(e.target.value)}
              onBlur={() => onBlur('edge')}
              ref={edgeNameRef}
            />
            <button onClick={() => onAddUpdateTablePopup()}>Add Table</button>
            <button onClick={() => onSave()}>Temporarily Save Diagrams</button>
            <button onClick={() => onRestore()}>
              Restore Temporary Diagrams
            </button>
            <button onClick={() => onAddHandle()}>Add Handle</button>
          </div>
        </ReactFlow>
        {isAddUpdateTablePopup && (
          <div className={styles.background}>
            <div
              className={styles.close}
              onClick={() => onAddUpdateTablePopup()}
            >
              <SVG type="close" width="40px" height="40px" fill={'#fff'} />
            </div>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <span>Table Name:</span>
                <input
                  value={tableName}
                  onChange={(e) => onSetTableName(e.target.value)}
                />
              </div>
              <div className={styles.inputDiv}>
                <span>Table Comment:</span>
                <input
                  value={tableComment}
                  onChange={(e) => onSetTableComment(e.target.value)}
                />
              </div>
              <div className={styles.columnsDiv}>
                {Array.isArray(columns) &&
                  columns.length > 0 &&
                  columns.map((column: typeColumn, idx) => (
                    <div key={idx} className={styles.column}>
                      <Column
                        idx={idx}
                        column={column}
                        onColumnInputChange={onColumnInputChange}
                        onAddColumn={onAddColumn}
                        onRemoveColumn={onRemoveColumn}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        onDragOver={onDragOver}
                      />
                    </div>
                  ))}
              </div>
              <div className={styles.btnsDiv}>
                <button onClick={() => onAddUpdateTablePopup()}>Cancel</button>
                <button onClick={onAddTable}>Commit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

interface typeEntityRelationshipPT {
  title: string;
  tableName: string;
  tableComment: string;
  edgeName: string;
  isAddUpdateTablePopup: boolean;
  columns: Array<typeColumn>;
  titleNameRef: React.MutableRefObject<HTMLInputElement | null>;
  tableNameRef: React.MutableRefObject<HTMLInputElement | null>;
  edgeNameRef: React.MutableRefObject<HTMLInputElement | null>;
  tables: Node<any, string | undefined>[];
  edges: Edge<any>[];
  tableTypes: NodeTypes;
  edgeTypes: EdgeTypes;
  onSetTitle: React.Dispatch<React.SetStateAction<string>>;
  onSetTableName: React.Dispatch<React.SetStateAction<string>>;
  onSetTableComment: React.Dispatch<React.SetStateAction<string>>;
  onSetEdgeName: React.Dispatch<React.SetStateAction<string>>;
  onTablesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onColumnInputChange: (
    idx: number,
    type: string,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onAddColumn: (tableId?: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onAddTable: () => void;
  onRemoveColumn: (idx: number, tableId?: string) => void;
  onConnect: OnConnect;
  onTableDoubleClick: NodeMouseHandler;
  onEdgeDoubleClick: EdgeMouseHandler;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, type: string) => void;
  onBlur: (type: string) => void;
  onAddUpdateTablePopup: (idx?: number) => void;
  onSave: () => void;
  onRestore: () => void;
  onInit: React.Dispatch<any>;
  onAddHandle: () => void;
}

export default EntityRelationshipPT;

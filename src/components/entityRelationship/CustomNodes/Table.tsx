import { memo, useEffect, useState } from 'react';
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
  ResizeParams
} from 'reactflow';
import { typeCustomNode } from 'modules/types';
import styles from './CommonNodeStyles.module.scss';

function Table({ data, isConnectable, selected }: typeCustomNode): JSX.Element {
  const initWidth = 100,
    initHeight = 30,
    columeHeight = 20,
    ratio = initHeight + data.handleCount * columeHeight;

  const [width, setWitdh] = useState<number>(initWidth);
  const [height, setHeight] = useState<number>(initHeight);

  useEffect(() => {
    setHeight(height + handleRatio('column') * height);
  }, [data.handleCount]);

  const handleRatio = (div: string) =>
    div === 'tableName' ? initHeight / ratio : columeHeight / ratio;

  const handleResize = (
    e: ResizeDragEvent,
    params: ResizeParamsWithDirection
  ) => {
    setWitdh(params.width);
    setHeight(params.height);
  };

  const handleResizeEnd = (e: ResizeDragEvent, params: ResizeParams) => {
    setWitdh(params.width);
    setHeight(params.height);
  };

  return (
    <div
      className={styles.tableWrap}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={initWidth}
        minHeight={ratio}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
      />
      {/* <Handle
        id="top-target"
        type={'target'}
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="top-source"
        type={'source'}
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="left-target"
        type={'target'}
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="left-source"
        type={'source'}
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="bottom-target"
        type={'target'}
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="bottom-source"
        type={'source'}
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="right-target"
        type={'target'}
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      />
      <Handle
        id="right-source"
        type={'source'}
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ backgroundColor: '#aaa' }}
      /> */}
      <div
        className={
          data.handleCount < 1
            ? [styles.tableName, styles.nothing].join(' ')
            : styles.tableName
        }
        style={{ height: `${handleRatio('tableName') * height}px` }}
      >
        {data.label ? data.label : ''}
      </div>
      {data.handleCount > 0 &&
        Array(data.handleCount)
          .fill(1)
          .map((_, idx) => (
            <div
              className={
                idx + 1 === data.handleCount
                  ? [styles.column, styles.isLast].join(' ')
                  : styles.column
              }
              style={{ height: `${handleRatio('column') * height}px` }}
              key={idx}
            >
              <Handle
                id={`right-target-${idx + 1}`}
                type={'target'}
                position={Position.Right}
                isConnectable={isConnectable}
                style={{
                  backgroundColor: '#aaa'
                }}
              />
              <Handle
                id={`right-source-${idx + 1}`}
                type={'source'}
                position={Position.Right}
                isConnectable={isConnectable}
                style={{
                  backgroundColor: '#aaa'
                }}
              />
            </div>
          ))}
    </div>
  );
}

export default memo(Table);

export interface typeSVG {
  type?: string;
  etcType?: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
}

export interface typeIcon {
  path: JSX.Element;
  size: number;
}

export interface typeCustomNode {
  id: string;
  data: any;
  isConnectable: boolean;
  selected: boolean;
  xPos: number;
  yPos: number;
}

export interface typeTable {
  name: string;
  comment: string;
  columns: Array<typeColumn>;
}

export interface typeColumn {
  // TODO: (공부하기) 개체 유형에 인덱스 서명 추가
  // Error: No index signature with a parameter of type 'string' was found on type 'someType'
  [key: string]: string | boolean;
  name: string;
  type: string;
  comment: string;
  default: string;
  primary: boolean;
  unique: boolean;
  notNull: boolean;
  autoIncrement: boolean;
}

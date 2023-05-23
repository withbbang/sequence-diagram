import { typeSVG } from './types';

const SVG = (props: typeSVG): JSX.Element => {
  switch (props.type) {
    case 'add':
      return (
        <svg
          width={props.width ? props.width : '35px'}
          height={props.height ? props.height : '35px'}
          fill={props.fill ? props.fill : '#000'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm5-9a1,1,0,0,1-1,1H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3A1,1,0,0,1,17,12Z" />
        </svg>
      );
    default:
      return (
        <svg
          fill={props.fill ? props.fill : '#000'}
          width={props.width ? props.width : '25px'}
          height={props.height ? props.height : '25px'}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M7.35,9.8H8.63V8.56H7.35ZM9.6,3.49h0A2.9,2.9,0,0,0,7.88,3a2.38,2.38,0,0,0-1.32.35,2.13,2.13,0,0,0-.91,1.84H7a1.36,1.36,0,0,1,.22-.73.83.83,0,0,1,.75-.35.85.85,0,0,1,.74.28,1.06,1.06,0,0,1,.2.64.91.91,0,0,1-.18.55,1.33,1.33,0,0,1-.26.27l-.34.26a1.91,1.91,0,0,0-.61.68,3.43,3.43,0,0,0-.14,1.06H8.59a1.66,1.66,0,0,1,.06-.54A.93.93,0,0,1,9,6.83l.32-.25A3.29,3.29,0,0,0,10,6a1.62,1.62,0,0,0,.3-1A1.67,1.67,0,0,0,9.6,3.49ZM15,12V1H1V12H7.3v1.1H4v1.8h8V13.1H8.7V12ZM2.4,10.6V2.4H13.6v8.2Z" />
          </g>
        </svg>
      );
  }
};

export default SVG;

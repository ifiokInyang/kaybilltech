import React from 'react';

const WebDesignSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/code">
          <g id="code">
            <path
              id="Vector"
              d="M7.21472 9.53687C8.19472 10.0269 9.03472 10.7669 9.64472 11.6869C9.99472 12.2069 9.99472 12.8769 9.64472 13.3969C9.03472 14.3069 8.19472 15.0469 7.21472 15.5369"
              stroke={selectedItem === 2 ? 'white' : '#2979FF'}
              stroke-width="2.12807"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M13.3246 15.5369H17.3246"
              stroke={selectedItem === 2 ? 'white' : '#2979FF'}
              stroke-width="2.12807"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M9.32459 22.5369H15.3246C20.3246 22.5369 22.3246 20.5369 22.3246 15.5369V9.53687C22.3246 4.53687 20.3246 2.53687 15.3246 2.53687H9.32459C4.32459 2.53687 2.32458 4.53687 2.32458 9.53687V15.5369C2.32458 20.5369 4.32459 22.5369 9.32459 22.5369Z"
              stroke={selectedItem === 2 ? 'white' : '#2979FF'}
              stroke-width="2.12807"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default WebDesignSvg;

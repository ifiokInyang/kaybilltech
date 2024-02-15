import React from 'react';

const WebAndMobSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="document-code-2">
          <path
            id="Vector"
            d="M11 22.5369H16C19.5 22.5369 21 20.5369 21 17.5369V7.53687C21 4.53687 19.5 2.53687 16 2.53687H8C4.5 2.53687 3 4.53687 3 7.53687V14.5369"
            stroke={selectedItem === 3 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            strokeMiterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M14.5 5.03687V7.03687C14.5 8.13687 15.4 9.03687 16.5 9.03687H18.5"
            stroke={selectedItem === 3 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            strokeMiterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M3.99988 17.5369L1.99988 19.5369L3.99988 21.5369"
            stroke={selectedItem === 3 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            strokeMiterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M7 17.5369L9 19.5369L7 21.5369"
            stroke={selectedItem === 3 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            strokeMiterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default WebAndMobSvg;

import React from 'react';

const AspdotnetSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/document-code">
          <g id="vuesax/linear/document-code_2">
            <g id="document-code">
              <path
                id="Vector"
                d="M21.0259 7.53687V17.5369C21.0259 20.5369 19.5259 22.5369 16.0259 22.5369H8.02588C4.52588 22.5369 3.02588 20.5369 3.02588 17.5369V7.53687C3.02588 4.53687 4.52588 2.53687 8.02588 2.53687H16.0259C19.5259 2.53687 21.0259 4.53687 21.0259 7.53687Z"
                stroke={selectedItem === 6 ? 'white' : '#2979FF'}
                stroke-width="2.13"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M14.5259 5.03687V7.03687C14.5259 8.13687 15.4259 9.03687 16.5259 9.03687H18.5259"
                stroke={selectedItem === 6 ? 'white' : '#2979FF'}
                stroke-width="2.13"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M10.0259 13.5369L8.02588 15.5369L10.0259 17.5369"
                stroke={selectedItem === 6 ? 'white' : '#2979FF'}
                stroke-width="2.13"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M14.0259 13.5369L16.0259 15.5369L14.0259 17.5369"
                stroke={selectedItem === 6 ? 'white' : '#2979FF'}
                stroke-width="2.13"
                strokeMiterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default AspdotnetSvg;

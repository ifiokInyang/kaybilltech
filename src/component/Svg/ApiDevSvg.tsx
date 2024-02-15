import React from 'react';

const ApiDevSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/hierarchy">
          <g id="vuesax/linear/hierarchy_2">
            <g id="hierarchy">
              <path
                id="Vector"
                d="M5.97412 9.53687V16.5369"
                stroke={selectedItem === 0 ? 'white' : 'blue'}
                stroke-width="2.12807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M6.22412 9.03687C8.01905 9.03687 9.47412 7.58179 9.47412 5.78687C9.47412 3.99194 8.01905 2.53687 6.22412 2.53687C4.4292 2.53687 2.97412 3.99194 2.97412 5.78687C2.97412 7.58179 4.4292 9.03687 6.22412 9.03687Z"
                stroke={selectedItem === 0 ? 'white' : 'blue'}
                stroke-width="2.12807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M5.97412 22.5369C7.63098 22.5369 8.97412 21.1937 8.97412 19.5369C8.97412 17.88 7.63098 16.5369 5.97412 16.5369C4.31727 16.5369 2.97412 17.88 2.97412 19.5369C2.97412 21.1937 4.31727 22.5369 5.97412 22.5369Z"
                stroke={selectedItem === 0 ? 'white' : 'blue'}
                stroke-width="2.12807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M19.9741 22.5369C21.631 22.5369 22.9741 21.1937 22.9741 19.5369C22.9741 17.88 21.631 16.5369 19.9741 16.5369C18.3173 16.5369 16.9741 17.88 16.9741 19.5369C16.9741 21.1937 18.3173 22.5369 19.9741 22.5369Z"
                stroke={selectedItem === 0 ? 'white' : 'blue'}
                stroke-width="2.12807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M6.10413 9.53687C6.55413 11.2869 8.15413 12.5869 10.0441 12.5769L13.4741 12.5669C16.0941 12.5569 18.3241 14.2369 19.1441 16.5769"
                stroke={selectedItem === 0 ? 'white' : 'blue'}
                stroke-width="2.12807"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ApiDevSvg;

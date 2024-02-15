import React from 'react';

const DatabaseMgtSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/sidebar-top">
          <g id="sidebar-top">
            <path
              id="Vector"
              d="M22.3206 15.5369V9.53687C22.3206 4.53687 20.3206 2.53687 15.3206 2.53687H9.32062C4.32062 2.53687 2.32062 4.53687 2.32062 9.53687V15.5369C2.32062 20.5369 4.32062 22.5369 9.32062 22.5369H15.3206C20.3206 22.5369 22.3206 20.5369 22.3206 15.5369Z"
              stroke={selectedItem === 5 ? 'white' : '#2979FF'}
              stroke-width="2.12807"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M22.3506 9.03687H2.35059"
              stroke={selectedItem === 5 ? 'white' : '#2979FF'}
              stroke-width="2.12807"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M14.9106 16.0369L12.3506 13.4769L9.79059 16.0369"
              stroke={selectedItem === 5 ? 'white' : '#2979FF'}
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

export default DatabaseMgtSvg;

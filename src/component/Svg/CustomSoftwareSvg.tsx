import React from 'react';

const CustomSoftwareSvg = ({
  selectedItem
}: {
  selectedItem: number | null;
}) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="command">
          <path
            id="Vector"
            d="M16.6494 8.53687H8.6494V16.5369H16.6494V8.53687Z"
            stroke={selectedItem === 1 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M5.64963 22.5368C7.29963 22.5368 8.64963 21.1868 8.64963 19.5368V16.5368H5.64963C3.99963 16.5368 2.64963 17.8868 2.64963 19.5368C2.64963 21.1868 3.99963 22.5368 5.64963 22.5368Z"
            stroke={selectedItem === 1 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M5.64963 8.53687H8.64963V5.53687C8.64963 3.88687 7.29963 2.53687 5.64963 2.53687C3.99963 2.53687 2.64963 3.88687 2.64963 5.53687C2.64963 7.18687 3.99963 8.53687 5.64963 8.53687Z"
            stroke={selectedItem === 1 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M16.6497 8.53687H19.6497C21.2997 8.53687 22.6497 7.18687 22.6497 5.53687C22.6497 3.88687 21.2997 2.53687 19.6497 2.53687C17.9997 2.53687 16.6497 3.88687 16.6497 5.53687V8.53687Z"
            stroke={selectedItem === 1 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_5"
            d="M19.6497 22.5368C21.2997 22.5368 22.6497 21.1868 22.6497 19.5368C22.6497 17.8868 21.2997 16.5368 19.6497 16.5368H16.6497V19.5368C16.6497 21.1868 17.9997 22.5368 19.6497 22.5368Z"
            stroke={selectedItem === 1 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default CustomSoftwareSvg;

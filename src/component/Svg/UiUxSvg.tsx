import React from 'react';

const UiUxSvg = ({ selectedItem }: { selectedItem: number | null }) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="data">
          <path
            id="Vector"
            d="M20.6753 14.5369C21.7799 14.5369 22.6753 13.6414 22.6753 12.5369C22.6753 11.4323 21.7799 10.5369 20.6753 10.5369C19.5707 10.5369 18.6753 11.4323 18.6753 12.5369C18.6753 13.6414 19.5707 14.5369 20.6753 14.5369Z"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M20.6753 6.53687C21.7799 6.53687 22.6753 5.64143 22.6753 4.53687C22.6753 3.4323 21.7799 2.53687 20.6753 2.53687C19.5707 2.53687 18.6753 3.4323 18.6753 4.53687C18.6753 5.64143 19.5707 6.53687 20.6753 6.53687Z"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M20.6753 22.5369C21.7799 22.5369 22.6753 21.6414 22.6753 20.5369C22.6753 19.4323 21.7799 18.5369 20.6753 18.5369C19.5707 18.5369 18.6753 19.4323 18.6753 20.5369C18.6753 21.6414 19.5707 22.5369 20.6753 22.5369Z"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M4.67517 14.5369C5.77974 14.5369 6.67517 13.6414 6.67517 12.5369C6.67517 11.4323 5.77974 10.5369 4.67517 10.5369C3.5706 10.5369 2.67517 11.4323 2.67517 12.5369C2.67517 13.6414 3.5706 14.5369 4.67517 14.5369Z"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_5"
            d="M6.67517 12.5369H18.6752"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_6"
            d="M18.6753 4.53687H14.6753C12.6753 4.53687 11.6753 5.53687 11.6753 7.53687V17.5369C11.6753 19.5369 12.6753 20.5369 14.6753 20.5369H18.6753"
            stroke={selectedItem === 4 ? 'white' : '#2979FF'}
            stroke-width="2.12807"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default UiUxSvg;

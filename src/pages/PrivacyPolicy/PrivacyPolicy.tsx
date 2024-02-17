import React from 'react'
import { policyData } from '../../utils/data'

const PrivacyPolicy = () => {
    return (
      <>
          <h1 className="text-[32px] text-center font-semibold py-16">Privacy Policy</h1>
        <div className="flex justify-center">
          <div className="flex flex-col space-y-8 ss:px-4 md:px-0 ss:w-full md:w-[35%]">
            {policyData.map((item, index) => (
              <div key={index}>
                <h2 className="text-[24px] font-medium pb-4">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default PrivacyPolicy

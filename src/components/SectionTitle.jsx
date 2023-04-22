import React from 'react';

function SectionTitle({title}) {
    return (
        <h2 className='text-2xl font-semibold flex items-center'>
          {title}
           <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[.5px] bg-gray-700 ml-6'></span>
        </h2>
    );
}

export default SectionTitle;
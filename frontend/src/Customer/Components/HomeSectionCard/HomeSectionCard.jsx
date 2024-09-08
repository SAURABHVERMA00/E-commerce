import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem]  mx-3'>
        <div className='h-[13rem]  w-[10rem]'>
            <img className=' object-cover object-top w-full h-full' src="https://d6kigqwjl9u8w.cloudfront.net/catalog/product/cache/784df61d3b5737a7531cd598aa4c9972/z/c/zcl-7060-pista_2_.jpg" alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Cotton Straight kurta</p>
        </div>

    </div>
  )
}

export default HomeSectionCard
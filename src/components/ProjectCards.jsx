import React from 'react'

function ProjectCards({name, img, tags, content}) {
  return ( 
    <div className='bg-white p-4 rounded-md md:drop-shadow-md md:w-1/3 w-full'>
        <div className="img-cont w-full mb-4">
            <img src={img} alt="" className='rounded-md' />
        </div>
        {tags.map(tag=>{
            return(<span className='pr-2 text-sec_grey text-sm'>{tag}</span>)
        })}
        <div className="content mt-4">
        <h1 className='text-lg md:text-xl font-semibold mb-4'>{name}</h1>
        <p className='text-sm text-sec_grey '>{content}</p>
        </div>
        

        <div className="btn-section flex flex-row mt-4">
            <button className='px-4 py-2 bg-cont_blue text-white rounded-md mr-2'>Demo</button>
            <button className='px-4 py-2 text-cont_blue bg-white border-cont_blue rounded-md'>Code</button>
        </div>
    </div>
  )
}

export default ProjectCards
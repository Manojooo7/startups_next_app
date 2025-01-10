import React from 'react'

const page = async({params}) => {

const id = (await params).id

  return (
    <div>
        <h1 className='text-3xl'>This is the detail of startup Id {id}</h1>
    </div>
  )
}

export default page
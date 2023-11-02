import React from 'react'
// import BounceLoader from 'react-spinners/HashLoader'
import { BounceLoader } from 'react-spinners'
import './loading.css'

const Loading = () => {

  return (
    <div className='loader'>
        {/* <HashLoader color="#EF7319" />        */}
        <BounceLoader color="#EF7319" />       
    </div>
  )
}

export default Loading
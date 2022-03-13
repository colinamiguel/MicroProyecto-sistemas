import React from 'react'

export default function Spinner() {
  return (
    <div className='text-center'>
        <div className='spinner-border" style="width: 3rem; height: 3rem; margin-top: 15rem" role="status'>
            <div className="spinner-grow"  role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
  )
}

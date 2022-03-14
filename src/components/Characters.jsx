import React from 'react'

function Characters({characters = []}) {
  return (
    <div className='row'>
        {
            characters.map((item, index)=> (
                <div key={index} className='col'>
                    <div className='card' >
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Characters
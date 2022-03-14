import React from 'react'

function Characters({characters = []}) {
  return (
    <div className='row'>
        {
            characters.map((item, index)=> (
                <div key={index} className='col'>
                    <div className='card' style={{minWidth:"150px"}}>
                        <img src={item.image} alt="" />
                        <div className='card-body' >
                            <h5 className='card-title' >{item.name} </h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default Characters
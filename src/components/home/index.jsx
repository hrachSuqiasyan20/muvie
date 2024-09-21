import React from 'react'

function Home() {
  return (
    <div className=''>
        <div className='back-fon'>
            <div className="marvel">
                <img src="/images/marvel.jpg" alt=""/>
            </div>

            <div className="info-spiderman">
                <div className="cb">
                    <p>CBFC:U/A</p>
                </div>

                <p>Action</p>
                <span>.</span>
                <p>Adventure</p>
                <span></span>
                <p>2h 28m</p>
            </div>

            <div className="buttons-spiderman">
                <button className='btn watch'>
                     <span className="icon">
                          <img src="/svg/play.svg" alt=""/>
                     </span>
                    Watch more
                </button>

                <button className='btn more'>
                     <span className="icon">
                          >
                     </span>
                    Watch more
                </button>

            </div>
        </div>

    </div>
  )
}

export default Home
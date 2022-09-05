import React from 'react'
import Header1 from '../Components/Header1'

const HomePage = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-1 border-end border-3 px-2 vh-100"></div>
            <div className="col-11">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                            <Header1 />
                            <section>
                                <h2>Article of the day</h2>
                            </section>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
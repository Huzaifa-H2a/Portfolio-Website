import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <>
            <Navbar />

            <div className='text-center p-5 m-3'>
                <MDBRow>
                    <MDBCol>
                        <h1 className='text-warning mb-3'>Resume</h1>
                        <p>A highly responsible, hardworking and self-motivated individual looking for a
                            responsible role in a reputable organization.
                            As a beginner, while making a positive
                            contribution, I would like to build my career
                            through a continuous learning process that
                            would help me in achieving greater practical
                            excellence in the IT department.</p><br />
                        <p>"Explore Your Perfect Fit: Choose Your Ideal Developer from the CVs Below!"</p>
                        <br />
                        <br />
                        <Link className="btn btn-warning px-4 mb-4" to="https://docs.google.com/document/d/1rLCDT01fBk0cud7rJBt-SLgT4PKL4TdMRlCmbJvDNI8/edit#heading=h.93clti7vzqqo" role="button" target="_blank" >React Developer</Link>
                        <br />
                        <Link className="btn btn-warning px-4 mb-4" to="https://docs.google.com/document/d/1AjIoJVUNRn5HQnkDh23V9BmZTZm0NTNZkDA8BG4ZJnM/edit#heading=h.93clti7vzqqo" role="button" target="_blank" >Laravel Developer</Link>
                        <br />
                        <Link className="btn btn-warning px-4" to="https://docs.google.com/document/d/1aT8XZSrWrRR9gc5n_JUT_mu9iA9esCBbpfjzwO8mVDA/edit" role="button" target="_blank" >MERN Stack Developer</Link>
                    </MDBCol>
                </MDBRow>
            </div>

            <Footer />

        </>
    )
}

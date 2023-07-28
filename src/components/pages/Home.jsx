import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Skills from '../Skills';
import { MDBCol, MDBRow, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Home() {

    return (
        <>
            <Navbar />
            <div className='bg-dark text-white p-5'>
                <MDBRow className='m-5 p-5'>
                    <MDBCol size='6'>
                        <p>HEY, THIS IS ME</p>
                        <h1 className='display-2 text-warning'><b>Huzaifa Ahmed</b></h1>
                        <p>"Welcome to my world of web development wonders! As a full-stack web developer, I bring ideas to life through elegant code and captivating design. Let's create extraordinary digital experiences together!"</p>
                        <a className="btn btn-warning px-4" href="#about" role="button">DISCOVER ME</a>
                        <Link className="btn btn-outline-warning px-4 ms-4" to="/resume" role="button">HIRE ME</Link>
                    </MDBCol>
                    <MDBCol size='6'>
                        <img src='/images/header.png' alt="logo" height='400px' className='ms-5 px-5' />
                    </MDBCol>
                </MDBRow>
            </div>
            <div className='p-5' id='about'>
                <MDBRow>
                    <h1 className='text-center text-warning mb-3'><b>Profile</b></h1>
                    <p className='text-center'>I knew-it, you want to know about me! so, let's get started</p>
                    <MDBCol size='4' className='mt-3'>
                        <h2 className='text-warning text-center'>About Me</h2><hr class="hr hr-blurry" />
                        <p className='text-center'>Hello there! I'm thrilled to welcome you to my digital space. I'm a passionate and dedicated full stack web developer, I craft immersive and user-friendly web experiences that leave a lasting impression.<br /><br />My journey into the world of web development began with a curiosity that evolved into a deep-seated passion. From front-end wizardry with HTML, CSS, and JavaScript to back-end mastery with Laravel, Node.js, and databases.<br /><br />I tasted the challenges that come my way. Each project I undertake is not just a chance to build an application but also an opportunity to transform ideas into reality. That was short introduction of mine.</p>
                    </MDBCol>
                    <MDBCol size='4'>
                        <img src='/images/about.png' alt="logo" height='600px' className='ms-3 mt-4 px-5 img-fluid rounded-circle' />
                    </MDBCol>
                    <MDBCol size='4' className='mt-3'>
                        <h2 className='text-warning text-center'>Details</h2><hr class="hr hr-blurry" />
                        <p>
                            <MDBIcon icon="home" className="me-3" />
                            Lahore, Pakistan
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            huzaifaahmed851@gmail.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" />0336 8034145
                        </p>
                        <p>
                            <MDBIcon fab icon="linkedin" className="me-3" /> linkedin.com/in/huzaifa-ahmed-566697279
                        </p>
                        <p>
                            <MDBIcon fab icon="github" className="me-3" /> github.com/Huzaifa-H2a
                        </p>
                        <br />
                        <hr />
                        <p className='text-center text-warning'>"Please feel free to contact me, so that we should build something incredible together!"</p>
                    </MDBCol>
                </MDBRow>
            </div>
            <div className='p-5' style={{ backgroundColor: "WhiteSmoke" }} id='services'>
                <MDBRow>
                    <h1 className='text-center text-warning mb-3'><b>What I Do</b></h1>
                    <MDBCol size='2'></MDBCol>
                    <MDBCol size='4' className='mt-3 my-4'>
                        <MDBCard>
                            <MDBCardImage src='/images/Front.png' alt='' height='300px' width='100%' />
                            <MDBCardBody>
                                <MDBCardTitle className='text-center'>Front End Web Developer</MDBCardTitle>
                                <MDBCardText className='text-center'>
                                    As a Front-End Web Developer, I create captivating user interfaces using HTML, CSS, and JavaScript. I ensure seamless integration, responsiveness, and accessibility while staying updated on trends and best practices.                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size='4' className='mt-3 my-4'>
                        <MDBCard>
                            <MDBCardImage src='/images/backend.png' alt='' height='300px' width='100%' />
                            <MDBCardBody>
                                <MDBCardTitle className='text-center'>Back End Web Developer</MDBCardTitle>
                                <MDBCardText className='text-center'>
                                    As a Back-End Web Developer, I build server-side logic and databases using languages like Laravel or Node.js. I ensure secure data handling, collaborate with front-end teams, and optimize performance for seamless user experiences.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size='2'></MDBCol>
                </MDBRow>
            </div>

            <Skills />

            <div id='projects'>
                Projects
            </div>

            <Footer />
        </>
    )
}

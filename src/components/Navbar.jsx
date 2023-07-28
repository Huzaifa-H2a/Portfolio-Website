import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' className='bg-warning'>
            <MDBContainer fluid>
                <MDBCol size='2'>
                    <Link to='/'><img src='/images/HA logo.png' alt="logo" height='100' className='ms-5' /></Link>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                </MDBCol>
                <MDBCollapse show='showNavColorSecond' navbar id='navbarColor02'>
                    <MDBCol size='2'></MDBCol>
                    <MDBCol size='4' className='ms-5 me-5 text-center'>
                        <MDBNavbarNav className='mb-2 mb-lg-0 ms-4'>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='#about'><b>
                                    About</b>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='#services'><b>Services</b></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='#skills'><b>Skills</b></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='#projects'><b>Projects</b></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='#about'><b>Contact</b></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-white' href='/resume'><b>Resume</b></MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCol>
                    <MDBCol size='2'></MDBCol>
                    <MDBCol size='2' className='text-center ms-5'>
                        <Link className='text-white' to='/login'><MDBIcon icon="chalkboard-user" className="me-1" /><b>Admin Portal</b></Link>
                    </MDBCol>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

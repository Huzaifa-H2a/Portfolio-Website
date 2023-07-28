import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-warning text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <div>
                    <MDBRow className='justify-content-center my-3'>
                        Please feel free to reach out me directly on social networks
                    </MDBRow>
                    <MDBRow>
                        <section className='mb-4'>
                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>
                            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                                <MDBIcon fab icon='instagram' />
                            </MDBBtn>
                        </section>
                    </MDBRow>
                </div>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    )
}

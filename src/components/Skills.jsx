import React, {useState} from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCol,
    MDBRow } from 'mdb-react-ui-kit';

export default function Skills() {

    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

  return (
    <div className='p-5' id='skills'>
                <MDBRow>
                    <h1 className='text-center text-warning mb-3'><b>Skills</b></h1>
                    <MDBCol size="2"></MDBCol>
                    <MDBCol size="8">
                        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                    <b>Technical Skills</b>
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                    <b>Soft Skills</b>
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                        <MDBTabsContent>
                            <MDBTabsPane show={justifyActive === 'tab1'}>
                                <MDBRow className='mb-4'>
                                    <MDBCol size="4" className='me-5'>
                                        <label className='text-dark'><b>React.js</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Node.js</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Express.js</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>PHP</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Laravel</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="4" className='ms-5 ps-5'>
                                        <label className='text-dark'><b>MySQl</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>MongoDB</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>JavaScript</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>HTML</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>CSS</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabsPane>
                            <MDBTabsPane show={justifyActive === 'tab2'}>
                                <MDBRow>
                                    <MDBCol size="4" className='me-5'>
                                        <label className='text-dark'><b>Canva</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Microsoft Office</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Fluent in English</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Communication Skill</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Interpersonal Skills</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="4" className='ms-5 ps-5'>
                                        <label className='text-dark'><b>Result Oriented</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Problem Solving skills</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <label className='text-dark'><b>Team Work</b></label>
                                        <div class="progress mb-2" style={{ height: "15px", width: "400px", backgroundColor: 'blueGoldenRod' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </MDBCol>
                    <MDBCol size="2"></MDBCol>
                </MDBRow>
            </div>
  )
}
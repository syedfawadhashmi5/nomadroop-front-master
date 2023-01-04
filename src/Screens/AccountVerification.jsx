import React from 'react'
import { Alert , Button} from '@mui/material'
import docimg from '../images/doc.jpg'
// import ProfileLayout from '../Layout/ProfileLayout';
// import Button from 'react-bootstrap/Button'

const AccountVerification = () => {

  return (
    <>

        <div className="title-div">
          <h2 className="profile-title"> Account Verification </h2>
        </div>

        <div className='border bg-fff'>
          <div className="row p-20">

            <div className='col-md-12 '>
              <div className='box-ctr'>
                <div className='first-column'>
                  <p>  Phone number verification<br></br>
                    You will receive an SMS with a numerical code.<br></br> </p>
                </div>

                <div className='action'>
                  <div className='verified-action'>
                      Verified 
                  </div>
                </div>

              </div>
            </div>

            <div className='col-md-12 '>
              <div className='box-ctr'>
                <div className='first-column'>
                    <p> WORK (+351) 1111111</p>
                    <div>
                      <Button className='ver-action'>Verify this number</Button>
                    </div>
                </div>

                <div className='action'>
                  <div className='unverified-action'>
                      UnVerified 
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 '>
              <div className='box-ctr'>
                <div className='first-column'>
                    <p>Email verification</p>
                    <div>
                      <Button className='ver-action'>Confirm Email</Button>
                    </div>
                </div>

                <div className='action'>
                  <div className='unverified-action'>
                      UnVerified 
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-12 '>
              <div className='box-ctr' style={{ border: 'none'}}>
                <div className='first-column'>
                    <p>Upload a copy of your ID ID card, passport or driver's license</p>
                    <div>
                      <Button className='ver-action'>Confirm Email</Button>
                    </div>

                    <div>
                      <img src={docimg} alt=""/>
                    </div>

                    <div className='mt-5'>
                      <Button
                          variant="contained"
                          onClick={{}}
                          className="round-border-button mt-2 w-300"
                        >
                        Upload Image
                      </Button>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>



        <form>
          <div className='account-verfication' style={{ display: 'none'}}>
            <div className='border bg-fff'>
              <div className="row px-0 mx-0">
                <div className="col-12">
                  <div className='p-number d-flex'>
                    <div>
                    Phone number verification<br></br>
                    You will receive an SMS with a numerical code.<br></br>
                    <br></br>
                    WORK (+351) 1111111<br></br>
                    <Button>Verify this number</Button>
                    <br></br>
                    <br></br>
                    </div>
                    <div>
                    <Alert className='mb-2' severity="success"><strong>VERIFIED</strong></Alert>
                    </div>
                  </div>
                  <div className='e-mail d-flex'>
                    <div>
                    Email verification<br></br>
                    <Button>Confirm email</Button>
                    <br></br>
                    <div className='d-none'>Email sent! Please check your inbox</div>
                    <br></br>
                    <br></br>
                    Upload a copy of your ID ID card, passport or driver's license<br></br>
                    <img src={docimg} alt=""/>
                    <div className='mt-2'>
                      <Button variant="contained" component="label">
                        Upload Image
                        <input hidden accept="image/*" multiple type="file"/>
                      </Button>
                    </div>
                    </div>
                    <div>
                    <Alert className='mb-2' severity="warning"><strong>UNVERIFIED</strong></Alert>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      </>
  )
}

export default AccountVerification
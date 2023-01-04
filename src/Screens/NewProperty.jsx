import {
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";


import React, { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import { Button, FormGroup } from "reactstrap";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Form from 'react-bootstrap/Form';


import { useEffect, useContext } from "react";
import Axios from "axios";

import StateContext from "../StateContext";

countries.registerLocale(enLocale);
const countryObj = countries.getNames("en", { select: "official" });
const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});




const One = (props) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

  };

  const validate = () => {
    
  };

  return (
    <Form >
      <div>
          <div className="row  mt-2">
          
            <div className="col-md-12 mt-2">
              <span style={{ color: "red" }}>{error}</span>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>*Title (mandatory) </Form.Label>
                  <Form.Control type="text" name="listing_name" placeholder="Type Title here" onChange={onInputChanged} required/>
                </Form.Group>
              </div>
            </div>

          <br></br>
          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label>*Category (mandatory)</Form.Label>
              <Form.Select required>
                <option value={""}></option>
                <option value={"none"}>None</option>
                <option value={"Apartment"}>Apartment</option>
                <option value={"B & B"}>B & B</option>
                <option value={"Cabin"}>Cabin</option>
                <option value={"Condos"}>Condos</option>
                <option value={"Dorm"}>Dorm</option>
                <option value={"Host Family"}>Host Family</option>
                <option value={"House"}>House</option>
                <option value={"Studio"}>Studio</option>
                <option value={"Villa"}>Villa</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-md-4">

            <Form.Group className="mb-3">
              <Form.Label> *Listed In/Room Type (mandatory)</Form.Label>
              <Form.Select required>
                <option value={"none"}>None</option>
                <option value={"Entire home"}>Entire home</option>
                <option value={"Private room"}>Private room</option>
                <option value={"Shared room"}>Shared room</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label> *Guest No (mandatory)</Form.Label>
              <Form.Select required>
                <option></option>
                <option value={"0"}>0</option>
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                  <option value={"5"}>5</option>
                  <option value={"6"}>6</option>
                  <option value={"7"}>7</option>
                  <option value={"8"}>8</option>
                  <option value={"9"}>9</option>
                  <option value={"10"}>10</option>
                  <option value={"11"}>11</option>
                  <option value={"12"}>12</option>
                  <option value={"13"}>13</option>
                  <option value={"14"}>14</option>
              </Form.Select>
            </Form.Group>
          </div>

          <br></br>

          <div className="col-md-4">
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>*City (mandatory) </Form.Label>
                <Form.Control type="text" name="city" placeholder="Type City here"  onChange={onInputChanged} required/>
              </Form.Group>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type the District/Area name </Form.Label>
                <Form.Control type="text" name="title" placeholder="Type the District/Area name here"  onChange={onInputChanged}/>
              </Form.Group>
            </div>
          </div>

          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label> Country </Form.Label>
              <Form.Select>
                <option></option>
                {!!countryArr?.length &&
                  countryArr.map(({ label, value }) => (
                    <option value={value}>{label}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </div>
          <br></br>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Describe your Property</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>

          <br></br>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Describe your Property</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Describe your Property</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
          <br />

          <div className="col-md-12">

            <Form.Group className="mb-3">
              <Form.Label> Cancellation Policy </Form.Label>
              <Form.Select>
                <option> </option>
                <option value={"Strict"}>Strict</option>
                <option value={"Moderate"}>Moderate</option>
                <option value={"Flexible"}>Flexible</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-md-12">
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" checked="checked" label=" Allow instant booking? If checked, you will not have the option to reject a booking request." />
            </Form.Group>
          </div>
        
          </div>
        <br />
      </div>
    </Form>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");
  const [inputList, setInputList] = useState([{ exName: "", exValue: "", exsinglefee: "" }]);
  
// handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

// handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { exName: "", exValue: "", exsinglefee: "" }]);
  };

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  const validate2 = () => {
      setError("");
      props.nextStep();
      props.userCallback(info2);
  };
  

  return (
    <div className="row">
      <span style={{ color: "red" }}>{error}</span>
      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Price per month in USD (Monthly price, only numbers)</Form.Label>
            <Form.Control type="text" name="title" placeholder="320"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Taxes in %(taxes are considered included in the monthly price) </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cleaning Fee</Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> City Fee per month: USD (only numbers) </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Minimum months of booking (only numbers) </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Security Deposit in USD  - <span className="font-8">  will be refunded if no complaints are received from the owner </span> </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Early Bird Discount - in  - <span className=""> % from the price per night </span> </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>No of days in advance </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Extra Price per guest per month USD </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
        </Form.Group>
      </div>

      <div className="col-md-6">
        <FormGroup>
          <Form.Label> </Form.Label>
          <FormControlLabel control={<Checkbox  />} label="Allow guests above capacity?" />
        </FormGroup>
      </div>


      <div className="">
        <Form.Label> Extra Options</Form.Label> 
      </div>

      <div className="extra-option-box">
        <p> </p>
        {inputList.map((x, i) => {
                return (
                  <div className="box">
                    <div className="row m-0">
                      <div className="col-md-4 h-20">
                        <TextField className='w-100 h-20' name="exName" variant="outlined" placeholder="Name" value={x.exName} onChange={e => handleInputChange(e, i)} />
                      </div>

                      <div className="col-md-4 h-20">
                        <TextField className='w-100' name="exValue" variant="outlined" placeholder="Value" value={x.exValue} onChange={e => handleInputChange(e, i)} />
                      </div>

                      <div className="col-md-4 h-20">
                        <TextField className='w-100' name="exsinglefee" variant="outlined" placeholder="Single Fee" value={x.exsinglefee} onChange={e => handleInputChange(e, i)} />
                      </div>

                      <div className="col-md-12">
                        <div className="btn-box">
                          {inputList.length !== 1 && <button
                            className="mr10"
                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                          {inputList.length - 1 === i && <button className="add-extra" onClick={handleAddClick}>Add Option</button>}
                        </div>
                      </div>
                    
                    </div>
                  </div>
                );
              })}
        </div>


      <div class="row m-0">

        <div className="col-md-12 mb-5">
            <div>
              <h2 className="profile-inner-title p-15">Listing Media </h2>
            </div>
        </div>

        <div class="col-6 col-md-6 ">

          <Form.Group className="mb-3">
            <Form.Label> Video from </Form.Label>
            <Form.Select>
              <option> Vimeo </option>
              <option> Youtube </option>
            </Form.Select>
          </Form.Group>
              
          </div>

          <div class="col-6 col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>  </Form.Label>
                <Form.Control type="text" name="title" placeholder="Video ID"  onChange={onInputChanged}/>
            </Form.Group>
          </div>
      </div>
      <br />
    </div>
  );
};

const Three = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };


  return (
    <> 
    <div className="row">
      <div className="col-md-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Size in m2 </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
          </Form.Group>
      </div>

      <div className="col-md-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Rooms </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
          </Form.Group>
      </div>
      <div className="col-md-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>BedRooms </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
          </Form.Group>
      </div>

      <div className="col-md-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Bathrooms </Form.Label>
            <Form.Control type="text" name="title" placeholder="0"  onChange={onInputChanged}/>
          </Form.Group>
      </div>
    </div>

    <div className="row">
        <div className="col-md-12 mt-5 mb-3">
          <h2 className="profile-inner-title">Listing Location</h2>
        </div>

        <div className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Address </Form.Label>
            <Form.Control type="text" name="title" placeholder="Type Address here"  onChange={onInputChanged}/>
          </Form.Group>
        </div>

        <div className="col-md-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> ZipCode</Form.Label>
            <Form.Control type="text" name="title" placeholder="Type ZipCode here"  onChange={onInputChanged}/>
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> State </Form.Label>
            <Form.Control type="text" name="title" placeholder="Type State here"  onChange={onInputChanged}/>
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Country </Form.Label>
            <Form.Control type="text" name="title" placeholder="Type Address here"  onChange={onInputChanged}/>
          </Form.Group>
        </div>

    </div>

    </>
  );
};

const Four = (props) => {
  const appState = useContext(StateContext);
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");
  const [amenties, setAmenties] = useState([]);


  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  useEffect(() => {
    const getAmenties = async () => {
      try {
        const {data} = await Axios.get(`${appState.apiEndPoint}/api/amenities`, {
          headers: {
            Authorization: `Bearer ${appState.token}`
          }
        })
        
        if(data.success) {
        
          setAmenties(data.amenties)
          console.log("UPDATED", data.amenties)
        }
      }catch(err) {
        console.log(err)
      }
    }
    if(appState.loggedIn) {
      getAmenties()
    }
  },[])


  return (
    <>
      <div className="row">

        <div className="row mt-3">
          {amenties && amenties.map((item, ind) => 
            <div className="col-md-2" key={ind} style={{textTransform: 'capitalize'}}>
                <FormGroup>
                  <Form.Label> </Form.Label>
                  <FormControlLabel control={<Checkbox  />} label={item.name} />
                </FormGroup>
            </div>
          )}
        </div>

        <div className="col-md-12">
          <div className="col-md-12 mt-5 mb-3">
            <h2 className="profile-inner-title">Features</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-5 mb-3">
            <h2 className="profile-inner-title"> Availablity </h2>
          </div>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Start Date </Form.Label>
              <Form.Control type="text" name="title" placeholder="Type Start Date here"  onChange={onInputChanged}/>
            </Form.Group>
          </div>

          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Start Date </Form.Label>
              <Form.Control type="text" name="title" placeholder="Type Start Date here"  onChange={onInputChanged}/>
            </Form.Group>
          </div>
        </div>
      </div>
    </>
   
  )
}


const Sample = () => {
  const appState = useContext(StateContext);
  const navigate = useNavigate();

  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Description', title: "Add Detail Below",isDone: true, component: One },
    { key: 'secondStep', label: 'Price & Images', title: "Property Price", isDone: false, component: Two },
    { key: 'thirdStep', label: 'Details & Location', title: "Listing Details", isDone: false, component: Three },
    { key: 'finalStep', label: 'Ameneties & Calendar', title: "Ameneties", isDone: false, component: Four },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({ listing_name: '' });


  const saveProperty = async (property) => {
    const { data } = await Axios.post(
      `${appState.apiEndPoint}/api/rooms`,
      {
        token: appState.token,
        room: property
      },
      {
        headers: {
          Authorization: `Bearer ${appState.token}`,
        },
      }
    );

    if(data.success){
      navigate('/profile/my-properties')
    } else {
      
    }
  }

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      var hash = {
          listing_name: "System Property",
          home_type: 'House', 
          room_type: 'Flat', 
          no_of_guest: 12, 
          city: 'Faisalabad', 
          price: 400
      }
      
      saveProperty(hash)
      
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveIndex(index + 1);
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveIndex(index - 1);
    setActiveStep(steps[index - 1]);
  }


  return (
    <div>
      <div className="content-add-new-property">
        <div className="container">
          
          <h1 style={{color: "#000"}} className="mb-5"><strong>Add New Property</strong></h1>
          
            <div className="row mx-0">
              <div className="col-12 px-0">
                <div className="row m-0">
                  {steps.map((step, i) => {
                    return <div key={i} className={`col-md-${12/steps.length} my-1`}>
                        <div className={`wiz-steps ${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                          <h4 className="m-0"><b>Step {i + 1}</b></h4>
                          <p className="m-0">{step.label}</p>
                        </div>
                    </div>
                  })}
                </div>
                <div className="step-component py-4">
                  <div className="p-4 border">
                      <h4 className="profile-inner-title">
                        {activeStep.title}
                      </h4>
                      {activeIndex === 0 ? <One formData={formData} setFormData={setFormData}/> : activeIndex === 1 ? <Two /> : activeIndex === 2 ? <Three /> : <Four />}
                </div>
              </div>

              <div className="btn-component">
                <Button type="button" value="Back" onClick={handleBack} style={{ display: 'none'}} disabled={steps[0].key === activeStep.key}>Back</Button>
                <Button type="button" className="btn-50" onClick={handleNext}>{steps[steps.length - 1].key !== activeStep.key ? 'Continue' : 'Save'}</Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;

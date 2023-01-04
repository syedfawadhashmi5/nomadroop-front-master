import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Form from 'react-bootstrap/Form';


import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useEffect, useContext } from "react";
import StateContext from "../StateContext";
import Axios from "axios";
import MyAlert from "../Components/MyAlert";
import DispatchContext from "../DispatchContext";
//import { display } from "@mui/system";
// import { Label } from "reactstrap";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyProfile = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [linkedInURL, setLinkedInURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [cruniversity, setCRUniversity] = useState("");
  const [abroad_university, setAbroadUniversity] = useState("");
  const [edMajor, setEDMajor] = useState("");
  const [language, setLanguage] = useState("");
  const [timezonez, settimezone] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState({});
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
  });
  const vdSchema = Yup.object().shape({
    aborad_university: Yup.string().required("Abroad University is required"),
    education_major: Yup.string().required("Education Major is required"),
    current_university: Yup.string().required("Current University is required"),
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appState.user.role === "Host" ? validationSchema : vdSchema),
    defaultValues: {
      fname: fname,
    },
  });

  const handleDrawer = () => {
    setOpen(!open);
  };

  const setAlertOpen = (val) => {
    setAlert({ ...alert, open: val });
  };

  useEffect(() => {
    setValue(
      "fname",
      appState.user.first_name !== null ? appState.user.first_name : ""
    );
    setValue(
      "lname",
      appState.user.last_name !== null ? appState.user.last_name : ""
    );
    setValue("email", appState.user.email !== null ? appState.user.email : "");
    setValue("phone", appState.user.phone_number !== null ? appState.user.phone_number : "");
    setValue("country",appState.user.country !== null ? appState.user.country : "");
    setValue(
      "language",
      appState.user.language !== null ? appState.user.language : ""
    );
    setValue(
      "linkedin",
      appState.user.linkedin !== null ? appState.user.linkedin : ""
    );
    setValue(
      "twitter",
      appState.user.twitter !== null ? appState.user.twitter : ""
    );
    // setValue('about_me', appState.user.about_me !== null ? appState.user.about_me : "");
    if (appState.user.role !== "Host") {
      setValue(
        "aborad_university",
        appState.user.abroad_university !== null
          ? appState.user.abroad_university
          : ""
      );
      setValue(
        "current_university",
        appState.user.current_university !== null
          ? appState.user.current_university
          : ""
      );
      setValue(
        "education_major",
        appState.user.education_major !== null
          ? appState.user.education_major
          : ""
      );
    }
  }, [appState.user]);
 

  const onSubmit = async (submitData) => {

    let user = {
      first_name: submitData.fname,
      last_name: submitData.lname,
      phone_number: submitData.phone,
      username: appState.username,
      country: submitData.country,
      language: "en",
      timezone: "ATC",
      linkedin: submitData.linkedInURL,
      twitter: submitData.twitter
    }

    if(appState.user.role === "Tenant") {
      user = {
        ...user,
        current_university: submitData.current_university,
        aborad_unversity: submitData.aborad_university,
        education_major: submitData.education_major,
      }
    }
    try {
      const { data } = await Axios.put(
        `${appState.apiEndPoint}/api/profiles/${appState.user.id}`,
        {
          token: appState.token,
          user: user
        },
        {
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
      );

      if(image !== null) {
        const dataImage = await Axios.post(
          `${appState.apiEndPoint}/api/user/image`,
          {
            image: {
              name: image.name,
              type: image.type,
              base64: image.base,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${appState.token}`,
            },
          }
          );
          console.log(dataImage)
      }
      if (data.success) {
        setAlert({
          open: true,
          message: "Updated Succesfully",
          type: "success",
        });
      } else {
        setAlert({
          open: true,
          message: data.error,
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
      setAlert({
        open: true,
        message: "500 Internal Server Error",
        type: "error",
      });
    }
  };

  const handleImage = (e) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
    let reader = new FileReader();
    reader.onloadend = function () {
      let arr = reader.result.split(",");
      setImage({
        name: e.target.files[0].name,
        type: arr[0],
        base: arr[1],
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const {data} = await Axios.get(`${appState.apiEndPoint}/api/profiles?user_id=${appState.user.id}`, {
          headers: {
            Authorization: `Bearer ${appState.token}`
          }
        })
        
        if(data.success) {
          appDispatch({type: "UPDATE_USER", payload: data.user})
          setLoading(false)
          console.log("UPDATED", data.user)
        }
      }catch(err) {
        console.log(err)
      }
    }
    if(appState.loggedIn) {
      getUserData()
    }
  },[])

  return (
    loading ? <h1  className="profile-inner-title"> Loading..</h1> : (
        <>
          <MyAlert
            open={alert.open}
            type={alert.type}
            message={alert.message}
            setOpen={setAlertOpen}
          />

          <div className="title-div">
            <h2 className="profile-title">Your details</h2>
          </div>

          <div className="profile-wrapper cnt-wrapper">

            <div>
              <h2 className="profile-inner-title p-15">Your details</h2>
            </div>

          
            <form>
              <div className="p-15">
                <div className="">

                  <div className="row px-0 mx-0 align-items-start">
                    <div className="col-md-5 ptb-15 lft-zero">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*First Name </Form.Label>
                            <Form.Control type="text" placeholder="Type First Name" />
                          </Form.Group>
                        </div>

                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*Email </Form.Label>
                            <Form.Control type="text" placeholder="Type First Name" />
                          </Form.Group>
                        </div>

                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*Country </Form.Label>
                            <Form.Control type="text" placeholder="Type First Name" />
                          </Form.Group>
                        </div>

                    </div>

                    <div className="col-md-5 ptb-15">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*Last Name </Form.Label>
                            <Form.Control type="text" placeholder="Type Last Name" />
                          </Form.Group>
                        </div>
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*Mobile </Form.Label>
                            <Form.Control type="text" placeholder="Type First Name" />
                          </Form.Group>
                        </div>
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>*Profession </Form.Label>
                            <Form.Control type="text" placeholder="Type First Name" />
                          </Form.Group>
                        </div>
                    </div>

                    <div className="col-md-2 ptb-15">
                      <div className="upper-img">
                        <img src={imageURL} alt="" className="profile-img" />
                      </div>
                    </div>

                    <div className="col-md-12 lft-zero">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About Me</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div className="row px-0 mx-0 align-items-start mt-5" >
                    <div className="col-md-12 ptb-15 lft-zero">
                      <h2 className="profile-inner-title p-15">Social Media Links</h2>
                    </div>

                    <div className="col-md-6 ptb-15 lft-zero">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Twitter Url </Form.Label>
                            <Form.Control type="text" placeholder="Type Twitter URL" />
                          </Form.Group>
                        </div>
                    </div>

                    <div className="col-md-6 ptb-15">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn Url </Form.Label>
                            <Form.Control type="text" placeholder="Type LinkedIn Url" />
                          </Form.Group>
                        </div>
                    </div>
                  </div>

                  <div className="row px-0 mx-0 align-items-start mt-5" >
                    <div className="col-md-12 lft-zero">
                      <h2 className="profile-inner-title p-15"> Language and TimeZone</h2>
                    </div>
                    <div className="col-md-6 ptb-15 lft-zero">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Twitter Url </Form.Label>
                            <Form.Control type="text" placeholder="Type Twitter URL" />
                          </Form.Group>
                        </div>
                    </div>

                    <div className="col-md-6 ptb-15">
                        <div>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn Url </Form.Label>
                            <Form.Control type="text" placeholder="Type LinkedIn Url" />
                          </Form.Group>
                        </div>
                    </div>
                  </div>

                  <div className="flx-row" >
                    <div className="pt-0 left-zero">
                      <Button
                          variant="contained"
                          onClick={handleSubmit(onSubmit)}
                          className="round-border-button mt-2"
                        >
                        Save user Profile
                      </Button>
                    </div>

                    <div className="pt-0 left-zero ml-3" style={{ marginLeft: '12px'}}>
                      <Button
                          variant="contained"
                          onClick={handleSubmit(onSubmit)}
                          className="round-border-button mt-2 green-clr"
                        >
                        Change Password
                      </Button>
                    </div>
                  </div> 

                  <div className="row px-0 mx-0 align-items-start mt-5" >
                    <div className="col-md-12 lft-zero ptb-15">
                      <h2 className="profile-inner-title p-15"> Delete Account</h2>
                    </div>
                    <div className="col-md-12 ptb-15 lft-zero">
                       <p> Receive booking requests by SMS on your verified phone number. </p>
                    </div>

                    <div className="col-md-12 lft-zero">
                      <div className="pt-0 left-zero">
                        <Button
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            className="round-border-button mt-2 danger"
                          >
                         Delete Account 
                        </Button>
                      </div>
                    </div>


                  </div>


                   


                  <div className="col-md-8" style={{display: 'none'}}>
                    
                    <div>
                      <Controller 
                        name="lname"
                        control={control}
                        render={({ field }) => (
                          <TextField
                          id="last-name"
                          className="w-100"
                          label="Last Name"
                          variant="standard"
                          error={errors.lname}
                          helperText={errors.lname?.message}
                          {...field}
                        />
                        )}
                      />
                      
                    </div>
                    <div>
                      <Controller control={control}name="email" render={({ field }) => (
                      <TextField
                        type="email"
                        error={errors.email}
                        helperText={errors.email?.message}
                        className="w-100"
                        id="email"
                        label="Email"
                        variant="standard"
                        {...field}
                      />
                          
                        )}
                      />

                      {/* {error.email ?? <p className="error">{error.email}</p>} */}
                    </div>
                    <div className="row px-0 mx-0 align-items-center">
                      <div className="col-md-6 px-1">
                        

                        <TextField
                          type="password"
                          disabled
                          className="w-100"
                          id="password"
                          label="Password"
                          variant="standard"
                          
                        />
                        
                      </div>
                      <div className="col-md-6 px-1">
                        <Button variant="text">Change Password</Button>
                      </div>
                    </div>
                    <div className="col-md-6 px-1">
                      <Controller
                        control={control}
                        name="phone"
                        render={({ field }) => (
                      <TextField
                        type="number"
                        error={errors.phone}
                        helperText={errors.phone?.message}
                        className="w-100"
                        id="mobile"
                        label="*Mobile"
                        variant="standard"
                        {...field}
                      />
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 text-center " style={{display: 'none'}}>
                    <img src={imageURL} width={100} height={100} alt="" />
                    <div className="mt-2">
                      <Button
                        variant="contained"
                        className="uploadButton"
                        component="label"
                      >
                        Upload Image
                        <input
                          hidden
                          accept="image/*"
                          onChange={handleImage}
                          type="file"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="row m-0" style={{display: 'none'}}>
                  <div className="col-md-7 ps-0">
                <h2>Social Media Link</h2>
                <div className="border p-5 bg-gray">
                  <div className="row px-0 mx-0">
                    {appState.user.role === "Tenant" && (
                      <>
                        <div>
                      <Controller
                        control={control}
                        name="current_university"
                        render={({ field }) => (
                      <TextField
                        id="uni"
                        error={errors.current_university}
                        helperText={errors.current_university?.message}
                        className="w-100"
                        label="Current University"
                        variant="standard"
                          {...field}
                      />
                        )}
                      />
                    </div>
                    <div>
                      <Controller
                        control={control}
                        name="aborad_university"
                        render={({ field }) => (
                      <TextField
                        id="uni2"
                        error={errors.aborad_university}
                        helperText={errors.aborad_university?.message}
                        className="w-100"
                        label="Abroad University"
                        variant="standard"
                        {...field}

                      />
                        )}
                      />
                    </div>
                      </>
                      ) }
                    
                    <div>
                      <Controller
                        control={control}
                        name="country"
                        render={({ field }) => (
                      <TextField
                        id="country"
                        error={errors.country}
                        helperText={errors.country?.message}
                        className="w-100"
                        label="Country"
                        variant="standard"
                        {...field}
                      />
                        )}
                      />
                    </div>
                    {appState.user.role === "Tenant" && (
                      <div>
                      <Controller
                        control={control}
                        name="education_major"
                        render={({ field }) => (
                      <TextField
                        id="educationMajor"
                        className="w-100"
                        error={errors.education_major}
                        helperText={errors.education_major?.message}
                        label="Education Major"
                        variant="standard"
                        {...field}
                      />
                        )}
                      />
                    </div>
                    )  
                    }
                    
                    <div>
                      <Controller
                        control={control}
                        name="twitter"
                        render={({ field }) => ( 

                      <TextField
                        type="text"
                        className="w-100"
                        id="Twitter"
                        label="Twitter Url"
                        variant="standard"
                        {...field}
                      />
                        )}
                      />
                    </div>
                    <div>
                      <Controller
                        control={control}
                        name="linkedin"
                        render={({ field }) => (

                      <TextField
                        type="text"
                        className="w-100"
                        id="linkedIN"
                        label="LinkedIn Url"
                        variant="standard"
                        {...field}
                      />
                        )}
                      />

                    </div>
                    {/* <div className='col-md-6 px-1'>
                        <TextField type="number" className='w-100' id="mobile" label="*Mobile (*Add the country code format Ex: +1 232 3322" variant="standard" />
                        </div> */}
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleSubmit(onSubmit)}
                        className="round-border-button mt-2"
                      >
                        Save user Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ps-0">
                <h2>Language and time zone</h2>
                <div className="border p-5 bg-gray">
                  <div className="row px-0 mx-0">
                    <div className="col-12">
                      <FormControl fullWidth>
                        <InputLabel id="language">English</InputLabel>
                        <Select
                          labelId="language"
                          id="language"
                          value={language}
                          label="language"
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <MenuItem value={"en"}>English</MenuItem>
                          <MenuItem value={"ar"}>Arabic</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl fullWidth>
                        <InputLabel id="timezone">Time Zone</InputLabel>
                        <Select
                          labelId="timezone"
                          id="timezonez"
                          value={timezonez}
                          label="timezone"
                          onChange={(e) => settimezone(e.target.value)}
                        >
                          <MenuItem value={"utc"}>UTC</MenuItem>
                          <MenuItem value={"gtm"}>GTM</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            </form>

            {/* <form>
            
              <div>
                <h2>Notifications</h2>
                <div className="border w-80 p-5 bg-gray">
                  <div className="row px-0 mx-0">
                    <div className="col-12">
                      <FormGroup>
                        <p>
                          <b>SMS Notifications</b>
                        </p>
                        <p className="fontsmall">
                          Receive booking requests by SMS on your verified phone
                          number.
                        </p>
                        <Switch
                          checked={checked1}
                          onChange={() => setChecked1(!checked1)}
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <p>
                          <b>I want ot receive move-in reminders via email</b>
                        </p>
                        <Switch
                          checked={checked2}
                          onChange={() => setChecked2(!checked2)}
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className="round-border-button mt-3"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form> */}

            {/* <form>
              <div>
                <h2>Promotional communications</h2>
                <div className="border w-80 p-5 bg-gray">
                  <div className="row px-0 mx-0">
                    <div className="col-12">
                      <FormGroup>
                        <p>
                          <b>Email</b>
                        </p>
                        <Switch
                          checked={checked3}
                          onChange={() => setChecked3(!checked3)}
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <p>
                          <b>SMS</b>
                        </p>
                        <Switch
                          checked={checked4}
                          onChange={() => setChecked4(!checked4)}
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <FormGroup>
                        <p>
                          <b>Phone Call</b>
                        </p>
                        <Switch
                          checked={checked5}
                          onChange={() => setChecked5(!checked5)}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
            </form> */}
            <form style={{display: 'none'}}>
              <div>
                <h2>Delete account</h2>
                <div className="border w-80 p-5 bg-gray">
                  <div className="row px-0 mx-0">
                    <div className="col-12">
                      <p className="fontsmall">
                        Receive booking requests by SMS on your verified phone
                        number.
                      </p>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className="round-border-button mt-3"
                      >
                        Delete account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      )
    );
};

export default MyProfile;
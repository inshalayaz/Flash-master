import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import inbox from "../../../../assests/Images/inbox.png";
import img1 from "../../../../assests/Images/social1.png";
import img2 from "../../../../assests/Images/social2.png";
import img3 from "../../../../assests/Images/social3.png";
import img4 from "../../../../assests/Images/social4.png";
import img5 from "../../../../assests/Images/social5.png";
import img6 from "../../../../assests/Images/social6.png";
import img7 from "../../../../assests/Images/social7.png";
import img8 from "../../../../assests/Images/social8.png";
import img9 from "../../../../assests/Images/social9.png";

import contactsectionicons from "../../../../assests/Images/contact-section-icons.png";
import contactnumber from "../../../../assests/Images/contactnumber.png";
import contactemail from "../../../../assests/Images/mails.png";
import sendmessagebutton from "../../../../assests/Images/sendmessagebutton.png";

import "./index.css";
// import MobileDrawer from "../MobileDrawer";

const pics = [
  {
    img: img1,
    link: "https://twitter.com/Flash_Techno_Of",
  },
  {
    img: img2,
    link: "https://t.me/flashtokenenglish",
  },
  {
    img: img3,
    link: "https://www.youtube.com/channel/UCbNApPsnWrYixnri4hwUUyA",
  },
  {
    img: img4,
    link: "https://www.instagram.com/flash_token_off/",
  },
  {
    img: img5,
    link: "https://www.facebook.com/profile.php?id=100076643679062",
  },
  {
    img: img6,
    link: "https://www.linkedin.com/company/flash-technologies-off/",
  },
  {
    img: img7,
    link: "https://github.com/FlashTechnologiesOff",
  },
  {
    img: img8,
    link: "https://flash-technologies.gitbook.io/docs/overall-documents/flash-technologies",
  },
  {
    img: img9,
    link: "https://linktr.ee/FlashTechnologies",
  },
];

const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        sx={{
          position: "relative",
          color: "white",
          maxWidth: "100%",
          width: { lg: "1400px", xs: "100%" },
          margin: "0 auto",
          padding: { lg: "30px 20px", xs: "30px 30px" },
          transform: { lg: "scale(0.8)", xs: "scale(none)" },
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    mt: "3px",
                    color: "#FBBF04",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: { lg: "16px", xs: "12px" },
                    lineHeight: "140%",
                  }}
                >
                  CONTACT
                </Typography>
                <Typography
                  sx={{
                    mt: "px",
                    color: "#ffff",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: { lg: "50px", xs: "26px" },
                    lineHeight: "140%",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: { lg: "18px", xs: "12px" },
                    fontWeight: "500",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    paddingRight: { lg: "60px", xs: "60px" },
                  }}
                >
                  Whether you have a question about one of our services or want
                  to get involved in our mission, we are ready to help.
                </Typography>
                <Box>
                  <br />
                  <br />
                  <Grid
                    item
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  ></Grid>
                  <Grid item xs={12} md={12}>
                    <Box className="contact-info">
                      <Box>
                        <a
                          href="tel:+33756839020"
                          style={{ textDecoration: "none" }}
                        >
                          <img src={contactnumber} />
                        </a>
                      </Box>
                      {/* <br /> */}
                      <Box mt="23px">
                        <div style={{display:'flex', alignItems:'center'}}>
                        <a
                          href="mailto:contact@flash-technologies.org"
                          style={{ textDecoration: "none" ,display:'flex', alignItems:'center'}}
                        >
                          <img className="email-icon" src={contactemail} />
                        
                        <p style={{marginLeft:'17px', color:'#fff'}}>contact@flash-technologies.org</p>
                        </a>
                        </div>
                      </Box>
                      <Typography
                        sx={{
                          mt: "25px",
                          mb: "5px",
                          fontFamily: "Manrope",
                          fontWeight: "700 !important",
                          fontSize: "16px !important",
                          lineHeight: "25.6px !important",
                        }}
                      >
                        Follow us:
                      </Typography>
                      {/* <img src={contactsectionicons} /> */}
                    </Box>
                  </Grid>
                  <Grid
                    container
                    sx={{
                      mt: "7px",
                      display: "flex",
                      flexDirection: { lg: "row", xs: "row" },
                    }}
                  >
                    {pics.map((i) => {
                      return (
                        <Grid item xs={2.3} md={1} sm={1}>
                          <Box m="5px" sx={{ lg: "100%", xs: "50px" }}>
                            <a
                              href={i.link}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <img src={i.img} />
                            </a>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                className="contact-form"
                item
                // xs={12}
                md={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Grid item md={6} xs={6}>
                  {/* <TextField label="First Name" fullWidth autocomplete="none"/> */}
                  <div className="contact-form-box">
                    <label>
                      <span>First Name</span>
                      <input type="text" placeholder="Jenny" />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={6} md={6}>
                  {/* <TextField label="Last Name" fullWidth autocomplete="none"/> */}
                  <div className="contact-form-box">
                    <label>
                      <span>Last Name</span>
                      <input type="text" placeholder="Wilson" />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="contact-form-box">
                    <label>
                      <span>Your Email Address</span>
                      <input
                        type="email"
                        placeholder="jenny.lawson@example.com"
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="contact-form-box">
                    <label>
                      <span>Tell us about your project</span>
                      <textarea placeholder="Type Here..."></textarea>
                    </label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: { lg: "end", xs: "center" },
                    // width: { lg: "350px", xs: "100%" },
                  }}
                >
                  <Grid item xs={12} md={6} className="contact-form-box">
                    <Button sx={{ textTransform: "none" }}>Send Message</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;

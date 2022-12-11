import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import Devteam1 from "../../../../assests/Images/Devteam1.png";
import dev1 from "../../../../assests/Images/dev1.png";
import dev2 from "../../../../assests/Images/dev2.png";
import dev3 from "../../../../assests/Images/dev3.png";
import dev4 from "../../../../assests/Images/dev4.png";
import dev5 from "../../../../assests/Images/dev5.png";
import dev6 from "../../../../assests/Images/dev6.png";
import dev7 from "../../../../assests/Images/dev7.png";
import dev8 from "../../../../assests/Images/dev8.png";
import dev9 from "../../../../assests/Images/dev9.png";
import dev10 from "../../../../assests/Images/dev10.png";
import dev11 from "../../../../assests/Images/dev11.png";
import dev12 from "../../../../assests/Images/dev12.png";
import devR from '../../../../assests/Images/runnart.png'

import Devteam2 from "../../../../assests/Images/Devteam2.png";
import Devteam3 from "../../../../assests/Images/Devteam3.png";
import Devteam4 from "../../../../assests/Images/Devteam4.png";
import Devteam5 from "../../../../assests/Images/Devteam5.png";
import Devteam6 from "../../../../assests/Images/Devteam6.png";
import Devteam7 from "../../../../assests/Images/Devteam7.png";
import Devteam8 from "../../../../assests/Images/Devteam8.png";
import Devteam9 from "../../../../assests/Images/Devteam9.png";
import Devteam10 from "../../../../assests/Images/Devteam10.png";
import Devteam11 from "../../../../assests/Images/Devteam11.png";
import Devteam12 from "../../../../assests/Images/Devteam12.png";
import core1 from "../../../../assests/Images/core1.png";

import Devteam13 from "../../../../assests/Images/Devteam13.png";
import Devteam14 from "../../../../assests/Images/Devteam14.png";
import Devteam15 from "../../../../assests/Images/Devteam15.png";
import Devteam16 from "../../../../assests/Images/Devteam16.png";

import coreteam1 from "../../../../assests/Images/coreteam1.png";
import coreteam2 from "../../../../assests/Images/coreteam2.png";
import coreteam3 from "../../../../assests/Images/coreteam3.png";
import coreteam4 from "../../../../assests/Images/coreteam4.png";

import "./index.css";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const DevTeam = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        sx={{
          minHeight: "805.62px",
          color: "white",
          padding: {lg:"0px 20px 0px 20px",xs:"0px 20px 0px 20px"},
          width: { lg: "1600px", xs: "100%" },
          maxWidth: "100%",
          margin: "0 auto",
          transform: { lg: "scale(0.8)", xs: "scale(none)", xs: "scale(none)" },
        }}
        className={"devteam-container"}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            marginTop: { lg: "0px", xs: "38px" },
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mt: "0px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "50px !important", xs: "26px" },
                fontWeight: "800 !important",
                lineHeight: "65px !important",
                color: "#ffff",
                marginBottom: "0px",
              }}
            >
              Dev. Team
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",

            // transform: { lg: "scale(0.9)", xs: "scale(0.9)", sm: "scale(0.9)" },

            // alignItems: "center",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "flex-start",
          }}
        >
          <Grid item md={4} xs={12} sx={{}}>
            <Box className="member_core">
              <Box >
                <img src={dev1}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Leo CTO Developer
                </Typography>
                <Typography
                  // className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  <span className="colored-text"> Flash Technologies </span>
                  products <br />& Dev. full stack
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam1} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev2}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Jawad Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Project manager for
                  {/* <br />{" "} */}
                  <span className="colored-text"> <br/>Flash Transfer </span> &{" "}
                  {/* <span className="colored-text"> </span> */}
                  Full stack
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam2} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev3}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Ernest Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Developer Blockchain &<br /> Full stack
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam3} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev4}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Koki Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Developer Blockchain &<br />
                  Full stack
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam4} /> */}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "flex-start",
          }}
        >
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev5}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Vilgelm Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Developer Blockchain &<br />
                  Full stack
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam13} /> */}
          </Grid>
          
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev7}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Vadim Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Developer Blockchain
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam7} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev8}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Safi Developer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Developer Blockchain & <br />
                  Backend
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam8} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev9}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Hassam Editor video
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Video creation and editor
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam9} /> */}
          </Grid> 
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "flex-start",
          }}
        >
          

          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={devR}  style={{height:"136.94px"}} />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Runnart Designer
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Administrative Graphic & <br /> App logo designer
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam9} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box >
                <img src={dev10} style={{height:"136.94px"}}  />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                  Eznau Illustrator
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  Graphic flyers, logos, <br />
                  NFT for all producst of <br/>Flash{" "}
                  <span className="colored-text">Technologies</span>
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam5} /> */}
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="member_core">
              <Box sx={{  }}>
                <img src={dev11} style={{height:"136.94px"}}  />
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                 Numa Designer UI/UX
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                 
                  {/* CEO & Founder of <br />{" "} */}
                  <span className="colored-text"> Flash Transfer  </span> &{" "}
                  <span className="colored-text">Flash Wallet<br/> App </span>  UI/UX designer
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={Devteam12} /> */}
          </Grid>
          <Grid  sx={{pl:{lg:"-10px",xs:"px"},}} item md={4} xs={12}>
            <Box className="member_core">
              <Box sx={{}}>
                <img src={dev12} style={{height:"136.94px",width:"136.94px"}}/>
              </Box>
              <Box sx={{ ml: "14px", mt: "15px" }}>
                <Typography
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "16px !important",
                    fontWeight: "700 !important",
                    lineHeight: "25.6px !important",
                  }}
                >
                 Easin Team Designer UI/UX
                </Typography>
                <Typography
                  className="member-data"
                  sx={{
                    fontFamily: "Manrope !important",
                    fontSize: "14px !important",
                    fontWeight: "400 !important",
                    lineHeight: "22.4px !important",
                  }}
                >
                  <span className="colored-text">Flash Token, Flash Staking,Flash <br/>  Launch, Flash Audit, Flash  wallet<br/>  website </span> UI/UX designer
                  
                </Typography>
                {/* <Box mt="10px">
                  // <img src={min} style={{marginRight:"10px"}}/>
                  // <img src={mtweet} />
                </Box> */}
              </Box>
            </Box>
            {/* <img src={dev12} /> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DevTeam;

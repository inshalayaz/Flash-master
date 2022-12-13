import { Typography, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";

import AppButton from "../../../../components/AppButton";
import { Link } from "react-router-dom";
// import MobileDrawer from "../MobileDrawer";

const Footer = () => {
  const classes = useStyles();
  const list1 = [
    {
      url: "Our Services",
    },
    {
      url: "Tokenomics",
    },
    {
      url: "Roadmap",
    },
    {
      url: "Application",
    },
    {
      url: "Team",
    },
  ];
  const list2 = [
    {
      url: "Whitepaper",
    },
    {
      url: "Audit",
    },
    {
      url: "Flash Company",
    },
    {
      url: "License",
    },
  ];
  const list3 = [
    {
      url: "Privacy Policy",
    },
    {
      url: "Legal Notice",
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          height: { lg: "398px", xs: "auto" },
          display: "flex",
          justifyContent: "center",
          color: "white",
          maxWidth: "100%",
          width: { lg: "1400px", xs: "100%" },
          padding: { lg: "0px 20px", xs: " 0px 0px" },
          margin: "auto",
          transform: { lg: "scale(0.8)", xs: "scale(none)" },
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            // alignItems: "center",
            flexDirection: { lg: "row", xs: "column" },
            mt: { lg: "50px", xs: "10px" },
            padding:{lg:"0",xs:"0px 30px"},
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={11}
            md={4}
            sx={{ padding: { lg: "0px 150px 0 0", xs: "0px 0px 0 0px" } }}
          >
            <Box
              sx={{
                mt: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box>
                <img src={FlashLogo} />
              </Box>

              <Typography
                sx={{
                  ml: "10px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "22px !important",
                  fontWeight: "800 !important",
                  lineHeight: "40px !important",
                }}
              >
                Flash Technologies
              </Typography>
            </Box>
            <Typography
              sx={{
                marginTop: "37px",
                fontFamily: "'Manrope' !important",
                fontSize: "16px !important",
                fontWeight: "400 !important",
                lineHeight: "170% !important",
                color: "#85898F",
              }}
            >
              Flash Technologies : Business Center 1, M Floor, The Meydan Hotel,
              Nad Al Sheba, Dubai, U.A.E.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              // alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
              // justifyContent: "center",
            }}
          >
            <Grid
              item
              md={4}
              xs={12}
              sx={{
                display: "flex",

                alignItems: "start",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    marginTop: { lg: "0px", xs: "20px" },
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Pages
                </Typography>
                {list1.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              sx={{
                display: "flex",

                alignItems: "start",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                {/* <img src={FlashLogo} /> */}

                <Typography
                  sx={{
                    marginTop: { lg: "0px", xs: "20px" },
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Documents
                </Typography>
                {list2.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              <Box>
                {/* <img src={FlashLogo} /> */}

                <Typography
                  sx={{
                    marginTop: { lg: "0px", xs: "20px" },
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "600 !important",
                    lineHeight: "160% !important",
                  }}
                >
                  Legal
                </Typography>
                {list3.map((i) => {
                  return (
                    <>
                      <Box>
                        <Link
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "#85898F",
                          }}
                        >
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "'Manrope' !important",
                              fontSize: "16px !important",
                              fontWeight: "400 !important",
                              lineHeight: "170% !important",
                              color: "#85898F",
                            }}
                          >
                            {i.url}
                          </Typography>
                        </Link>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>{" "}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              m: "20px 0px",
              display: "flex",
              // alignItems: { xs: "start" },
              flexDirection: "column",
              padding: { lg: "0px 20px 0 80px", xs: "0px 0px 0px 0px" },
            }}
          >
            <Typography
              //  align="start"
              sx={{
                fontFamily: "'Manrope' !important",
                fontSize: "18px !important",
                fontWeight: "600 !important",
                lineHeight: "160% !important",
              }}
            >
              Join Our Newsletter
            </Typography>

            <Box
              sx={{
                paddingTop: "20px",
                right: "0px",
                position: "relative",
              }}
            >
              {/* <Typography pl="20px">Your email address</Typography>  */}
              <input
                placeholder="Your email address"
                style={{
                  width: "100%",
                  height: "52px",
                  borderRadius: "28px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  paddingLeft: "20px",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                }}
              />

              <IconButton
                className="iconbutton1"
                sx={{
                  height: "54px",
                  fontSize: { lg: "16px", xs: "12px" },
                  // margin: "0px 5px",
                  fontFamily: "'Manrope' !important",
                  fontWeight: 600,
                  lineHeight: "170%",
                  borderRadius: "61px",
                  color: "#0F0F0E",
                  padding: { lg: "15px 55px", xs: "15px 34px" },
                  // width: "246px",
                  backgroundColor: "#FBBF04",
                  position: "absolute",
                  right: "0px",
                }}
              >
                Subscribe
              </IconButton>
            </Box>
            <Typography
              sx={{
                marginTop: "21px",
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "16px !important", xs: "10px" },
                fontWeight: "400 !important",
                lineHeight: "170% !important",
                width: { lg: "100%", xs: "220px" },
                color: "#85898F",
              }}
            >
              Will send you weekly updates for your better finance management.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            borderTop: "1px solid #5e5757",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              margin: { lg: "0px 0px", xs: "10px 0px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Manrope' !important",
                fontSize: { lg: "16px !important", xs: "10px" },
                fontWeight: "400 !important",
                lineHeight: "170% !important",
              }}
            >
              © 2022, Flash Technologies
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

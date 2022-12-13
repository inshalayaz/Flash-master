import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Button,
  CircularProgress
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";

import tokenomicsVisual from "../../../../assests/Images/Group 1000001267.png";

import BuyFlashCTA from "../../../../assests/Images/BuyFlashCTA.png";
import AuditFlashCTA from "../../../../assests/Images/audit-flash-icon.png";
import AuditFlashImage from "../../../../assests/Images/audit-icon.png";
import cat from "../../../../assests/Images/cat.png";
import led from "../../../../assests/Images/led.png";
import paper from "../../../../assests/Images/paper.png";

import UsingMetamaskCTA from "../../../../assests/Images/UsingMetamaskCTA.png";
import WhitepaperCTA from "../../../../assests/Images/WhitepaperCTA.png";
import PitchDeckCTA from "../../../../assests/Images/PitchDeckCTA.png";
// import tokenomicsBack from '../../../../assests/Images/tokenomics-background.jpg';
import copy from "../../../../assests/Images/copy.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";
import "./index.css";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";
import EN from "../../../../assests/Images/WhitePaper - EN.pdf";
import FR from "../../../../assests/Images/WhitePaper - FR.pdf";

// Chart
import { Doughnut } from 'react-chartjs-2';
import {Data, Options, chartLabel} from './chartData'
import {Chart, ArcElement, Legend} from 'chart.js'
Chart.register(ArcElement, Legend, chartLabel);


const Tokenomics = ({isTransfer = false}) => {
  
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
          padding: { lg: "60px 0", xs: "30px 0 0 0" },
        }}
      >
          {
            isTransfer && (
              <Typography variant="h3" className="soon">Soon</Typography>
            )
          }
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center", position: 'relative' }}
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
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Manrope",
                    fontSize: { lg: "50px", xs: "26px" },
                    fontWeight: "700",
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    marginBottom: "20px",
                    transform: { lg: "scale(0.8)", xs: "scale(none)" },
                  }}
                >
                  Tokenomics
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 20px",
          }}
          className={isTransfer ? classes.blurTransferComponent : ''}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              transform: { lg: "scale(0.8)", xs: "scale(none)" },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { lg: "flex", xs: "none" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#FBBF04",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16x",
                    lineHeight: "140%",
                  }}
                >
                  TOKEN FLASH
                </Typography>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: "50px",
                    lineHeight: "140%",
                  }}
                >
                  Tokenomics{" "}
                  <span style={{ color: "#FBBF04" }}>{isTransfer ? "Flash Transfer" : "Flash Token"}</span>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    paddingRight: "130px",
                  }}
                >
                  Flash is a deflationary token developed on the BSC and other
                  chains. Holding FLASH for long term gives users various
                  advantages such as earning through the staking pool or other
                  benefits services/partners (whitelist, airdrop, gift and many
                  other things).
                </Typography>
                <Box>
                  <Grid item md={12}>
                    <Typography
                      sx={{
                        fontFamily: "Manrope",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "18px",
                        lineHeight: "160%",
                        display: "block",
                        margin: "30px 0",
                      }}
                    >
                      Contract adress:{" "}
                      <Typography
                        sx={{
                          color: "#FBBF04",
                          display: "inline",
                        }}
                      >
                        0x4754380cbEE8EbF0B81D2cBd118b8C7a8E3aD64d{" "}
                        <img src={copy} />
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Grid
                      item
                      md={6}
                      sx={{
                        marginBottom: "30px !important",
                        flexBasis: "max-content !important",
                        paddingRight: "120px !important",
                      }}
                    >
                      <Box
                        className={classes.tokenomicsbullets}
                        sx={{
                          marginBottom: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Token name :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          Flash Transfer
                        </Typography>
                      </Box>

                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Total Supply :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          100.000.000
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sx={{
                        width: "400px !important ",
                        maxWidth: "400px !important",
                        flexBasis: "auto !important",
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Symbol :
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: " 160%",
                          }}
                          component="h4"
                        >
                          Flash
                        </Typography>
                      </Box>

                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "160%",
                            color: "#85898F",
                          }}
                        >
                          Available on :
                        </Typography>
                        <Typography
                          component="h4"
                          sx={{
                            fontFamily: "Manrope",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: " 160%",
                          }}
                        >
                          BNB Chain - Ethereum - Polygon - Cronos
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item md={12}>
                  <a href="https://flash-swap.com/" target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
              
                    <IconButton
                      className="iconbutton"
                      sx={{
                        height: "62px",
                        fontSize: "20px",
                        margin: "0px 5px",
                        fontWeight: 600,
                        lineHeight: "150%",
                        borderRadius: "69px",
                        color: "#0F0F0E",
                        padding: "15px 55px",
                        // width: "246px",
                        backgroundColor: "#FBBF04",
                      }}
                    >
                      <img src={flashbtn} />
                      Buy Flash
                    </IconButton>
                      </a>
                    <a
                      href="https://app.solidproof.io/projects/flash-transfer?audit_id=107"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton
                        className="iconbutton"
                        sx={{
                          height: "62px",
                          fontSize: "20px",
                          margin: "0px 5px",
                          fontWeight: 600,
                          lineHeight: "150%",
                          borderRadius: "69px",
                          color: "#0F0F0E",
                          padding: "15px 55px",
                          // width: "246px",
                          backgroundColor: "#FBBF04",
                        }}
                      >
                        <img src={AuditFlashImage} />
                        Audit Flash
                      </IconButton>
                    </a>

                    {/* <Button className="audit-flash-button"><img src={AuditFlashCTA} /></Button> */}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Grid xs={12} md={8}>
                <Box sx={{ width: { lg: "100%", xs: "70%" }, height: { lg: "80%" } }}>
                  <Doughnut data={Data} options={Options} />
                </Box>
              </Grid>
              <Grid xs={12} md={4}>
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress thickness="6" variant="determinate" id="marketing" value={100} style={{'color': '#4368b1'}} />
                    <Typography style={{ alignSelf: "center" }} variant="h6" ml={1}>5% Marketing</Typography>
                  </div>
                </Grid>
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress thickness="6" variant="determinate" id="liquidity" value={100} style={{'color': '#05705C'}} />
                    <Typography style={{ alignSelf: "center" }} variant="h6" ml={1}>1% Liquidity</Typography>
                  </div>
                </Grid>
                <Grid xs={12} md={12} mt={3}>
                  <div style={{ display: 'flex'}}>
                    <CircularProgress thickness="6" variant="determinate" id="burn" value={100} style={{'color': '#AF5E15'}} />
                    <Typography style={{ alignSelf: "center" }} variant="h6" ml={1}>1% Burn</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            // item
            // xs={12}
            // md={8}
            sx={{
              mb: { lg: "86px", xs: "60px" },
              display: { lg: "none", xs: "flex" },
              padding: { lg: "0px 200px", xs: "0px 10px" },
              alignItems: "center",
              justifyContent: "center",
              // justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Grid item md={2.8} xs={5.4} m={1}>
              <a href={EN} target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Whitepaper EN
                  <img src={led} style={{ marginLeft: "30px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <a
                href="https://app.solidproof.io/projects/flash-transfer?audit_id=107"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Audit Flash
                  <img src={AuditFlashImage} style={{ marginLeft: "20px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <a href={FR} target="__blank" style={{textDecoration:'none', cursor:'pointer'}}>
                <IconButton
                  className="iconbutton"
                  sx={{
                    height: "62px",
                    fontSize: { lg: "16px", xs: "12px" },
                    margin: "5px 2px",
                    fontWeight: 500,
                    lineHeight: { lg: "24", xs: "18px" },
                    borderRadius: "10px",
                    color: "#0F0F0E",
                    padding: "20px 20px",
                    width: "100%",
                    backgroundColor: "#FBBF04",
                  }}
                >
                  Whitepaper FR
                  <img src={paper} style={{ marginLeft: "30px" }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item md={2.8} xs={5.4} m={1}>
              <IconButton
                className="iconbutton"
                sx={{
                  height: "62px",
                  fontSize: { lg: "16px", xs: "12px" },
                  margin: "5px 2px",
                  fontWeight: 500,
                  lineHeight: { lg: "24", xs: "18px" },
                  borderRadius: "10px",
                  color: "#0F0F0E",
                  padding: "20px 20px",
                  width: "100%",
                  backgroundColor: "#FBBF04",
                }}
              >
                Using Metamask
                <img src={cat} style={{ marginLeft: "5px" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Tokenomics;

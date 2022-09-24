import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
// import styles from "../../styles/Home.module.css"
import Image from 'next/image'
import LogoImage from '../../Assets/images/Group 502.png'
import {
    IconButton,
    InputBase,
} from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from '../../styles/footer.module.css'
import { Container } from '@mui/system';

const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box className={styles.footerImage}>
                            <Image src={LogoImage} className={styles.img}></Image>
                            <Typography className={styles.typeo} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={{
                                lg: "flex-start",
                                md: "flex-start",
                                sm: "center",
                                xs: "center",
                            }}
                            alignItems={{
                                lg: "start",
                                md: "start",
                                sm: "center",
                                xs: "center",
                            }}
                        >
                            <Typography className={styles.typeh}>About us</Typography>
                            <Typography className={styles.typeo}>Company</Typography>
                            <Typography className={styles.typeo}>Our Team</Typography>
                            <Typography className={styles.typeo}>Our Partners</Typography>
                            <Typography className={styles.typeo}>Our Customers</Typography>
                            <Typography className={styles.typeo}>Careers</Typography>
                            <Typography className={styles.typeo}>Contact us</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={{
                                lg: "flex-start",
                                md: "flex-start",
                                sm: "center",
                                xs: "center",
                            }}
                            alignItems={{
                                lg: "start",
                                md: "start",
                                sm: "center",
                                xs: "center",
                            }}
                        >
                            <Typography className={styles.typeh}>Quick links</Typography>
                            <Typography className={styles.typeo}>Web store</Typography>
                            <Typography className={styles.typeo}>Privacy policy</Typography>
                            <Typography className={styles.typeo}>
                                Trademarks & Copyrights
                            </Typography>
                            <Typography className={styles.typeo}>
                                Complaints & Appeal
                            </Typography>
                            <Typography className={styles.typeo}>Careers</Typography>
                            <Typography className={styles.typeo}>Sitemap</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Typography className={styles.typeh}>
                                Subscribe to our newsletter
                            </Typography>
                            <Box>
                                <InputBase className={styles.input} placeholder={"Your email"} />
                            </Box>

                            <Button variant="contained" className={styles.buttonS}>
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        lineHeight: "25px",
                                    }}
                                >
                                    Subscribe
                                </Typography>
                            </Button>
                            <Typography className={styles.typeo} sx={{ marginTop: "1.3rem" }}>
                                Follow us on
                            </Typography>
                            <Box className={styles.icon}>
                                <IconButton
                                    sx={{
                                        border: "2.10835px solid #ffffff42",
                                        marginRight: "10px",
                                    }}
                                >
                                    <LinkedInIcon style={{ color: "white" }} />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        border: "2.10835px solid #ffffff42",
                                        marginRight: "10px",
                                    }}
                                >
                                    <FacebookIcon style={{ color: "white" }} />
                                </IconButton>
                                <IconButton sx={{ border: "2.10835px solid #ffffff42" }}>
                                    <TwitterIcon style={{ color: "white" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box>
                <Divider
                    sx={{ background: "#FFFFFF", opacity: "0.6", marginTop: "2rem" }}
                />
                <Typography
                    className={styles.typeo}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={{ lg: "0", md: "0", sm: "3rem", xs: "1rem" }}
                    textAlign={"center"}
                >
                    ©2022 All Rights reserved by Global Success Systems.
                </Typography>
            </Box>

        </section>
    )
}

export default Footer
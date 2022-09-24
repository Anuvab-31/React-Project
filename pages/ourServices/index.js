import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import boxImage from '../../Assets/images/Group 520.png'
import { Container } from '@mui/system'
import styles from '../../styles/ourservices.module.css'

const OurServices = () => {
    return (
        <>
            <section className={styles.serviceSection}>
                <Box className={styles.services}>
                    <Box className={styles.heading}>
                        <Typography className={styles.seviceHeading}>Our Services</Typography>
                        <Typography className={styles.serviceSubHeading}>Making you industry ready is our responsibility</Typography>
                    </Box>

                    <Box className={styles.allBox}>
                        <Container>
                            <Grid container spacing={5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={styles.boxes}>
                                        <Box className={styles.serviceBox}>
                                            <Image src={boxImage} height={70} width={70} />
                                        </Box>
                                        <Box>
                                            <Typography className={styles.boxHeading}>Training</Typography>
                                            <Typography className={styles.boxContain}>We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....</Typography>

                                            <Button className={styles.serviceButton}>View courses</Button>

                                        </Box>

                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={styles.boxes}>
                                        <Box className={styles.serviceBox}>
                                            <Image src={boxImage} height={70} width={70} />
                                        </Box>
                                        <Box>
                                            <Typography className={styles.boxHeading}>Consulting</Typography>
                                            <Typography className={styles.boxContain}>We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....</Typography>

                                            <Button className={styles.serviceButton}>View Services</Button>
                                        </Box>

                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={styles.boxes}>
                                        <Box className={styles.serviceBox}>
                                            <Image src={boxImage} height={70} width={70} />
                                        </Box>
                                        <Box>
                                            <Typography className={styles.boxHeading}>Web Store</Typography>
                                            <Typography className={styles.boxContain}>We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....</Typography>

                                            <Button className={styles.serviceButton}>View Products</Button>
                                        </Box>

                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Box className={styles.boxes}>
                                        <Box className={styles.serviceBox}>
                                            <Image src={boxImage} height={70} width={70} />
                                        </Box>
                                        <Box>
                                            <Typography className={styles.boxHeading}>Solutions</Typography>
                                            <Typography className={styles.boxContain}>We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....</Typography>

                                            <Button className={styles.serviceButton}>View Solutions</Button>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>

            </section>
        </>
    )
}

export default OurServices
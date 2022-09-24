import React from 'react'
import Image from 'next/image'
import backgroundImage from '../../Assets/images/what customers say backdrop.svg'
import profileImage from '../../Assets/images/Ellipse 271.png'
import { Box, Container } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import styles from '../../styles/customer.module.css'

const Customersay = () => {
    return (
        <section className={styles.customerSection}>

            <Box className={styles.customerHeadingContent}>
                <Typography className={styles.customerHeading}>What our customer say?</Typography>
                <Typography className={styles.customerSubHeading}>We belive in 100% client satisfaction and here is what they say about
                    us.</Typography>
            </Box>

            <Box className={styles.customerContent}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Box className={styles.contentBox}>
                                <Box className={styles.profile}>
                                    <Image src={profileImage}></Image>
                                </Box>
                                <Typography className={styles.profileName}>Ricky Master</Typography>
                                <Typography className={styles.profileName2}>Student</Typography>
                                <Typography className={styles.profileName3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna. Tristique volutpat.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box className={styles.contentBox}>
                                <Box className={styles.profile}>
                                    <Image src={profileImage}></Image>
                                </Box>
                                <Typography className={styles.profileName}>Ricky Master</Typography>
                                <Typography className={styles.profileName2}>Student</Typography>
                                <Typography className={styles.profileName3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna. Tristique volutpat.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Box className={styles.newsButtonBox}>
                <Button variant="outlined" className={styles.works}>View more</Button>
            </Box>

        </section>
    )
}

export default Customersay
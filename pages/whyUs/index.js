import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import whyUsImage from '../../Assets/images/why us image.png'
import BoxImage1 from '../../Assets/images/Group 516.png'
import BoxImage2 from '../../Assets/images/Group 515.png'
import BoxImage3 from '../../Assets/images/Group 517.png'
import styles from '../../styles/whyus.module.css'


const WhyUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <Typography className={styles.whyHeading}>Why Us?</Typography>
      <Typography className={styles.whySubHeading}>Global Success Systems Advantage</Typography>


      <Box className={styles.whyUsContent}>
        <Container>
          <Grid container spacing={2} display={"flex"} flexDirection={{ lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' }}>

            <Grid width={{ lg: 400, md: 400, sm: 400, xs: '274px' }} height={{ lg: 400, md: 400, sm: 400, xs: '274px' }} lg={6} md={6} sm={12} xs={12} marginLeft={{ lg: '0px', md: '0px', sm: '6rem', xs: '6rem' }}>
              <Image src={whyUsImage} height={400} width={400}></Image>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className={styles.whyUsboxes}>
                <Box className={styles.serviceBox}>
                  <Image src={BoxImage1} height={70} width={70} />
                </Box>
                <Box>
                  <Typography className={styles.boxHeading}>Real World Professionals</Typography>
                  <Typography className={styles.boxContain}>Our Trainers, Consultants and Auditors are with an
                    average 15+ years of practical and global experience.</Typography>

                  <Button className={styles.whyUsButton}>View our team</Button>
                </Box>

              </Box>
              <Box className={styles.whyUsboxes}>
                <Box className={styles.serviceBox}>
                  <Image src={BoxImage2} height={70} width={70} />
                </Box>
                <Box>
                  <Typography className={styles.boxHeading}>Accredited Courses</Typography>
                  <Typography className={styles.boxContain}>Our courses and exams are accredited by global
                    Certification Bodies and experts.</Typography>

                  <Button className={styles.whyUsButton}>Our Accreditations</Button>
                </Box>

              </Box>
              <Box className={styles.whyUsboxes}>
                <Box className={styles.serviceBox}>
                  <Image src={BoxImage3} height={70} width={70} />
                </Box>
                <Box>
                  <Typography className={styles.boxHeading}>Industry Leading Products and Solutions</Typography>
                  <Typography className={styles.boxContain}>We provide customized, practical, implementable
                    services to achieve your goals.</Typography>

                  <Button className={styles.whyUsButton}>Our Approach</Button>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section >
  )
}

export default WhyUs
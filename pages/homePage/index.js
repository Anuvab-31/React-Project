import { Box, Button, Typography } from '@mui/material'
import React from 'react'
// import Image from 'next/image'
// import backgroundImage from '../../Assets/images/BAckground.png'
import styles from '../../styles/homepage.module.css'
function HomePage() {
    return (
        <>
            <section className={styles.homepage}>

                <Typography className={styles.homeContent}>Improve your <span className={styles.spanContent}>business <br></br>performance</span> by empowering<br></br> your people.</Typography>

                <Typography className={styles.homeSubContent}>Get curated courses and dedicated consultation for your employees at one place.</Typography>

                <Box className={styles.buttonGroup}>
                    <Button className={styles.courses}>View courses</Button>
                    <Button variant="outlined" className={styles.works}>How it works?</Button>
                </Box>
            </section>
        </>
    )
}

export default HomePage
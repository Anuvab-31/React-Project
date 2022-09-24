import { Box, Button, Typography } from '@mui/material'
import { width } from '@mui/system';
// import React from 'react'
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselCard from './carouselCard';
import styles from '../../styles/latestnews.module.css'
import ResCard from './resCard';

const LatestNews = () => {
    const breakpoints = [
        { width: 1, itemToShow: 1 },
        { width: 500, itemToShow: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 4 },
    ]
    return (
        <Box className={styles.newsSection}>
            <Typography className={styles.newsHeading}>Latest News</Typography>


            <Box className={styles.newsCarousel}>
                <Carousel breakPoints={breakpoints} itemsToShow={4}>
                    <CarouselCard></CarouselCard>
                    <CarouselCard></CarouselCard>
                    <CarouselCard></CarouselCard>
                    <CarouselCard></CarouselCard>
                    <CarouselCard></CarouselCard>
                    <CarouselCard></CarouselCard>
                </Carousel>
            </Box>

            <Box className={styles.resCard}>
                <ResCard></ResCard>
            </Box>

            <Box className={styles.newsButtonBox}>
                <Button variant="outlined" className={styles.works}>View more</Button>
            </Box>
        </Box>
    )
}

export default LatestNews
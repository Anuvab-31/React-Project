import { Grid } from '@mui/material'
import React from 'react'
import CarouselCard from './carouselCard'

const ResCard = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <CarouselCard></CarouselCard>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <CarouselCard></CarouselCard>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <CarouselCard></CarouselCard>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <CarouselCard></CarouselCard>
                </Grid>
            </Grid>

        </div>
    )
}

export default ResCard
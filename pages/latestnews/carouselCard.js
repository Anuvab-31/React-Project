import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
// import Image from 'next/image'
import styles from '../../styles/latestnews.module.css'

export default function CarouselCard() {
    return (
        <>
            <Box className={styles.BoxCard}>

                <Card className={styles.card}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/Rectangle 36.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography className={styles.carouselcardcontents}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.
                        </Typography>
                        <Typography className={styles.cardsubContent}>
                            By Himanshu , 03/02/2022
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={styles.cardbutton}>Read more</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

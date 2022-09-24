import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Image from 'next/image'
import Image1 from '../../Assets/images/image 2.png'
import styles from '../../styles/majorclients.module.css'
import { Container } from '@mui/system';

const MajorClients = () => {
    return (
        <section className={styles.clientSection}>

            <Box>
                <Typography className={styles.clientHeading}>
                    Our Major Clients
                </Typography>
                <Typography className={styles.clientSubHeading}>
                    Our esteemed clients around the world.
                </Typography>
            </Box>

            <Box className={styles.cardClients} >
                <Box
                    className={styles.cards}
                    sx={{ maxWidth: 345, marginTop: "20px" }}
                >
                    <CardMedia
                        component="img"
                        // height="70"
                        image="/image 2.png"
                        alt="green iguana"
                        sx={{
                            height: "90.11px",
                            width: "150px",
                            margin: "5px 0 0 0px",
                        }}
                    />
                </Box>
                <Box
                    className={styles.cards}
                    sx={{ maxWidth: 345, marginTop: "20px" }}
                >
                    <CardMedia
                        component="img"
                        // height="140"
                        image='/image 3.png'
                        alt="green iguana"
                        sx={{
                            height: "92.11px",
                            width: "150px",
                            margin: "5px 0 0 0px",
                        }}
                    />
                </Box>
                <Box
                    className={styles.cards}
                    sx={{ maxWidth: 345, marginTop: "20px" }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/image 4.png"
                        alt="green iguana"
                        sx={{
                            height: "85.11px",
                            width: "150px",
                            margin: "5px 0 0 5px",
                        }}
                    />
                </Box>
                <Box
                    className={styles.cards}
                    sx={{ maxWidth: 345, marginTop: "20px" }}
                >
                    <CardMedia
                        component="img"
                        // height="140"
                        image="/image 5.png"
                        alt="green iguana"
                        sx={{
                            height: "80.11px",
                            width: "150px",
                            margin: "5px 0 0 5px",
                        }}
                    />
                </Box>
            </Box>

        </section>
    )
}

export default MajorClients
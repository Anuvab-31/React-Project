import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/drawer.module.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import profileImage from '../../Assets/images/Ellipse 271.png'
import Divider from '@material-ui/core/Divider';
import Sidebar from './sideBar';
const DrawerComponent = () => {
    return (

        <>
            <section className={styles.drawer}>

                <Box className={styles.headerLinks}>
                    <Box className={styles.profileBox}>
                        <Box className={styles.headerprofile}>
                            <Image src={profileImage}></Image>
                        </Box>
                        <Box className={styles.profileName}>Kianna Vetrovs</Box>
                    </Box>

                    <Box className={styles.cartIcon} >
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </Box>
                </Box>
                <Box className={styles.divider}>
                    <Divider ></Divider>
                </Box>
                <Box >
                    <Sidebar></Sidebar>
                </Box>
            </section>

        </>

    )
}

export default DrawerComponent
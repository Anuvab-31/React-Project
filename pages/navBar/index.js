import { Box, Typography } from '@mui/material'
import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../../styles/navBar.module.css'

const NavBar = () => {
    return (
        <Box className={styles.nav}>
            <Box className={styles.mail}>
                <MailIcon className={styles.HeaderIcon}></MailIcon>
                <Typography variant={styles.caption}>demo@gssgroup.com</Typography>
                <PhoneIcon className={styles.HeaderIcon}></PhoneIcon>
                <Typography variant={styles.caption}>7894561236</Typography>
            </Box>
            <Box className={styles.contact}>
                <Typography variant='caption'>Follow us on:</Typography>
                <Box className={styles.icon}>
                    <InstagramIcon className={styles.socialIcon}></InstagramIcon>
                    <YouTubeIcon className={styles.socialIcon}></YouTubeIcon>
                    <FacebookIcon className={styles.socialIcon}></FacebookIcon>
                    <LinkedInIcon className={styles.socialIcon}></LinkedInIcon>
                </Box>
                <Typography variant='caption'>Contact us</Typography>
            </Box>

        </Box>
    )
}

export default NavBar
import { Box, Container } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import LogoImage from '../../Assets/images/Group 545.png'
import { Grid, InputBase } from '@mui/material'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import profileImage from '../../Assets/images/Ellipse 271.png'
import SearchIcon from '@material-ui/icons/Search';
import styles from '../../styles/header.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from './drawerComponent'
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    // const toggleDrawer = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <>
            {isOpen ? <Box>
                <DrawerComponent></DrawerComponent>
            </Box> : <Box></Box>}

            <Box className={styles.headerSection}>

                <Box className={styles.wrapper}>
                    <Box className={styles.menuIcon}>
                        <MenuIcon onClick={() => {
                            setIsOpen(true);
                        }}></MenuIcon>
                    </Box>
                    <Box className={styles.headerimg}>
                        <Image src={LogoImage} height={40} width={130} ></Image>
                    </Box>
                    <Box className={styles.searchBox}>
                        <InputBase
                            sx={{
                                width: "100%",
                                height: "40px",
                                border: "1px solid #E7E7E7",
                                borderRadius: "6px",
                                justifyItems: "center",
                                padding: "20px",
                            }}
                            placeholder={"Search"}
                            startAdornment={<SearchIcon />}

                        />
                    </Box>
                    <Box className={styles.searchIcon}>
                        <SearchIcon />
                    </Box>

                    <ul className={styles.navlinks}>
                        <li>
                            <a href='/'>Training</a>
                            <Box className={styles.megabox}>
                                <Box className={styles.content}>
                                    <Box className={styles.row}>
                                        <Box className={styles.heading1}>Governance</Box>
                                        <ul className={styles.megalinks}>
                                            <li><a href='/'>COBIT</a></li>
                                            <li><a href='/'>ISO/IEC 38500</a></li>
                                            <li><a href='/'>CGEIT</a></li>
                                            <Box className={styles.heading}>Performance Management</Box>
                                            <li><a href='/'>Balanced Scorecard</a></li>
                                            <li><a href='/'>KPI</a></li>
                                            <li><a href='/'>Strategy Management</a></li>
                                            <Box className={styles.heading}>Cybersecurity & Privacy</Box>
                                            <li><a href='/'>EXIN Information Security based ...</a></li>
                                            <li><a href='/'>ISO/IEC 27001</a></li>
                                            <li><a href='/'>Cyber & IT Security</a></li>
                                            <li><a href='/'>Computer Forensics</a></li>
                                            <li><a href='/'>Cybersecurity</a></li>
                                            <li><a href='/'>ISO/IEC 27001</a></li>
                                            <li><a href='/'>GDPR - Data Protection</a></li>


                                        </ul>
                                    </Box>
                                    <Box className={styles.row}>
                                        <Box className={styles.heading1}>Continuity & Resilience </Box>
                                        <ul className={styles.megalinks}>
                                            <li><a href='/'>BCM ISO 22301</a></li>
                                            <li><a href='/'>Disaster Recovery</a></li>
                                            <li><a href='/'>Organization Resilience - ISO 22316</a></li>
                                            <Box className={styles.heading}>Risk Management</Box>
                                            <li><a href='/'>CRISC</a></li>
                                            <li><a href='/'>ISO 31000</a></li>
                                            <li><a href='/'>IT Risk Management</a></li>
                                            <li><a href='/'>ISO 27005</a></li>
                                            <li><a href='/'>M_o_R</a></li>
                                            <Box className={styles.heading}>Compliance Management</Box>
                                            <li><a href='/'>ISO 19600 CMS</a></li>
                                            <li><a href='/'>ISO 37001 ABMS</a></li>
                                            <Box className={styles.heading}>Quality & Lean Management</Box>
                                            <Box className={styles.heading}>Project Management </Box>
                                            <Box className={styles.heading}>Service Management </Box>


                                        </ul>
                                    </Box>
                                    <Box className={styles.row}>
                                        <Box className={styles.heading1}>Auditing & Assurance </Box>
                                        <ul className={styles.megalinks}>
                                            <li><a href='/'>Cybersecurity Audit</a></li>
                                            <li><a href='/'>CISA</a></li>
                                            <li><a href='/'>Internal Auditor</a></li>
                                            <li><a href='/'>Assessor</a></li>
                                            <Box className={styles.heading}>Digital Transformation</Box>
                                            <li><a href='/'>Digital Transformation Officer</a></li>
                                            <li><a href='/'>Digital Transformation Professional</a></li>
                                            <li><a href='/'>Digital Transformation Specialist</a></li>
                                            <li><a href='/'>DG Technology Professional</a></li>
                                            <li><a href='/'>DG Data Science Professional</a></li>
                                            <li><a href='/'>Digital Transformation Data Scientist</a></li>
                                            <li><a href='/'>Digital Transformation Security Professional</a></li>
                                            <li><a href='/'>DG Technology Professional</a></li>
                                            <Box className={styles.heading}>Architecture Management</Box>
                                            <Box className={styles.heading}>Others</Box>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>

                        </li>
                        <li><a href='/'>Consulting</a></li>
                        <li><a href='/'>Solutions</a></li>
                        <li><a href='/'>Webstore</a></li>
                        <li><a href='/'>About us</a></li>

                    </ul>

                    <Box className={styles.headerLinks}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </Box>
                    <Box className={styles.headerprofile}>
                        <Image src={profileImage}></Image>
                    </Box>
                </Box>

            </Box >
        </>
    )
}

export default Header
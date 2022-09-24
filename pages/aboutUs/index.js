import Image from "next/image";
// import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
// import backgroundImage from '../../Assets/images/BAckground.png'
import styles from '../../styles/about.module.css'

export default function Home() {
    return (
        <>
            <section className={styles.about} >
                <Container maxWidth={"lg"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}

                    >
                        <Typography className={styles.aboutHeading}>About Us</Typography>
                        <Typography className={styles.aboutSubHeading}>
                            A brief about our vision, mission & us.
                        </Typography>
                        <Typography className={styles.aboutContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            vitae sed eget ut turpis eget feugiat aenean viverra. Sodales in
                            urna nec, amet molestie varius. Vel auctor vitae ultrices eget
                            senectus. Nisi, mattis lectus mi tellus quis ornare. Arcu
                            tristique nulla duis eu nunc molestie. Donec dictumst sapien enim
                            nec nibh sed arcu. Quis pretium ultrices velit non euismod. Amet
                            at consectetur at tortor pharetra, nisl donec quam cras. Aliquet
                            dolor etiam commodo nisl.
                        </Typography>
                        <Typography className={styles.aboutContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            vitae sed eget ut turpis eget feugiat aenean viverra. Sodales in
                            urna nec, amet molestie varius. Vel auctor vitae ultrices eget
                            senectus. Nisi, mattis lectus mi tellus quis ornare. Arcu
                            tristique nulla duis eu nunc molestie. Donec dictumst sapien enim
                            nec nibh sed arcu. Quis pretium ultrices velit non euismod. Amet
                            at consectetur at tortor pharetra, nisl donec quam cras. Aliquet
                            dolor etiam commodo nisl.
                        </Typography>
                    </Box>
                </Container>
            </section>
        </>
    );
}
import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import aboutmePng from "../../assets/aboutus.png"
const Aboutme = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container maxWidth={"1500px"} margin={`${isMobile ? "4rem auto 0px auto" : "4.5rem auto 0px auto"}`}>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={"3rem"} color={"rgba(0, 0, 0, 0.7)"} style={{ textShadow: "rgb(90 90 90) 1px 1px 8px" }}> About me</Typography>
            </Grid>
            <Grid container justifyContent={"center"} padding={`${isMobile ? "1rem" : "0rem"}`}>
                <Grid item xs={12} md={11} lg={11} >
                    <Grid container spacing={4} className='test' alignItems={"center"} justifyContent={"center"} >
                        {/* Left part text content start here */}
                        <Grid item xs={12} md={7} lg={7} order={{ xs: 2, md: 1 }}>
                            <Typography fontSize={"1.2rem"} textAlign={`${isMobile ? "start" : "start"}`} lineHeight={1.7} fontWeight={600} color={"rgba(0, 0, 0, 0.7)"}>

                                I completed my schooling from Sainthia High school.
                                After my schooling, I pursued a Bachelor of Computer Applications degree
                                from Acharya Bangalore Business School. I've refined my skills through
                                a robust computer science foundation and hands-on experience. My main
                                focus is in Frontend development.  I am always looking to learn
                                new technologies.
                            </Typography>

                        </Grid>
                        {/* Left part text content ends here */}
                        {/* Image start here */}

                        <Grid item xs={12} sm={9} md={5} lg={5} order={{ xs: 1, md: 2 }} >
                            <Box>

                                <img src={aboutmePng} width={"100%"} />
                                {/* <img src='/src/assets/office-desk.png' width={"100%"} /> */}
                                {/* <img src='/src/assets/aboutus_animation.gif' width={"100%"} /> */}
                            </Box>
                        </Grid>
                        {/* Image ends here */}
                    </Grid>

                </Grid>
            </Grid>
        </Grid >
    )
}

export default Aboutme
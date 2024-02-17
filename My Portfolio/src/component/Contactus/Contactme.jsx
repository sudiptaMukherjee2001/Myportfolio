import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactmeForm from './ContactmeForm';
import contactus from "../../assets/contact-us-new.png"
const Contactme = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container maxWidth={"1500px"} margin={`${isMobile ? "4rem auto 0px auto" : "4.5rem auto 0px auto"}`}>
            <Grid item xs={12} md={12}>
                <Typography variant="h1"
                    textAlign={"center"}
                    fontWeight={500}
                    fontSize={"3rem"}
                    color={"rgba(0, 0, 0, 0.7)"}
                    style={{ textShadow: "rgb(90 90 90) 1px 1px 8px" }}>
                    Get in Touch
                </Typography>
            </Grid>
            <Grid container justifyContent={"center"} padding={`${isMobile ? "1rem" : "0rem"}`}>
                <Grid item xs={12} md={11} lg={11} >
                    <Grid container className='test' alignItems={"center"} justifyContent={"center"} >

                        {/* Image start here */}
                        <Grid item xs={12} sm={9} md={5} lg={5} order={{ xs: 1, md: 1 }} >
                            <Box width={"90%"}>

                                <img src={contactus} width={"100%"} />
                            </Box>

                        </Grid>
                        {/* Image ends here */}
                        {/* Right part text content start here */}
                        <Grid item xs={12} md={6} lg={5} order={{ xs: 2, md: 2 }}>
                            {/* <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}> */}

                            <ContactmeForm />
                            {/* </Box> */}


                        </Grid>
                        {/* Right part text content ends here */}

                    </Grid>

                </Grid>
            </Grid>
        </Grid >
    )
}

export default Contactme
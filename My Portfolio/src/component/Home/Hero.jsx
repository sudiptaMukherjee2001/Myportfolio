import { Grid, Box, Typography } from '@mui/material'
import { ContactMeBtnBox, FlexBox, HeroSection, HeroSectionBtn } from '../../style/Hero_Section_Style'
import Typed from 'typed.js';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sudipta_resume2024 from "../../assets/Sudipta_resume2024.pdf"
import { CustomLink } from '../../style/Link_style';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SocialMediaLinks from './SocialMediaLinks';
const Hero = () => {
    const theme = useTheme();

    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const typedTextRef = useRef(null);
    const nameRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                // "ReactJS <span style='color: #374151;'>Developer</span>",
                "ReactJS Developer",
                "Frontend Developer...",
            ]
            ,

            typeSpeed: 170,
            backSpeed: 170,
            loop: true,
            showCursor: false

        }
        const option = {
            strings: [
                "Sudipta Mukherjee..."
            ]
            ,
            typeSpeed: 150,
            showCursor: false

        }

        // Initialize the Typed instance
        const nametyped = new Typed(nameRef.current, option,);
        const typed = new Typed(typedTextRef.current, options,);
        console.log("typedTextRef.current", typed.strings);


        // Cleanup the Typed instance when the component unmounts
        return () => {
            nametyped.destroy();
            typed.destroy();
        };
    }, []);

    // Func is used to go to contact form
    const goToContactForm = () => {
        navigate("/contact");

    }

    return (
        <HeroSection className='Hero_section'>
            <Grid container spacing={0} height={"100%"} alignItems={"center"}>
                <Grid item xs={12} md={12} lg={12} >

                    {/* First part   of the content starts here*/}
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12} >


                            <Box position={"relative"} zIndex={"1"} display={"flex"} flexDirection={"column"} alignItems={"center"}>

                                {/* NAME TYPO START */}


                                <Typography fontSize={`${isMobile ? "2rem" : "2.8rem"}`} >Hi, I am</Typography>
                                <Typography ref={nameRef} className="text-animate" fontSize={`${isMobile ? "2rem" : "2.8rem"}`} ></Typography>

                                {/* NAME TYPO END */}

                            </Box>
                        </Grid>
                    </Grid>
                    {/* First part  of the content ends here */}
                    {/* Middel part  of the content starts here*/}
                    <Grid container minHeight={"84px"}>
                        <Grid item xs={12} md={12} lg={12} >

                            <FlexBox>
                                <Box display={"flex"} flexDirection={"column"} marginLeft={"2rem"}>
                                    <Typography color="white" ref={typedTextRef} fontSize={`${isMobile ? "2rem" : "2.8rem"}`}  ></Typography>
                                </Box>
                            </FlexBox>
                        </Grid>
                    </Grid>
                    {/* Middel part  of the content ends here*/}
                    {/*  Botton part   of the content starts here*/}
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12} >

                            <ContactMeBtnBox>
                                <HeroSectionBtn variant='outlined' size="small" onClick={goToContactForm} endIcon={<ArrowRightAltIcon sx={{ fontSize: "1.9rem !important" }} />}>
                                    Contact me
                                </HeroSectionBtn>
                                <CustomLink to={Sudipta_resume2024} target="_blank">
                                    <HeroSectionBtn variant='outlined' size="small" endIcon={<FileDownloadIcon sx={{ fontSize: "1.9rem !important" }} />}>

                                        Download cv
                                    </HeroSectionBtn>
                                </CustomLink>

                            </ContactMeBtnBox>
                        </Grid>
                    </Grid>
                    {/*   Botton part   of the content ends here*/}
                    {/* Social media links */}
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12} >
                            <SocialMediaLinks />
                        </Grid>
                    </Grid>


                </Grid>


            </Grid>
        </HeroSection>

    )
}

export default Hero


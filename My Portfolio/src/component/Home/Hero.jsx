import { Grid, Box, Typography } from '@mui/material'
import { ContactMeBtnBox, FlexBox, HeroSection, HeroSectionBtn, WholeContent } from '../../style/Hero_Section_Style'
import Typed from 'typed.js';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef } from 'react';
const Hero = () => {
    const theme = useTheme();
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



    return (

        <HeroSection className='Hero_section'>
            <Grid container spacing={0} height={"100%"}>
                <Grid item xs={12} md={12} lg={12} >
                    <WholeContent>
                        {/* First part   of the content starts here*/}
                        <Box position={"relative"} zIndex={"1"} display={"flex"} flexDirection={"column"} alignItems={"center"}>

                            {/* NAME TYPO START */}


                            <Typography fontSize={`${isMobile ? "2rem" : "2.8rem"}`} >Hi, I am</Typography>
                            <Typography ref={nameRef} className="text-animate" fontSize={`${isMobile ? "2rem" : "2.8rem"}`} ></Typography>

                            {/* NAME TYPO END */}

                        </Box>
                        {/* First part  of the content ends here */}
                        {/* Middel part  of the content starts here*/}
                        <FlexBox >
                            <Box maxHeight={"100%"} display={"flex"} flexDirection={"column"} marginLeft={"2rem"}>
                                <Typography color="white" ref={typedTextRef} fontSize={`${isMobile ? "2rem" : "2.8rem"}`}  ></Typography>
                            </Box>
                        </FlexBox>
                        {/* Middel part  of the content ends here*/}
                        {/*  Last part   of the content starts here*/}
                        <ContactMeBtnBox>
                            <HeroSectionBtn variant='outlined' size="large">HIRE ME</HeroSectionBtn>
                            <HeroSectionBtn variant='outlined' size="large">Download Cv</HeroSectionBtn>
                        </ContactMeBtnBox>
                        {/*   Last part   of the content ends here*/}
                    </WholeContent>
                </Grid>


            </Grid>
        </HeroSection>

    )
}

export default Hero
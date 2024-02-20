import { Box, styled, Button } from '@mui/material'
import Bgpic from "../assets/HeroSection.jpg"
export const HeroSection = styled(Box)({
    backgroundImage: `url(${Bgpic})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    // border: "2px solid yellow",
    // width: "100vw",
    overflow: "hidden",
    color: "white",
    position: "relative",
    // maxWidth: "1990px",
    margin: "4rem auto 0px auto",
    "::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        // zIndex: 1s
        // height: "100%"
    }
});

export const FlexBox = styled(Box)({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: "10%",
    position: "relative",
    zIndex: 1
});
export const ContactMeBtnBox = styled(Box)({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    columnGap: "17px",
    marginTop: "1rem",


});
export const HeroSectionBtn = styled(Button)({
    borderRadius: "0.3rem",
    background: "transparent",
    border: "1px solid white",
    color: "white",
    fontSize: "18px",
    boxShadow: `2px 0px 8px rgb(255 255 255 / 54%)`,
    textTransform: "capitalize ",
    ":hover": {
        transform: "scale(1.05)",
        transition: ".2s ease-in-out",
        boxShadow: `2px 0px 8px rgba(255,255,255,.9)`,

        border: "1px solid white",
        background: "#fff",
        color: "#000"

    }

});
export const SocialMediaIconContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    marginTop: "2.3rem",
    columnGap: "20px",
    ".SocialMediaIconItem": {
        background: "transparent",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        height: "40px",
        width: "40px",
        padding: "1.3rem",
        borderRadius: "50%",
        boxShadow: `2px 0px 8px rgb(255 255 255 / 54%)`,

        animation: "AnimatedSocialMediaLinks 3s alternate infinite",
        "@keyframes AnimatedSocialMediaLinks": {
            "0%": {
                transform: "translateY(0)"
            },

            "100%": {
                transform: "translateY(-10px)"
            }
        },
        ":hover": {
            transform: "scale(1.05)",
            transition: ".2s ease-in-out",
            boxShadow: `2px 0px 8px rgb(255 255 255 / 54%)`,
            height: "40px",
            width: "40px",
            padding: "1.3rem",
            borderRadius: "50%",
            // border: "1px solid white",
            background: "#ffffff96",
            color: "#000"

        }
    }

});
import { Box, styled } from '@mui/material'

export const AnimatedBar = styled(Box)({
    background: "#93c5fd",
    width: "130px",
    borderRadius: "74px",
    height: "6px",
    position: "relative",
    marginTop: "0.8rem",
    ".Animated_Ball": {

        "::before": {
            content: "''",
            position: "absolute",
            top: "-3.6px",
            background: "#0F172A",
            width: "10%",
            height: "13px",
            borderRadius: "50%",
            // left: "30px",
            ZIndex: "2",
            animation: "Move_Ball 5s linear infinite",
            "@keyframes Move_Ball": {
                "0%": {
                    transform: "translateX(0)"
                },

                "100%": {
                    transform: "translateX(124px)"
                }
            },


        }
    }
});

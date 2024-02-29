import { Box, styled } from '@mui/material'
export const SkillCards = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "1rem",
    borderRadius: "0.3rem",
    border: "1px solid #0F172A",
    background: "#0F172A",
    paddingBlock: "0.4rem",
    paddingInline: "1rem",
    // Set minWidth instead of width
    boxShadow: `2px 0px 8px rgb(75 90 109 / 90%)`,
    maxWidth: "fit-content",
    color: "whitesmoke",
    cursor: "pointer",
    ":hover": {
        transform: "scale(1.05)",
        transition: ".2s ease-in-out",
        boxShadow: `2px 0px 8px rgb(255 255 255 / 54%)`,

        // border: "1px solid white",
        // background: "#fff",
        // color: "#000 "

    }
});
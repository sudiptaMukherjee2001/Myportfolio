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
    maxWidth: "fit-content",
});
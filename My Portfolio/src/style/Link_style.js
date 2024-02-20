import { styled } from '@mui/material'
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)({
    textDecoration: "none",
    border: "none",
    color: "white",

    ":hover": {

        border: "1px solid white",

        background: "#fff",
        color: "#000",

    }
});
import Card from '@mui/material/Card';

import { styled, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';

export const Dialogbox = styled(Dialog)({
    ".MuiDialog-paper": {
        maxWidth: "900px",
        // maxHeight: "88%"
    }

});
export const Projectcard = styled(Card)({
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
    backgroundColor: "#f3f3f359",
    // backgroundColor: "black",
    borderRadius: "0.3rem",
    ".project-area": {

        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

});
export const Projectbtn = styled(Button)({

    background: "#0F172A",
    border: "1px solid white",
    color: "white",
    borderRadius: "0.3rem",
    ":hover": {
        background: "#fff",
        color: "#000",
        border: "1px solid #0F172A",

    }

});
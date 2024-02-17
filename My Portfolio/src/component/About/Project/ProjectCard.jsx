import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Dialogbox, Projectbtn, Projectcard } from '../../../style/Project_Section_style';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

export default function ProjectCard({ Projectname, Image, VideoLink, DeploymentLink }) {
    const [open, setOpen] = React.useState(false);
    console.log("Image", Image);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [isVisible, setIsVisible] = useState(false);
    const skillCardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const top = skillCardRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsVisible(top < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.div
                ref={skillCardRef}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.7 }}
            >

                <Projectcard className="project-card">
                    <CardActionArea className='project-area'>
                        <CardMedia
                            component="img"

                            image={`${Image}`}
                            alt="green iguana"
                        />
                        <CardContent className='project-content' sx={{ padding: "0px", marginTop: "1rem" }}>
                            <Typography fontSize={"1.2rem"} fontWeight={600} textAlign={"center"} color={"rgba(0, 0, 0, 0.7)"}>

                                {Projectname}
                            </Typography>

                        </CardContent>
                        <CardActions sx={{ marginBottom: "0.5rem" }}>
                            <Link to={DeploymentLink} target='_blank' rel="noreferrer">

                                <Projectbtn variant='outlined' size="large" >Link</Projectbtn>
                            </Link>
                            <Projectbtn variant='outlined' size="large" onClick={handleClickOpen}>Preview</Projectbtn>
                        </CardActions>

                    </CardActionArea>
                </Projectcard>
            </motion.div>
            {/* Dialog box  */}
            <Dialogbox
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title" textAlign={"center"} fontSize={"2rem"}>
                    {
                        Projectname
                    }
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <video src={`${VideoLink}`} width="100%" height="100%" controls="controls" autoPlay="true" />
                </DialogContent>

            </Dialogbox>
        </>
    );
}
ProjectCard.propTypes = {
    Projectname: PropTypes.string.isRequired,
    Image: PropTypes.element.isRequired,
    VideoLink: PropTypes.element.isRequired,
    DeploymentLink: PropTypes.any.isRequired

};
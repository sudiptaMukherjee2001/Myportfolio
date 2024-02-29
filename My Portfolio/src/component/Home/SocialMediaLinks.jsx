import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialMediaIconContainer } from '../../style/Hero_Section_Style';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
const SocialMediaLinks = () => {
    return (
        <SocialMediaIconContainer>
            <Link to={"https://github.com/sudiptaMukherjee2001"} target="_blank">

                <Box className="SocialMediaIconItem">
                    <GitHubIcon sx={{ fontSize: "2rem" }} />
                </Box>
            </Link>

            <Link to={"https://www.linkedin.com/in/sudipta-mukherjee-19295a248/"} target="_blank" >

                <Box className="SocialMediaIconItem">
                    <LinkedInIcon sx={{ fontSize: "2rem" }} />
                </Box>
            </Link>
            <Box className="SocialMediaIconItem">
                <InstagramIcon sx={{ fontSize: "2rem" }} />
            </Box>
        </SocialMediaIconContainer>
    )
}

export default SocialMediaLinks
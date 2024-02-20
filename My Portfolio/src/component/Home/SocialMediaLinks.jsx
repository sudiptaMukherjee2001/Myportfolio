import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialMediaIconContainer } from '../../style/Hero_Section_Style';
import { Box } from '@mui/material'
const SocialMediaLinks = () => {
    return (
        <SocialMediaIconContainer>
            <Box className="SocialMediaIconItem">
                <GitHubIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Box className="SocialMediaIconItem">
                <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Box className="SocialMediaIconItem">
                <InstagramIcon sx={{ fontSize: "2rem" }} />
            </Box>
        </SocialMediaIconContainer>
    )
}

export default SocialMediaLinks
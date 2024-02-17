import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { projectData } from '../../../utility/ProjectData.jsx'
import ProjectCard from './ProjectCard.jsx';
const ProjectSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container justifyContent={"center"} maxWidth={"1500px"} margin={"3rem auto 0rem auto"}>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={"3rem"} color={"rgba(0, 0, 0, 0.7)"} style={{ textShadow: "rgb(90 90 90) 1px 1px 8px" }}>Project</Typography>
            </Grid>
            {/* Project cards container */}
            <Grid item xs={12} md={10}>
                <Grid container spacing={3} marginTop={"1rem"} justifyContent={`${isMobile ? "center" : "start"}`}>
                    {/* Project cards  */}
                    {
                        projectData.map((project, ind) => {
                            return (

                                <Grid item xs={10} sm={5} md={4} lg={4} key={ind}>
                                    <ProjectCard Projectname={project.ProjectName}
                                        VideoLink={project.videoLink}
                                        Image={project.Image}
                                        DeploymentLink={project.deploymentLink}
                                    />
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Grid>
        </Grid >
    )
}

export default ProjectSection
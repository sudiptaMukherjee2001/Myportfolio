import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SkillCard from './SkillCard';
import { skillData } from '../../utility/SkillData.jsx'
import Baraimation from '../Baranimation/Baraimation.jsx';

const Skills = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container maxWidth={"1500px"} margin={"3rem auto 0px auto"}>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={"2.4rem"}
                    color={"rgba(0, 0, 0, 0.7)"}
                    style={{ textShadow: "rgb(90 90 90) 0.9px 0.9px 3px" }}>Skill</Typography>
            </Grid>
            <Grid item xs={12} >
                <Grid container justifyContent={"center"} marginBottom={"0.7rem"}>
                    <Baraimation />
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"} marginTop={"1rem"} >
                <Grid item xs={12} md={9} lg={9} >
                    <Grid container columnGap={"20px"} rowGap={"20px"} justifyContent={"center"} alignItems={"center"}>


                        {
                            skillData.map((skill, ind) => {
                                return (
                                    <Grid item key={ind} >
                                        <SkillCard skillName={skill.name} svg={skill.svgData} key={ind} />


                                    </Grid>
                                )
                            })

                        }




                    </Grid>

                </Grid>


            </Grid>
        </Grid >
    )
}

export default Skills
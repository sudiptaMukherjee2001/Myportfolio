import React from 'react'
import Experience_Vertical_Timeline from './Experience_Vertical_Timeline'
import { Box, Grid, Typography } from '@mui/material'
import { verticalTimeLine } from '../../../utility/VerticalTimeline'
import Baraimation from '../../Baranimation/Baraimation'
const Experience = () => {
    return (
        <Grid container maxWidth={"1500px"} margin={"3rem auto 0px auto"}>
            <Grid item xs={12} md={12}>
                <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={"2.4rem"}
                    color={"rgba(0, 0, 0, 0.7)"}
                    style={{ textShadow: "rgb(90 90 90) 0.9px 0.9px 3px" }}>Experience</Typography>
            </Grid>
            <Grid item xs={12} >
                <Grid container justifyContent={"center"} marginBottom={"0.7rem"}>
                    <Baraimation />
                </Grid>
            </Grid>
            {/* Experience timeline */}
            <Grid container justifyContent={"center"} marginTop={"1rem"} >
                <Grid item xs={12} sm={10} md={10} lg={8}  >
                    {
                        verticalTimeLine.map((data, ind) => {
                            return (

                                <Experience_Vertical_Timeline key={ind}
                                    Title={data.Title}
                                    SubTitle={data.SubTitle}
                                    StartDate={data.StartDate}
                                    EndDate={data.EndDate}
                                    Desc={data.Desc}
                                    icon={data.icon}
                                />
                            )
                        })
                    }

                </Grid>


            </Grid>
        </Grid >

    )
}

export default Experience
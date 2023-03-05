import {Box, Button, Divider, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import Section from '../components/Section'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {useTheme} from '@emotion/react';
import "./Background.css"




const backgroundData = [
    {
        experience: [
            {
                name: 'Company Name',
                title: 'Job Title',
                description: 'Job Description',
            },
            {
                name: 'Company Name',
                title: 'Job Title',
                description: 'Job Description',
            }
        ],
        education: [
            {
                name: 'School Name',
                title: 'Degree',
                description: 'Description',
                gpa: '3',

            },

        ]
    },
]


const Background = () => {
    const theme = useTheme();
    const [active, setActive] = React.useState('Skills');
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    <style>

    </style>

    return (
        <Section height="100%" width="100%" p="4rem 2rem">

            <Typography variant="h2" textAlign="center" color="white" fontWeight="bold">
                Background
            </Typography>



            <Box margin="4rem auto" maxWidth="968px" >
                {/* Qualifications Tabs */}
                <Box className="qualification-container"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        gap="1rem"
                        className="qualification-tabs"
                        justifyContent="space-between"
                    >
                        <Box className="qualification-tab">
                            <Button
                                onClick={() => setActive('Education')}
                                name="Education"
                                className={
                                    `qualification-button 
                                    ${ active !== "Education" ? 'active' : '' }`}
                                sx={{
                                    backgroundColor: active !== "Education" ? theme.palette.white[700] : theme.palette.white[500],
                                    border: active !== "Education" ? `1px solid ${ theme.palette.primary[900] }` : `1px solid ${ theme.palette.white[600] }`,
                                    opacity: active !== "Education" ? ".4" : "1",
                                    scale: active !== "Education" ? ".95" : "1",
                                    color: active !== "Education" ? theme.palette.white[500] : theme.palette.white[900],
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".25rem",
                                    '&:hover': {
                                        scale: active !== "Education" && "1",
                                        opacity: active !== "Education" && ".7",
                                        transition: "all .5s ease-in-out",
                                        color: active !== "Education" ? theme.palette.white[500] : theme.palette.white[700],
                                    }
                                }}
                            >
                                <SchoolOutlinedIcon />
                                <Typography variant="h5" fontWeight="600" sx={{
                                    color: active !== "Education" ? theme.palette.white[600] : theme.palette.white[900],
                                    '&:hover': {
                                        color: active !== "Skills" ? theme.palette.white[500] : theme.palette.white[700],
                                    }
                                }}>
                                    Education
                                </Typography>
                            </Button>
                        </Box>

                        <Box className="qualification-tab">
                            <Button
                                onClick={() => setActive('Skills')}
                                className={
                                    `qualification-button 
                                    ${ active !== "Skills" ? 'active' : '' }`}
                                sx={{
                                    backgroundColor: active !== "Skills" ? theme.palette.white[700] : theme.palette.white[500],
                                    border: active !== "Skills" ? `1px solid ${ theme.palette.primary[900] }` : `1px solid ${ theme.palette.white[600] }`,
                                    opacity: active !== "Skills" ? ".4" : "1",
                                    scale: active !== "Skills" ? ".95" : "1",
                                    color: active !== "Skills" ? theme.palette.white[500] : theme.palette.white[900],
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".25rem",
                                    '&:hover': {
                                        scale: active !== "Skills" && "1",
                                        opacity: active !== "Skills" && ".7",
                                        transition: "all .5s ease-in-out",
                                        color: active !== "Skills" ? theme.palette.white[500] : theme.palette.white[500],
                                    }
                                }}
                            >
                                <FactCheckOutlinedIcon />
                                <Typography variant="h5" fontWeight="600"
                                    sx={{
                                        color: active !== "Skills" ? theme.palette.white[600] : theme.palette.white[900],
                                        '&:hover': {
                                            color: active !== "Skills" ? theme.palette.white[500] : theme.palette.white[700],
                                        }
                                    }}>
                                    Skills
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Qualification Section */}
                <Box
                    className="qualification__sections"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: isSmall ? "1fr" : ".8fr",
                        justifyContent: "center",
                        marginTop: "5rem",
                    }}
                >

                    {/* EDUCATION */}
                    {active === "Education" &&
                        <Box className="qualification__content">
                            <Box className="qualification__data">
                                <div>
                                    <Typography
                                        variant={isSmall ? "p" : "h4"}
                                        fontWeight="600"
                                        color={theme.palette.white[500]}
                                        className="qualification__title"
                                    >
                                        🎓 M.S - <span
                                            className="qualification__span"
                                        >Applied Information Technology</span>
                                    </Typography>

                                    <Typography variant="h5" className="qualification__subtitle">
                                        Towson University
                                    </Typography>

                                    <Box className="qualification__calendar" display="flex" alignItems="center" gap=".5rem">
                                        <CalendarMonthOutlinedIcon />
                                        <Typography variant="h5" color={theme.palette.white[600]}>
                                            2022 - Present
                                        </Typography>
                                    </Box>
                                </div>
                                <Box>
                                    <span className="qualification__rounder"> </span>
                                    <span className="qualification__line"> </span>

                                </Box>
                            </Box>
                            <Box className="qualification__data">
                                <div></div>
                                <Box>
                                    <span className="qualification__rounder"> </span>
                                    <span className="qualification__line"> </span>

                                </Box>
                                <div>
                                    <Typography
                                        variant="h4"
                                        fontWeight="600"
                                        color={theme.palette.white[500]}
                                        className="qualification__title"
                                    >
                                        👨🏽‍💻 M.S Certficate - <span className="qualification__span">Internet Application Development</span>
                                    </Typography>
                                    <Typography variant="h5" className="qualification__subtitle">
                                        Towson University
                                    </Typography>

                                    <Box
                                        className="qualification__calendar"
                                        display="flex"
                                        alignItems="center"
                                        gap=".5rem"
                                    >
                                        <CalendarMonthOutlinedIcon />
                                        <Typography
                                            variant="h5"
                                            color={theme.palette.white[600]}
                                        >
                                            2022 - 2023
                                        </Typography>
                                    </Box>
                                </div>

                            </Box>
                            <Box className="qualification__data">
                                <div>
                                    <Typography
                                        variant="h4"
                                        fontWeight="600"
                                        color={theme.palette.white[500]}
                                        className="qualification__title"
                                    >
                                        👨🏽‍🎓 Bachelor's Degree - <span className="qualification__span">Marketing</span>
                                    </Typography>
                                    <Typography variant="h5" className="qualification__subtitle">
                                        Towson University
                                    </Typography>

                                    <Box className="qualification__calendar" display="flex" alignItems="center" gap=".5rem">
                                        <CalendarMonthOutlinedIcon />
                                        <Typography variant="h5" color={theme.palette.white[600]}>
                                            2016 - 2020
                                        </Typography>
                                    </Box>
                                </div>
                                <Box>
                                    <span className="qualification__rounder"> </span>
                                    <span className="qualification__line"> </span>
                                </Box>
                            </Box>
                        </Box>
                    }

                    {/* SKILLS SECTION */}
                    {active === "Skills" && <Box className="qualification__content">
                        {/* First */}
                        <Box className="qualification__data">
                            <div>
                                <Typography
                                    variant="h4"
                                    fontWeight="600"
                                    color={theme.palette.white[500]}
                                    className="qualification__title"
                                >
                                    ✋🏽 Programming Languages
                                </Typography>
                                <Typography variant="h5" className="qualification__subtitle">
                                    HTML, CSS, JavaScript, Python
                                </Typography>

                                <Box className="qualification__calendar" display="flex" alignItems="center" gap=".5rem">
                                    <CalendarMonthOutlinedIcon />
                                    <Typography variant="h5" color={theme.palette.white[600]}>
                                        2022 - Present
                                    </Typography>
                                </Box>
                            </div>
                            <Box>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"> </span>

                            </Box>
                        </Box>
                        <Box className="qualification__data">
                            <div></div>
                            <Box>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"> </span>

                            </Box>
                            <div>
                                <Typography
                                    variant="h4"
                                    fontWeight="600"
                                    color={theme.palette.white[500]}
                                    className="qualification__title"
                                >
                                    🖥 Frontend Development
                                </Typography>
                                <Typography variant="h5" className="qualification__subtitle">
                                    React, Redux, Material UI, Bootstrap, Webflow
                                </Typography>

                                <Box
                                    className="qualification__calendar"
                                    display="flex"
                                    alignItems="center"
                                    gap=".5rem"
                                >
                                    <CalendarMonthOutlinedIcon />
                                    <Typography
                                        variant="h5"
                                        color={theme.palette.white[600]}
                                    >
                                        2020
                                    </Typography>
                                </Box>
                            </div>

                        </Box>
                        {/* Second */}
                        <Box className="qualification__data">
                            <div>
                                <Typography
                                    variant="h4"
                                    fontWeight="600"
                                    color={theme.palette.white[500]}
                                    className="qualification__title"

                                >
                                    🔐 Backend Development
                                </Typography>
                                <Typography variant="h5" className="qualification__subtitle">
                                    Node.js, Express.js, MongoDB, MySQL, Firebase, API's
                                </Typography>
                                <Box className="qualification__calendar" display="flex" alignItems="center" gap=".5rem">
                                    <CalendarMonthOutlinedIcon />
                                    <Typography variant="h5" color={theme.palette.white[600]}>
                                        2016 - 2020
                                    </Typography>
                                </Box>
                            </div>
                            <Box>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"> </span>
                            </Box>
                        </Box>
                    </Box>
                    }
                </Box>
            </Box>
        </Section >
    )
}

export default Background
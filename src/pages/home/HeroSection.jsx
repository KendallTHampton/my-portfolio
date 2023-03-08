import {Box, Button, Typography, useMediaQuery, useTheme} from '@mui/material'
import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react'
import Section from '../../components/Section'
import headshot from "../../assets/headshot.png"
import {GitHub, LinkedIn} from '@mui/icons-material'
import {motion} from 'framer-motion';
import resumePDF from "../../assets/Kendall_Hampton_Resume.pdf"


const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Section height={isMobile ? '100%' : "100vh"} p='6rem 2rem' display="flex" justifyContent="center">
            <Box
                heigh="100%"
                sx={{
                    m: "auto",
                    display: "flex",
                    flexDirection: isMobile ? "column-reverse" : "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}>
                <Box
                    height="auto"
                    width={isMobile ? "100%" : " 80%"}
                    p="2rem"
                    boxShadow={isMobile ? "none" : theme.shadows[12]}
                    sx={{
                        m: "auto",
                        display: "flex",
                        flexDirection: isMobile ? "column-reverse" : "row",
                        gap: "2rem",
                        alignItems: "center",
                        justifyContent: "space-between",

                    }}
                >

                    {/* LEFT SIDE  */}
                    <motion.div transition={{duration: 1, ease: "easeInOut"}} initial={{opacity: 0, x: "-150%"}} animate={{opacity: 1, x: "0"}}>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems={isMobile ? "center" : "start"}
                            textAlign={isMobile ? "center" : "start"}
                        >
                            <Typography
                                variant="h2" color={theme.palette.white[500]} fontWeight="bold" sx={{
                                    mb: "5px",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    gap: ".5rem",
                                    alignItems: "center",
                                    fontSize: {xs: '1rem', sm: '1.25rem', md: '2rem'}
                                }}>
                                Kendall Hampton |

                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Roboto',
                                        fontStyle: "italic",
                                        color: theme.palette.primary[500],
                                        fontWeight: 500,
                                        fontSize: isSmall ? ".9rem" : "1.5rem",
                                        textShadow: `0 0 3px 39px ${ theme.palette.primary[500] }, 0 0 0 4px ${ theme.palette.primary[500] }`,

                                    }}
                                    startDelay={1000}
                                    cursorColor="transparent"
                                    multiText={[
                                        'Fullstack Dev',
                                        'College Student',
                                        'Web Developer',
                                    ]}
                                    nextTextDelay={5000}
                                    multiTextLoop={true}
                                    typeSpeed={50}
                                />

                            </Typography>
                            <Typography
                                variant={isMobile ? "h5" : "h4"} color={theme.palette.background[300]}
                                textAlign={isMobile ? "start" : "start"}
                                fontWeight="500"
                                maxWidth="80%"
                            >
                                Welcome to my portfolio! I am a self-taught developer who is passionate about building web applications. I am open to new opportunities and would love to work with you!
                            </Typography>


                            {/*  CTA Buttons */}
                            <Box display='flex' gap="2rem" alignItems="center" justifyContent="center">
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        window.open(resumePDF, '_blank')
                                    }
                                    }
                                    sx={{
                                        fontSize: isSmall && ".7rem",
                                        marginTop: '1rem',
                                        border: `1px solid ${ theme.palette.white[600] } `,
                                        backgroundColor: "transparent",
                                        color: theme.palette.white[500],
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary[500],
                                            border: `1px solid ${ theme.palette.primary[500] } `,
                                        }

                                    }}>
                                    PDF Of My Resume
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontSize: isSmall && ".7rem",
                                        marginTop: '1rem',
                                        border: `1px solid ${ theme.palette.white[500] } `,
                                        backgroundColor: theme.palette.secondary[800],
                                        color: theme.palette.white[500],
                                        '&:hover': {
                                            backgroundColor: theme.palette.secondary[900],
                                        }
                                    }}>
                                    Check out my projects
                                </Button>
                            </Box>

                            <Box display='flex' m=" 1rem 0" gap="1rem">
                                <GitHub
                                    sx={{
                                        fontSize: "3rem",
                                        cursor: "pointer"

                                    }}
                                    onClick={() => {window.open("https://github.com/KendallTHampton", "_blank")}}
                                />
                                <LinkedIn
                                    sx={{
                                        fontSize: "3rem",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => {window.open("https://www.linkedin.com/in/kendall-hampton-5b1b1b1b9/", "_blank")}}
                                />
                            </Box>
                        </Box>
                    </motion.div>

                    {/* RIGHT SIDE*/}
                    <motion.div transition={{duration: 1, ease: "easeInOut"}}
                        initial={{
                            opacity: 0,
                            x: isMobile ? "0" : "200%",
                            y: isMobile ? "-200%" : "0"

                        }}
                        animate={{
                            opacity: 1,
                            x: isMobile ? "0" : "0",
                            y: isMobile ? "0" : "0"
                        }}>
                        <Box display='flex' alignItems='center' justifyContent="center">
                            <img
                                src={headshot}
                                alt="headshot"
                                width={isMobile ? "200px" : "250px"}
                                height={isMobile ? "225px" : "300px"}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                        </Box>
                    </motion.div>
                </Box >
            </Box>
        </Section >
    )
}

export default HeroSection
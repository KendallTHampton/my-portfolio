import {Box, Card, CardActions, CardContent, Collapse, Button, Typography, CardActionArea, useTheme, useMediaQuery, Tooltip} from '@mui/material'
import React, {useEffect, useState} from 'react'
import Section from '../../components/Section'
import {createClient} from '@sanity/client';

const client = createClient({
    projectId: process.env.REACT_APP_ID,
    dataset: process.env.REACT_APP_DATASET,
    useCdn: true,
});

const Projects = () => {
    const theme = useTheme();
    const [projects, setProjects] = useState([]);
    const [expandedStates, setExpandedStates] = useState(projects.map(() => false));

    useEffect(() => {
        async function fetchProjects() {
            const query = `*[_type == "project"] {
               name,
                description,
                 link,
                "image": image.asset->url,
             
            }`
            const result = await client.fetch(query);
            setProjects(result);
        }

        fetchProjects();

    }, []);


    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Section height="100%" p='4rem 2rem'>
            <Typography variant="h2" textAlign="center" color={theme.palette.white} fontWeight="bold">
                Projects
            </Typography>
            <Box
                mt="20px"
                padding="1rem"
                display="grid"
                gridTemplateColumns="repeat(3, minmax(0, auto))"
                gridAutoRows="minmax(0, auto)"

                alignContent="center"
                justifyItems="center"
                rowGap="20px"
                columnGap="3.33%"
                sx={{

                    gridTemplateColumns:
                        isSmall ? 'repeat(1, 1fr)' : isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

                }}
            >
                {projects.slice(1).map(({image, description, name, link}, index) => {
                    return (

                        <Card
                            mt="1rem"
                            key={name}
                            sx={{
                                backgroundColor: theme.palette.white[900],
                                borderRadius: "0.55rem",
                                boxShadow: `0 0 10px 2px rgba(0,0,0,.5) `,

                            }}
                        >
                            <CardActionArea
                                onClick={() => {
                                    window.open(link, "_blank")
                                }}
                            >
                                <Tooltip title={name} placement="top">
                                    <CardContent
                                        sx={{
                                            padding: '0',
                                            m: '0',
                                            flex: '1',
                                        }}
                                    >

                                        <img src={image} alt={name}
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                height: "100%",
                                                aspectRatio: "1.5/1",


                                            }} />
                                    </CardContent>
                                </Tooltip>
                            </CardActionArea>
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Button
                                    variant="primary"
                                    size="small"
                                    onClick={() => {
                                        const index = projects.findIndex((p) => p.name === name);
                                        const newExpandedStates = [...expandedStates];
                                        newExpandedStates[index] = !newExpandedStates[index];
                                        setExpandedStates(newExpandedStates);
                                    }}
                                    sx={{
                                        fontSize: '0.7rem',
                                        color: theme.palette.white[600],
                                    }}
                                >
                                    {name}: Details
                                </Button>

                                <Button
                                    size="small"
                                    onClick={() => {
                                        window.open(link, '_blank')
                                    }}
                                    sx={{
                                        color: theme.palette.white[600],
                                    }}
                                >
                                    Demo
                                </Button>
                            </CardActions>
                            <Collapse
                                in={expandedStates[index]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Typography
                                        variant="h4"
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        m="0.5rem 0"
                                        fontWeight='bold'
                                        lineHeight='1.5rem'
                                    >
                                        {description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    )
                })}
            </Box>




        </Section>

    )
}

export default Projects
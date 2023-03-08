import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setTheme} from "../store/reducers/theme";
import {useTheme, useMediaQuery} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {useNavigate} from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
    const pages = ["Home", "Resume", "All Projects"];
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div>
            <AppBar position='fixed'>
                <Box
                    maxWidth='xxl'
                    padding='0 2rem'
                    sx={{
                        bgcolor: theme.palette.background.default,
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        color: theme.palette.white,
                    }}>
                    <Typography
                        variant='h4'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            fontWeight: "500",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}>
                        Kendall's Portfolio
                    </Typography>

                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <NightsStayOutlinedIcon
                            onClick={() => dispatch(setTheme())}
                            sx={{
                                margin: isMobile ? "0rem" : "0 1.5rem",
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                    {isMobile ? (
                        // Render Drawer button for small screens
                        <Button
                            onClick={toggleDrawer}
                            sx={{
                                color: theme.palette.white[500],
                                display: {xs: "flex", md: "none"},
                            }}>
                            <MenuOutlinedIcon sx={{fontSize: "1.5rem"}} />
                        </Button>
                    ) : (
                        <Box display={{xs: "none", sm: "flex"}} gap='.5rem'>
                            {pages.map((page) => (
                                <Button
                                    onClick={
                                        page !== "All Projects"
                                            ? () => navigate(`/${ page.toLowerCase() }`)
                                            : () => {
                                                navigate("/projects");
                                            }
                                    }
                                    key={page}
                                    sx={{
                                        color: theme.palette.white[500],
                                        fontSize: ".9rem",
                                    }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Box>
            </AppBar>
            {/* Render Drawer for small screens */}
            <Drawer
                anchor='top'
                open={openDrawer}
                onClose={toggleDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        background: theme.palette.background.default,
                    },
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: "flex",
                        height: "300px",
                    },
                }}>
                <List
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        flex: 1,
                    }}>
                    {pages.map((page) => (
                        <ListItem
                            key={page}
                            onClick={
                                page !== "All Projects"
                                    ? () => {
                                        navigate(`/${ page.toLowerCase() }`)
                                        toggleDrawer();
                                    }
                                    : () => {
                                        navigate("/projects");
                                        toggleDrawer();
                                    }
                            }


                            sx={{
                                margin: "0 auto",
                                color: "white",
                                fontSize: "1.2rem",
                            }}>
                            {page}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div >
    );
};

export default Navbar;

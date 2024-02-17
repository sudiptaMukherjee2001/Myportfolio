import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from "react-router-dom"


const navItems = ["Home", "About me", "Contact"];

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backdropFilter: "blur(6px) saturate(200%)",

                backgroundColor: "rgba(17, 25, 40, 0.61)"
            }}>

                {
                    isMobile ?
                        <Toolbar>
                            <Box sx={{ display: { xs: "flex", sm: "block" }, width: "100%", justifyContent: "space-between  " }}>
                                {navItems.map((item, ind) =>
                                    ind === 0 ? (
                                        <NavLink to="/" key={item} activeClassName="active-link" >

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>
                                    ) : ind === 1 ? (
                                        <NavLink to="/about" key={item} activeClassName="active-link" >

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>

                                    ) : ind === 2 ? (
                                        <NavLink to="/contact" key={item} activeClassName="active-link">

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>
                                    ) : null

                                    // <Button key={item} sx={{ color: "#fff" }}>
                                    //     {item}
                                    // </Button>
                                )}
                            </Box>
                        </Toolbar>
                        : <Toolbar>

                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                            >
                                Sudipta Cv
                            </Typography>
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                {navItems.map((item, ind) =>
                                    ind === 0 ? (
                                        <NavLink to="/" key={item}>

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>
                                    ) : ind === 1 ? (
                                        <NavLink to="/about" key={item}>

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>

                                    ) : ind === 2 ? (
                                        <NavLink to="/contact" key={item}>

                                            <Button key={item} sx={{ color: "#fff" }}>
                                                {item}
                                            </Button>
                                        </NavLink>
                                    ) : null

                                    // <Button key={item} sx={{ color: "#fff" }}>
                                    //     {item}
                                    // </Button>
                                )}
                            </Box>
                        </Toolbar>
                }
            </AppBar>



        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;

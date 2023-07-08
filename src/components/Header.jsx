import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, IconButton } from "@mui/material";
import HeroPage from "./Home/HeroPage";
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx'
import logo from '../assets/unsolve.png'

const navItems = ["Home", "About", "Contact", "Works", 'Sales'];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const [open, setOpen] = React.useState(false);

  const hamburgerMenu = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(false)
  }

  console.log(open);
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        {open == true ? (
          <div className="main-nav">
          <div className="nav-container">
            <div className="closeIcon">
              <RxCross2 size={35} color="white" onClick={handleClick} />
            </div>
            <div className="nav-items">
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Typography fontSize='2rem' fontWeight='600' color='white' >{item}</Typography>
              </Button>
            ))}
            </div>
          </div>
          </div>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => hamburgerMenu()}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <GiHamburgerMenu />
                </IconButton>
                {/* <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  Unsolved Agency
                </Typography> */}
                <Box sx={{flexGrow : 1}} >
                  <img src={logo} alt="unsolved_logo" width={150} height={60} />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color: "#fff" }}>
                      {item}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        )}
      </ElevationScroll>
      <Toolbar />
      <HeroPage />
    </React.Fragment>
  );
}

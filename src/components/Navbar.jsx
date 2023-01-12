import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import img from '../assets/logo.png';


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="relative"
        sx={{ 
            backgroundColor: '#fff', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"

                >
                <img src={img} style ={{"width": "6rem","padding":"15px 0"}}/>
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' }, color:"#14192d"}}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#301c6c',
                                    borderRadius:'20px',
                                    "&:hover": {
                                        backgroundColor: '#111',
                                        color: '#fff',
                                        transition: "1s ease",
                                        borderRadius:"20px"
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;

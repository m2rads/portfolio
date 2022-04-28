import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import './Menu.css'

function Menu() {
    let navigate = useNavigate();

    return (
        <AppBar color="primary" position="static" >
                <Toolbar id='top' className='container'>
                    <Button sx={{fontSize: '1em'}} onClick={()=>navigate("/")} color='inherit'> 
                        {/* <Typography sx={{fontSize: 'large'}}  color='inherit' component='div' > */}
                        &#60; M2rads &#47; &#62;
                        {/* </Typography> */}
                    </Button>
                    <Box>
                        <Button sx={{ml: '2em', fontSize: '1em'}} color='inherit' onClick={()=>navigate("/")}>Home</Button>
                        <Button sx={{ml: '2em', fontSize: '1em'}} color='inherit' onClick={()=>navigate("/projects")}>Projects</Button>
                        <Button sx={{ml: '2em', fontSize: '1em'}} color='inherit' onClick={()=>navigate("/blog")}>Wip</Button>
                        <Button sx={{ml: '2em', fontSize: '1em'}} color='inherit' onClick={()=>navigate("/about")}>About</Button>
                    </Box>
                </Toolbar>
        </AppBar>
    )
}

export default Menu
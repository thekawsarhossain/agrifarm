import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import logo from '../../images/logo.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Container>
            <Grid container sx={{ textAlign: 'start', py: 3 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* logo option here  */}
                <Grid item xs={2} sm={4} md={3}>
                    <img src={logo} alt="" />
                </Grid>

                {/* search option here  */}
                <Grid item xs={2} sm={4} md={6} sx={{ mt: 2 }}>
                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center', width: 540, boxShadow: 0, border: 1, borderColor: 'grey.500', borderRadius: 16 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search here "
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                        <IconButton type="submit" sx={{
                            bgcolor: '#0EA360', height: 'max-content'
                        }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>

                {/* user information here  */}
                <Grid item xs={2} sm={4} md={3} sx={{ mt: 2 }}>
                    <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Box sx={{ mx: 1, p: 1, bgcolor: '#DAE8DC', borderRadius: '50%' }}><FavoriteBorderIcon /></Box>
                        <Box sx={{ mx: 1, p: 1, bgcolor: '#EFE9CB', borderRadius: '50%' }}><PersonOutlineIcon /></Box>
                        <Box sx={{ mx: 1, p: 1, bgcolor: '#E9DBD3', borderRadius: '50%' }}><ShoppingCartIcon /></Box>
                    </Box>
                </Grid>
            </Grid >
        </Container >
    );
};

export default SearchBar;
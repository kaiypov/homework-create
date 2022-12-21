import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ProductsList = () => {
    return (
        <Grid item md={9}>
            <Box sx={{display: "flex"}}>
                Products
            </Box>
        </Grid>
    );
};

export default ProductsList;
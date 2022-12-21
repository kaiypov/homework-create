import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ProductsList from '../components/Products/ProductsList';

const ProductsPage = () => {
    return (
        <Box>
          <Grid container spacing={3}>
            <ProductsList/>
          </Grid>
        </Box>
    );
};

export default ProductsPage;
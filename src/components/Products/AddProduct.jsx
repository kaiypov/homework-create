import React, { useContext, useState } from 'react';
import { productsContext } from '../contexts/productsContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AddProduct = () => {
    const {addProduct} = useContext(productsContext)

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    function handleClick() {
        let newProduct = {
          name:name,
          type:type,
          description:description,
          description:price,
          img:img,
          
        };
        addProduct(newProduct);
        setName("");
        setType("");
        setDescription("");
        setPrice("");
        setImg("");
      
      }
    return (
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <TextField
                id="outlined-name"
                label="Type"
                value={type}
                onChange={(e)=> setType(e.target.value)}
              />
              <TextField
                id="outlined-name"
                label="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
              />
              <TextField
                id="outlined-name"
                label="Price"
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
              />
              <TextField
                id="outlined-uncontrolled"
                label="Img"
                value={img}
                onChange={(e)=> setImg(e.target.value)}
              />
                <Button onClick={handleClick}>Add</Button>
            </Box>
          );
        }
        

export default AddProduct;
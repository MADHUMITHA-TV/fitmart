import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useEffect, useState } from "react";

import {
  getProducts,
  getCategories,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../services/adminApi";

export default function AdminProducts() {

  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);

  const [open,setOpen]=useState(false);

  const [editing,setEditing]=useState(false);

  const [message,setMessage]=useState("");

  const [search,setSearch]=useState("");

  const [form,setForm]=useState({

    id:null,

    name:"",

    description:"",

    brand:"",

    price:"",

    stockQuantity:"",

    imageUrl:"",

    categoryId:""

  });

  useEffect(()=>{

    loadProducts();

    loadCategories();

  },[]);

  const loadProducts=async()=>{

    const res=await getProducts();

    setProducts(res.data.data);

  }

  const loadCategories=async()=>{

    const res=await getCategories();

    setCategories(res.data.data);

  }

  const handleChange=(e)=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });

  }

  const save=async()=>{

    if(editing){

      await updateProduct(form.id,form);

      setMessage("Product Updated");

    }else{

      await addProduct(form);

      setMessage("Product Added");

    }

    loadProducts();

    setOpen(false);

  }

  const edit=(product)=>{

    setEditing(true);

    setForm(product);

    setOpen(true);

  }

  const remove=async(id)=>{

    if(!window.confirm("Delete Product?")) return;

    await deleteProduct(id);

    loadProducts();

  }

  const filtered=products.filter(p=>

    p.name.toLowerCase()

    .includes(search.toLowerCase())

  );

  return(

<Box p={4}>

<Typography
variant="h4"
fontWeight="bold"
mb={3}
>

Products Management

</Typography>

<Box
display="flex"
justifyContent="space-between"
mb={3}
>

<TextField

label="Search Product"

value={search}

onChange={(e)=>setSearch(e.target.value)}

sx={{width:300}}

/>

<Button

variant="contained"

onClick={()=>{

setEditing(false);

setForm({

name:"",

description:"",

brand:"",

price:"",

stockQuantity:"",

imageUrl:"",

categoryId:""

});

setOpen(true);

}}

>

Add Product

</Button>

</Box>

<Paper>

<Table>

<TableHead>

<TableRow>

<TableCell>Image</TableCell>

<TableCell>Name</TableCell>

<TableCell>Brand</TableCell>

<TableCell>Category</TableCell>

<TableCell>Price</TableCell>

<TableCell>Stock</TableCell>

<TableCell>Sold</TableCell>

<TableCell>Actions</TableCell>

</TableRow>

</TableHead>

<TableBody>

{filtered.map(product=>(

<TableRow key={product.id}>

<TableCell>

<img

src={product.imageUrl}

width={60}

height={60}

style={{objectFit:"cover"}}

/>

</TableCell>

<TableCell>{product.name}</TableCell>

<TableCell>{product.brand}</TableCell>

<TableCell>{product.categoryName}</TableCell>

<TableCell>₹{product.price}</TableCell>

<TableCell>{product.stockQuantity}</TableCell>

<TableCell>{product.soldQuantity}</TableCell>

<TableCell>

<IconButton

onClick={()=>edit(product)}

>

<EditIcon/>

</IconButton>

<IconButton

color="error"

onClick={()=>remove(product.id)}

>

<DeleteIcon/>

</IconButton>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</Paper>

<Dialog

open={open}

fullWidth

maxWidth="sm"

>

<DialogTitle>

{editing?"Edit Product":"Add Product"}

</DialogTitle>

<DialogContent>

<TextField

margin="dense"

label="Name"

fullWidth

name="name"

value={form.name}

onChange={handleChange}

/>

<TextField

margin="dense"

label="Description"

fullWidth

name="description"

value={form.description}

onChange={handleChange}

/>

<TextField

margin="dense"

label="Brand"

fullWidth

name="brand"

value={form.brand}

onChange={handleChange}

/>

<TextField

margin="dense"

label="Price"

fullWidth

name="price"

value={form.price}

onChange={handleChange}

/>

<TextField

margin="dense"

label="Stock"

fullWidth

name="stockQuantity"

value={form.stockQuantity}

onChange={handleChange}

/>

<TextField

margin="dense"

label="Image URL"

fullWidth

name="imageUrl"

value={form.imageUrl}

onChange={handleChange}

/>

<TextField

select

margin="dense"

label="Category"

fullWidth

name="categoryId"

value={form.categoryId}

onChange={handleChange}

>

{categories.map(category=>(

<MenuItem

key={category.id}

value={category.id}

>

{category.name}

</MenuItem>

))}

</TextField>

</DialogContent>

<DialogActions>

<Button

onClick={()=>setOpen(false)}

>

Cancel

</Button>

<Button

variant="contained"

onClick={save}

>

Save

</Button>

</DialogActions>

</Dialog>

<Snackbar

open={message!==""}

autoHideDuration={3000}

onClose={()=>setMessage("")}

>

<Alert severity="success">

{message}

</Alert>

</Snackbar>

</Box>

  );

}
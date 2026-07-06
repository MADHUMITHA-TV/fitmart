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
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";

import { useEffect, useState } from "react";

import {
  getUsers,
  deleteUser,
} from "../../services/adminApi";

export default function AdminUsers() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");

  const loadUsers = async () => {

    try {

      const res = await getUsers();

      setUsers(res.data.data);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadUsers();

  }, []);

  const handleDelete = async(id)=>{

    if(!window.confirm("Delete user?")) return;

    await deleteUser(id);

    setMessage("User deleted");

    loadUsers();

  }

  const filtered = users.filter((u)=>

    (`${u.firstName} ${u.lastName}`)

      .toLowerCase()

      .includes(search.toLowerCase())

  );

  if(loading)

    return(

      <Box display="flex" justifyContent="center" mt={10}>

        <CircularProgress/>

      </Box>

    );

  return(

<Box p={4}>

<Typography
variant="h4"
fontWeight="bold"
mb={3}
>

Users Management

</Typography>

<TextField

fullWidth

label="Search User"

sx={{mb:3}}

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

<Paper elevation={3}>

<Table>

<TableHead>

<TableRow>

<TableCell>ID</TableCell>

<TableCell>Name</TableCell>

<TableCell>Email</TableCell>

<TableCell>Phone</TableCell>

<TableCell>Role</TableCell>

<TableCell>Total Orders</TableCell>

<TableCell>Total Spent</TableCell>

<TableCell>Action</TableCell>

</TableRow>

</TableHead>

<TableBody>

{filtered.map((user)=>(

<TableRow key={user.id} hover>

<TableCell>

{user.id}

</TableCell>

<TableCell>

{user.firstName} {user.lastName}

</TableCell>

<TableCell>

{user.email}

</TableCell>

<TableCell>

{user.phone}

</TableCell>

<TableCell>

{user.roles?.map(role=>(

<Chip

key={role}

label={role}

size="small"

sx={{mr:1}}

/>

))}

</TableCell>

<TableCell>

{user.totalOrders}

</TableCell>

<TableCell>

₹{user.totalSpent}

</TableCell>

<TableCell>

<Button

variant="contained"

color="error"

onClick={()=>handleDelete(user.id)}

>

Delete

</Button>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</Paper>

<Snackbar

open={message!==""}

autoHideDuration={2500}

onClose={()=>setMessage("")}

>

<Alert severity="success">

{message}

</Alert>

</Snackbar>

</Box>

);

}
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";

import { useEffect, useState } from "react";

import {
  getOrders,
  updateOrderStatus,
  deleteOrder,
} from "../../services/adminApi";

export default function AdminOrders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");

  const loadOrders = async () => {
  try {
    const res = await getOrders();

    console.log("Orders API:", res.data);

    setOrders(res.data.data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {

    loadOrders();

  }, []);

  const handleStatus = async (id, status) => {

    try {

      await updateOrderStatus(id, status);

      setMessage("Order updated successfully");

      loadOrders();

    } catch {

      setMessage("Update failed");

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this order?")) return;

    await deleteOrder(id);

    loadOrders();

  };

  const getColor = (status) => {

    switch (status) {

      case "PENDING":
        return "warning";

      case "PROCESSING":
        return "info";

      case "SHIPPED":
        return "primary";

      case "OUT_FOR_DELIVERY":
        return "secondary";

      case "DELIVERED":
        return "success";

      case "CANCELLED":
        return "error";

      default:
        return "default";
    }
  };
  const filtered = orders.filter((o) =>
  o.customerName
    ?.toLowerCase()
    .includes(search.toLowerCase())
);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  return (

    <Box p={4}>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Orders Management
      </Typography>

      <TextField
        label="Search Customer"
        fullWidth
        sx={{ mb:3 }}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <Paper elevation={3}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell><b>ID</b></TableCell>

              <TableCell><b>Customer</b></TableCell>

              <TableCell><b>Total</b></TableCell>

              <TableCell><b>Status</b></TableCell>

              <TableCell><b>Change Status</b></TableCell>

              <TableCell><b>Actions</b></TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {filtered.map((order) => (

              <TableRow key={order.orderId} hover>

  <TableCell>{order.orderId}</TableCell>

  <TableCell>{order.customerName}</TableCell>

                <TableCell>

                  ₹{order.totalAmount}

                </TableCell>

                <TableCell>

                  <Chip

                    label={order.status}

                    color={getColor(order.status)}

                  />

                </TableCell>

                <TableCell>

                  <Select

                    size="small"

                    defaultValue={order.status}

                    onChange={(e)=>

                      handleStatus(order.orderId, e.target.value)
                    }

                  >

                    <MenuItem value="PENDING">

                      Pending

                    </MenuItem>

                    <MenuItem value="PROCESSING">

                      Processing

                    </MenuItem>

                    <MenuItem value="SHIPPED">

                      Shipped

                    </MenuItem>

                    <MenuItem value="OUT_FOR_DELIVERY">

                      Out For Delivery

                    </MenuItem>

                    <MenuItem value="DELIVERED">

                      Delivered

                    </MenuItem>

                    <MenuItem value="CANCELLED">

                      Cancelled

                    </MenuItem>

                  </Select>

                </TableCell>

                <TableCell>

                  <Button

                    color="error"

                    variant="contained"

                    onClick={()=>

                      handleDelete(order.orderId)

                    }

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
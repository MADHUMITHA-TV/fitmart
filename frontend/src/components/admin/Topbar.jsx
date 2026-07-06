import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

import { useSelector } from "react-redux";

function Topbar() {

  const { user } = useSelector(
    (state) => state.auth
  );

  return (

    <AppBar
  position="fixed"
  sx={{
    width: "calc(100% - 250px)",
    ml: "250px",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: 1,
  }}
>

      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <Typography>

            Welcome,

            {user?.firstName}

          </Typography>

          <Avatar>

            {user?.firstName?.charAt(0)}

          </Avatar>

        </Box>

      </Toolbar>

    </AppBar>

  );

}

export default Topbar;
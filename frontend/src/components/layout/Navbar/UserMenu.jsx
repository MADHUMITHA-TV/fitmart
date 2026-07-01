import {
    Menu,
    MenuItem
} from "@mui/material";

function UserMenu({
    anchorEl,
    open,
    onClose,
    authenticated,
    navigate,
    onLogout
}) {

    return (

        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >

            {authenticated ? (

                <>
                    <MenuItem onClick={()=>{
                        navigate("/profile");
                        onClose();
                    }}>
                        Profile
                    </MenuItem>

                    <MenuItem onClick={()=>{
                        onLogout();
                        onClose();
                    }}>
                        Logout
                    </MenuItem>
                </>

            ) : (

                <>
                    <MenuItem onClick={()=>{
                        navigate("/login");
                        onClose();
                    }}>
                        Login
                    </MenuItem>

                    <MenuItem onClick={()=>{
                        navigate("/register");
                        onClose();
                    }}>
                        Register
                    </MenuItem>
                </>

            )}

        </Menu>

    );
}

export default UserMenu;
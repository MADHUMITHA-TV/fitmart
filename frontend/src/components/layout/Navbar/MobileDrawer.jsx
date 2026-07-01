import {
Drawer,
List,
ListItem,
ListItemButton,
ListItemText
} from "@mui/material";

const pages=[
"/",
"/products",
"/about",
"/contact"
];

function MobileDrawer({
open,
onClose,
navigate
}){

return(

<Drawer
anchor="left"
open={open}
onClose={onClose}
>

<List sx={{width:250}}>

{pages.map(page=>(

<ListItem
key={page}
disablePadding
>

<ListItemButton
onClick={()=>{
navigate(page);
onClose();
}}
>

<ListItemText primary={page===" /" ? "Home" : page.replace("/","")} />

</ListItemButton>

</ListItem>

))}

</List>

</Drawer>

);

}

export default MobileDrawer;
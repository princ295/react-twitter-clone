import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ListItem, List, IconButton, Button } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu: React.FC = (): React.ReactElement => {
  return (
    <List>
      <ListItem sx={{ px: 1, marginBottom: 1 }}>
        <IconButton>
          <TwitterIcon color="primary" fontSize="large" />
        </IconButton>
      </ListItem>
      {[
        { to: "/", label: "Home", icon: <HomeIcon sx={{ fontSize: 28 }} /> },
        { to: "/explore", label: "Explore", icon: <ExploreIcon sx={{ fontSize: 28 }} /> },
        { to: "/notifications", label: "Notifications", icon: <NotificationsIcon sx={{ fontSize: 28 }} /> },
        { to: "/messages", label: "Messages", icon: <MailOutlineIcon fontSize="medium" sx={{ fontSize: 28 }} /> },
        { to: "/bookmarks", label: "Bookmarks", icon: <BookmarkBorderIcon sx={{ fontSize: 28 }} /> },
        { to: "/lists", label: "Lists", icon: <ListAltIcon sx={{ fontSize: 28 }} /> },
        { to: "/profile", label: "Profile", icon: <PermIdentityIcon fontSize="large" /> },
        { to: "/more", label: "More", icon: <MoreHorizIcon sx={{ fontSize: 28 }} /> },
      ].map((el, index) => (
        <SidebarMenuItem key={index} {...el} />
      ))}
      <ListItem>
        <Button variant="contained" fullWidth>Tweet</Button>
      </ListItem>
    </List>
  )
}
export default SidebarMenu;
import React from "react";
import { Hidden, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarMenuItemProps {
  to: string,
  label: string,
  icon: React.ReactElement
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ to, label, icon }): React.ReactElement => {
  return (
    <ListItem
      component={Link}
      to={to}
    >
      <ListItemIcon
        sx={{ minWidth: 'auto', mr: 1.7 }}
      >
        {icon}
      </ListItemIcon>
      <Hidden smDown>
        <ListItemText
          primary={<span
            style={{
              fontSize: "19px",
              fontWeight: 700,
            }}>
            {label}
          </span>}
        />
      </Hidden>
    </ListItem>
  )
}

export default SidebarMenuItem;
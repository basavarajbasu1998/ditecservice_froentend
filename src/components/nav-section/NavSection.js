import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
//
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <>
      <List disablePadding sx={{ p: 1 }}>
        {renderMenuItems(data)}
      </List>
    </>
  );
}

const renderMenuItems = (items) => {
  return items.map((item) => {
    if (item.children && item.children.length > 0) {
      const [open, setOpen] = useState(false);

      const handleToggleCollapse = () => {
        setOpen(!open);
      };

      return (
        <React.Fragment key={item.title}>
          <ListItem onClick={handleToggleCollapse}>
            <NavItem key={item.title} item={item} />
            {open ? <ExpandLess color="white" /> : <ExpandMore color="white" />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List sx={{ ml: 3 }} component="div" disablePadding>
              {renderMenuItems(item.children)}
            </List>
          </Collapse>
        </React.Fragment>
      );
    } else {
      return (
        <ListItem key={item.title}>
          <NavItem key={item.title} item={item} />
        </ListItem>
      );
    }
  });
};

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info, open } = item;

  return (
    <StyledNavItem
      component={path ? RouterLink : "div"}
      to={path}
      sx={{
        "&.active": {
          color: "white",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      {/* <SubdirectoryArrowRightIcon /> */}
      <StyledNavItemIcon color="white">{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}

      {open}
    </StyledNavItem>
  );
}

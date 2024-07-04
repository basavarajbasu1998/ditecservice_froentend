import { faker } from "@faker-js/faker";
import { set } from "date-fns";
import { useEffect, useLayoutEffect, useState } from "react";
// @mui
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListSubheader,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
// utils
// components
import { useDispatch, useSelector } from "react-redux";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";
import { loadState } from "../../../helper/SessionStorage";
import CircularLoading from "../../../utils/CircularLoading";
import NotificationItem from "./NotificationItem";
import {
  getAllNotification,
  reduceNotificationCount,
} from "../../../redux/subaua/subauaAction";

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: "Document Verification",
    description: "Document Verification has been done",
    avatar: null,
    type: "done",
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  // {
  //   id: faker.datatype.uuid(),
  //   title: faker.name.fullName(),
  //   description: 'answered to your comment on the Minimal',
  //   avatar: '/assets/images/avatars/avatar_2.jpg',
  //   type: 'friend_interactive',
  //   createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
  //   isUnRead: true,
  // },
  // {
  //   id: faker.datatype.uuid(),
  //   title: "You have new message",
  //   description: "5 unread messages",
  //   avatar: null,
  //   type: "chat_message",
  //   createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
  //   isUnRead: false,
  // },
  // {
  //   id: faker.datatype.uuid(),
  //   title: 'You have new mail',
  //   description: 'sent from Guido Padberg',
  //   avatar: null,
  //   type: 'mail',
  //   createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
  //   isUnRead: false,
  // },
  // {
  //   id: faker.datatype.uuid(),
  //   title: 'Delivery processing',
  //   description: 'Your order is being shipped',
  //   avatar: null,
  //   type: 'order_shipped',
  //   createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
  //   isUnRead: false,
  // },
];

const NotificationsPopover = () => {
  const stateData = useSelector((state) => state.subaua);

  const { response, allNotifications, buttonLoading } = stateData;

  // console.log("form state Data", allNotifications);

  const [notifications, setNotifications] = useState(allNotifications);
  const [totalUnRead, setTotalUnRead] = useState(0);
  const dispatch = useDispatch();

  const retrievedValue = loadState("subauaid", "Default Value");

  // console.log("after setting local variable data", notifications);

  useLayoutEffect(() => {
    const request = {
      subAuaId: retrievedValue,
    };
    dispatch(getAllNotification(request));
  }, []);

  useLayoutEffect(() => {
    setNotifications(allNotifications);
    setTotalUnRead(
      notifications?.length
        ? notifications?.filter((item) => item?.isUnRead === true)?.length
        : 0
    );
  }, [allNotifications]);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications?.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
    setTotalUnRead(
      notifications?.length
        ? notifications?.filter((item) => item?.isUnRead === true)?.length
        : 0
    );
  };

  const markToRead = (id) => {
    console.log(id);

    // Use map to transform the notifications array and find the changed status
    const updatedNotifications = notifications?.map((notification) => {
      if (notification?.id === id) {
        return {
          ...notification,
          isUnRead: false,
        };
      }
      return notification; // Return unchanged notifications
    });
    setNotifications(updatedNotifications);

    const request = {
      subAuaId: retrievedValue,
      id: id,
    };
    dispatch(reduceNotificationCount(request));

    setTotalUnRead(
      notifications?.length
        ? notifications?.filter((item) => item?.isUnRead === true)?.length
        : 0
    );

    // Use filter to remove the old notification with the specified id
    // const newNotifications = updatedNotifications?.filter(
    //   (notification) => notification?.id !== id
    // );

    // console.log("new notifiations", newNotifications);

    // Set the new notifications array
    // setNotifications(newNotifications);
  };

  // if (buttonLoading || notifications.length == 0) {
  //   return (
  //     <>
  //       <CircularLoading />
  //     </>
  //   );
  // }

  return (
    <>
      <IconButton
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ height: { xs: 340, md: "105vh" } }}>
          {notifications && Object.keys(notifications)?.length !== 0 && (
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline", color: "navy" }}
                >
                  New
                </ListSubheader>
              }
            >
              {notifications &&
                Object.keys(notifications)?.length !== 0 &&
                notifications
                  ?.slice(0, 2)
                  ?.map((notification) => (
                    <NotificationItem
                      onClick={markToRead}
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
            </List>
          )}

          {notifications && Object.keys(notifications)?.length !== 0 && (
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline", color: "navy" }}
                >
                  Before that
                </ListSubheader>
              }
            >
              {notifications &&
                Object.keys(notifications)?.length != 0 &&
                notifications
                  ?.slice(2)
                  ?.map((notification) => (
                    <NotificationItem
                      onClick={markToRead}
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
            </List>
          )}
        </Scrollbar>

        <Divider sx={{ borderStyle: "dashed" }} />

        {notifications && Object.keys(notifications)?.length !== 0 && (
          <Box sx={{ p: 1 }}>
            <Button onClick={handleMarkAllAsRead} fullWidth disableRipple>
              Read All
            </Button>
          </Box>
        )}
      </Popover>
    </>
  );
};

export default NotificationsPopover;

import PropTypes from "prop-types";
import React from "react";
// @mui
import { ListItemButton, ListItemText, Typography } from "@mui/material";
// utils
import { fToNow } from "../../../utils/formatTime";
// components
import Iconify from "../../../components/iconify";

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

export default function NotificationItem({ notification, onClick }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      onClick={() => onClick(notification?.id)}
      sx={{
        py: 1,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      {/* <ListItemAvatar>
          <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
        </ListItemAvatar> */}
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Iconify
              icon="eva:clock-outline"
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            {fToNow(notification?.createdDate)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification?.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {highlightAcceptedRejected(notification?.description)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: notification.avatar ? (
      <img alt={notification.title} src={notification.avatar} />
    ) : null,
    title,
  };
}

function highlightAcceptedRejected(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Map over the words and apply custom styling to "Accepted" and "Rejected"
  const formattedSentence = words.map((word, index) => {
    if (word.toLowerCase() === "accepted") {
      return (
        <span key={index} style={{ color: "green" }}>
          {word}
        </span>
      );
    } else if (word.toLowerCase() === "rejected") {
      return (
        <span key={index} style={{ color: "red" }}>
          {word}
        </span>
      );
    }
    return <span key={index}>{word}</span>;
  });

  const sentenceWithSpaces = formattedSentence.map((word, index) => (
    <React.Fragment key={index}>
      {word}
      {index < words.length - 1 && " "} {/* Add a space if not the last word */}
    </React.Fragment>
  ));

  return <div>{sentenceWithSpaces}</div>;
}

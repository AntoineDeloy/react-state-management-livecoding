import { useEffect, useState } from "react";
import EventHelper, { EventName } from "../../utils/EventHelper";
import "./notification.scss";

export enum NotificationType {
  SUCCESS = "success",
}

const TIMEOUT = 5000;

interface NotificationContentType {
  message?: string;
}

const Notification = () => {
  const [notificationContent, setNotificationContent] =
    useState<NotificationContentType | null>(null);

  const resetNotification = () => {
    setNotificationContent(null);
  };

  useEffect(() => {
    EventHelper.on(EventName.NOTIFY, () => {setNotificationContent({message: 'SUCCESS'})});

    const notificationTimeout = setTimeout(() => {
      resetNotification();
    }, TIMEOUT);

    return () => {
      EventHelper.off(EventName.NOTIFY, () => {setNotificationContent({message: 'SUCCESS'})});
      clearTimeout(notificationTimeout);
    };
  });

  return notificationContent?.message ? (
    <aside className="notification-container">
      <div className="notification-container__alert-success">{notificationContent.message}</div>
    </aside>
  ) : null;
};

export default Notification;

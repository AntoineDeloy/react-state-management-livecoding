import { useCallback, useEffect, useState } from "react";
import EventHelper, { EventName } from "../../utils/EventHelper";
import "./notification.scss";

export enum NotificationType {
  SUCCESS = "success",
}

const TIMEOUT = 5000;
const DEFAULT_NOTIFICATION = { message: NotificationType.SUCCESS };

interface NotificationContentType {
  message?: string;
}

const Notification = () => {
  const [notificationContent, setNotificationContent] =
    useState<NotificationContentType | null>(DEFAULT_NOTIFICATION);

  const resetNotification = () => {
    setNotificationContent(DEFAULT_NOTIFICATION);
  };

  const triggerNotification = useCallback((event) => {
    resetNotification();

    if (event) {
      setNotificationContent({
        message: event.detail.messageTranslationKey
          ? event.detail.messageTranslationKey
          : undefined,
      });
    }
  }, []);

  useEffect(() => {
    EventHelper.on(EventName.NOTIFY, triggerNotification);

    const notificationTimeout = setTimeout(() => {
      resetNotification();
    }, TIMEOUT);

    return () => {
      EventHelper.off(EventName.NOTIFY, triggerNotification);
      clearTimeout(notificationTimeout);
    };
  });

  return notificationContent?.message ? (
    <aside data-testid="notification" className="notification-container">
      <div className="alert">{notificationContent.message}</div>
    </aside>
  ) : null;
};

export default Notification;

export enum EventName {
  NOTIFY = "query:notify",
}

export default class EventHelper {
  static on(eventName: string, listener: EventListener): void {
    document.addEventListener(eventName, listener);
  }

  static off(eventName: string, listener: EventListener): void {
    document.removeEventListener(eventName, listener);
  }

  static trigger(eventName: string, data?: any): void {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }
}

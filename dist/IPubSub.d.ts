export interface IPubSubEvent {
    name: string;
}
export declare type PubSubListener = (event: IPubSubEvent, ...args: any[]) => void;
export interface IPubSub {
    subscribe(eventName: string, listener: PubSubListener): void;
    once(eventName: string, listener: PubSubListener): void;
    unsubscribe(eventName: string, listener: PubSubListener): void;
    publish(eventName: string, ...args: any[]): void;
    clearAllSubscriptions(): void;
}

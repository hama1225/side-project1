/// <reference types="react-scripts" />

declare module "*.txt" {
    const content: string;
    export default content;
}

declare module "*.yaml" {
    const content: any;
    export default content;
}

declare module "*.yml" {
    const content: any;
    export default content;
}

declare module "*.md" {
    const content: string;
    export default content;
}

declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    __INITIAL_STATE__?: any;
    FrogAndroid?: any;
    FrogMobile: {
        login: (token: string) => void;
        logout: () => void;
        changeHeader: (...args: any[]) => any;
        share(...args: any[]): Promise<void>;
    };
    webkit: {
        messageHandlers: any;
    };
    IMP: any;
    IS_CLIENT?: string;
    IS_DEV?: boolean;
    getCurrentPageHeader: any;
    onPopKBAuthMark: (...args: any[]) => any;
}

declare namespace NodeJS {}

declare var gtag = any;

declare var webkit = any;

declare module "react-swipeable-routes";

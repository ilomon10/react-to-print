/// <reference types="react" />
import type { Font } from "./font";
export interface ITriggerProps<T> {
    onClick: (event?: unknown) => void;
    ref: (v: T) => void;
}
export interface IReactToPrintProps {
    bodyClass?: string;
    children?: React.ReactNode;
    content?: () => React.ReactInstance | null;
    copyStyles?: boolean;
    documentTitle?: string;
    fonts?: Font[];
    nonce?: string;
    onAfterPrint?: () => void;
    onBeforeGetContent?: () => void | Promise<any>;
    onBeforePrint?: () => void | Promise<any>;
    onPrintError?: (errorLocation: "onBeforeGetContent" | "onBeforePrint" | "print", error: Error) => void;
    pageStyle?: string | (() => string);
    print?: (target: HTMLIFrameElement) => Promise<any>;
    removeAfterPrint?: boolean;
    suppressErrors?: boolean;
    trigger?: <T>() => React.ReactElement<ITriggerProps<T>>;
    srcdoc?: string;
}

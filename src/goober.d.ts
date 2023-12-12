import 'goober';

declare module 'goober' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            subtle: string;
            secondary: string;
            subtitle: string;
            background: string;
            elevated: string;
            border: string;
        }
    }
}
import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string
        primary: string
        secondary: string,
        inverted: string,
        colors: {
            primary: string,
            secondary: string,
            success: string,
            info: string,
            warning: string,
            danger: string
        },
    }
}
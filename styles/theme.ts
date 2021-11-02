import { useContext } from 'react'
import {ThemeContext} from 'styled-components'

export type Theme = {
    palette : {
        dark : {
            primary : string,
            secondary : string
        },
        light : {
            primary : string
            secondary : string
        },
    },
    shadows : {
        hard : {
            right : string,
            bottom:string
        },
        soft : {
            bottomRight : string
        }
    },
    text : {
        siteTitle : string,
        siteSubtitle : string,
        menu:string,
        headings : string,
        text : string
    },
    breakpoints : {
        sm : string,
        md: string,
        lg:string,
        xlg: string
    }
}

export const theme:Theme = {
    palette : {
        dark : {
            primary : '#34312e',
            secondary : '#82766B'
        },
        light : {
            primary : '#F2EFE2',
            secondary : "#EB2E5B"
        },
    },
    shadows : {
        hard : {
            right : "7px -1px 1px 0px #00000040",
            bottom: "0px 7px 1px 0px #00000040",
        },
        soft : {
            bottomRight : ""
        }
    },
    text : {
        siteTitle : '"Viaoda Libre", serif',
        siteSubtitle : '"Mr Bedfort", handwriting',
        menu: '"Patrick Hand", sans-serif',
        headings : '"Galada", handwriting',
        text : '"Neuton", serif'
    },
    breakpoints : {
        sm : "425px",
        md: "748px",
        lg: "1024px",
        xlg: "1440px"
    }
}

export const useTheme = () => {
    return useContext<Theme>(ThemeContext)
}


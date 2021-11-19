import { useContext } from 'react'
import {ThemeContext} from 'styled-components'
import { ITheme} from '../@types/styles.types'

export const theme:ITheme = {
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
            left: "-7px -1px 1px 0px #00000040",
            bottom: "0px 7px 1px 0px #00000040",
            top: "0px -7px 1px 0px #00000040"
        },
        soft : {
            bottom : "0px 2px 1px 0px #00000040",
            left: "-2px 0px 3px 0px #00000040"
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
    return useContext<ITheme>(ThemeContext)
}


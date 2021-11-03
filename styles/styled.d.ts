import {} from 'styled-components';
import {Theme} from './theme'

declare module 'react' {
    interface Attributes {
        theme ?: Theme
    }
}
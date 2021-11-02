import {} from 'styled-components';
import {Theme} from './styles/theme'

declare module 'react' {
    interface Attributes {
        theme ?: Theme
    }
}
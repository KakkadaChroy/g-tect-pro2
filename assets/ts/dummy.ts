import type {NavItemsModel, SocialLinkModel} from "assets/ts/model";


import fb from '../images/icons/Logo facebook.png';
import tw from '../images/icons/Logo twitter.png';
import ig from '../images/icons/Instant camera 2.png';
import yt from '../images/icons/Logo youtube.png';

// social icon
import so1 from '../images/icons/so1.png';
import so2 from '../images/icons/so2.png';
import so3 from '../images/icons/so3.png';
import so4 from '../images/icons/so4.png';

// nav items
export const navItems: NavItemsModel[] = [
    {
        id: 1,
        name: 'Home',
        path: '/home'
    },
    {
        id: 2,
        name: 'Menu',
        path: '/menu'
    },
    {
        id: 3,
        name: 'Our Story',
        path: '/story'
    },
    {
        id: 4,
        name: 'Location',
        path: '/location'
    },
    {
        id: 5,
        name: 'Gift Card',
        path: '/gift'
    },
]


// social links
export const socialLinks: SocialLinkModel[] = [
    {
        id: 1,
        iconImage: fb,
        color: '#4267B2'
    },
    {
        id: 2,
        iconImage: tw,
        color: '#108AF5'
    },
    {
        id: 3,
        iconImage: ig,
        color: '#171A1F'
    },
    {
        id: 4,
        iconImage: yt,
        color: '#DE3B40'
    },
]


// social footer links
export const socialFooterLinks: SocialLinkModel[] = [
    {
        id: 1,
        iconImage: so1
    },
    {
        id: 2,
        iconImage: so2
    },
    {
        id: 3,
        iconImage: so3
    },
    {
        id: 4,
        iconImage: so4
    },
]
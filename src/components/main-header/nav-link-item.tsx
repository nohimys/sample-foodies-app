'use client'

import Link from "next/link";
import classes from './nav-link-item.module.css'
import {usePathname} from "next/navigation";

const NavLinkItem = ({href, children}: any) => {
    const pathName = usePathname();

    return (
        <li className={classes['list-item']}>
            <Link
                href={href}
                className={pathName.startsWith(href) ? classes.active : undefined}
            >{children}</Link>
        </li>

    );
}

export default NavLinkItem;
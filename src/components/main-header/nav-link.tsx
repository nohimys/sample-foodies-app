'use client'

import Link from "next/link";
import classes from './nav-link.module.css'
import {usePathname} from "next/navigation";

const NavLink = () => {
    const pathName = usePathname();

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link
                        href="/meals"
                        className={pathName.startsWith('/meals') ? classes.active : undefined}
                    >Browse Meals</Link>
                </li>
                <li>
                    <Link
                        href="/community"
                        className={pathName.startsWith('/community') ? classes.active : undefined}
                    >Foodies Community</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavLink;
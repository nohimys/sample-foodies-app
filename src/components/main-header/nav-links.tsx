
import classes from './nav-links.module.css'
import NavLinkItem from "@/components/main-header/nav-link-item";

const NavLinks = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <NavLinkItem
                    href="/meals"
                >
                    Browse Meals
                </NavLinkItem>

                <NavLinkItem
                    href="/community"
                >
                    Foodies Community
                </NavLinkItem>
            </ul>
        </nav>
    );
}

export default NavLinks;
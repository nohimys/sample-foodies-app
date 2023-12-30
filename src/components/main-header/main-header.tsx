import React from "react";
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image
                        src={logoImg}
                        alt="A plate with food on it"
                        priority={true}
                    />
                    NextLevel Food
                </Link>

                <NavLink/>
            </header>
        </>
    );
}

export default MainHeader;
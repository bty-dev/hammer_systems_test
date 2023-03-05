import React, {useState} from 'react';

import classes from './SideMenu.module.scss';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {Link} from "react-router-dom";
import SubMenu from "../SubMenu/SubMenu";
import {IconContext} from "react-icons";

const SideMenu = () => {

    const [isShow, setIsShow] = useState(false);

    const sideMenuData = [
        {
          title: "Home",
          path: "/home",
          icon:  <AiIcons.AiFillHome/>,
        },
        {
            title: "Клиенты",
            path: "/",
            icon:  <IoIcons.IoIosPeople/>,
            iconClosed: <RiIcons.RiArrowDownSFill/>,
            iconOpened: <RiIcons.RiArrowUpSFill/>,
            subNav: [
                {
                    title: "Список клиентов",
                    path: "/",
                    icon:  <IoIcons.IoIosPeople/>,
                },
                {
                    title: "Группы клиентов",
                    path: "/",
                    icon:  <IoIcons.IoIosPeople/>,
                },
            ],
        },
        {
            title: "Products",
            path: "/products",
            icon: <FaIcons.FaCartPlus/>,
        }
    ]

    return (
        <>
            <IconContext.Provider value={{color: "#000000"}}>
                <nav className={classes.nav}>
                    <Link onClick={() => setIsShow(true)} className={classes.nav__icon} to="#">
                        <FaIcons.FaBars/>
                    </Link>
                </nav>
                <div style={isShow ? {left: 0} : {left: "-100%"}} className={classes.side_menu}>
                    <div className={classes.side_menu__wrapper}>
                        <Link onClick={() => setIsShow(false)} className={classes.nav__icon} to="#">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                        {
                            sideMenuData.map((item, index) => (
                                <SubMenu key={index} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default SideMenu;
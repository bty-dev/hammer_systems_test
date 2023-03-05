import React, {ReactNode, useState} from 'react';

import classes from './SubMenu.module.scss';
import {Link} from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";


interface SubMenuProps {
    item: IItem;
}
interface IItem {
    title: string;
    path: string;
    icon:  ReactNode;
    iconClosed?: ReactNode;
    iconOpened?: ReactNode;
    subNav?: ISubNav[];
}

interface ISubNav {
    title: string;
    path: string;
    icon: ReactNode;
}
const SubMenu = ({item}: SubMenuProps) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <Link onClick={() => setIsShow(!isShow)} to={item.subNav ? "#" : item.path} className={classes.item}>
                <div>
                    {item.icon}
                    <span className={classes.item__label}>{item.title}</span>
                </div>
                <div>
                    {
                        item.subNav && isShow ? item.iconOpened : item.subNav ? item.iconClosed : null
                    }
                </div>
            </Link>
            {
                isShow && item.subNav?.map((item, index) => (
                    <Link className={classes.dropdown} key={index} to={item.path}>
                        {item.icon}
                        <span className={classes.item__label}>{item.title}</span>
                    </Link>
                ))
            }
        </>
    );
};

export default SubMenu;
import React, { Children } from "react";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const sideBarData =  [
    {
        title: 'Products',
        path: '/admin/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Posts',
        path: '/admin/posts',
        icon: <BsIcons.BsFileEarmarkPost />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/admin/users',
        icon: <HiIcons.HiOutlineUserGroup />,
        cName: 'nav-text'
    },
]
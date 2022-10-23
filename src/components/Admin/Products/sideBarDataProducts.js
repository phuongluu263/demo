import React, { Children } from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const sideBarDataProducts =  [
        {
            title: 'Add',
            path: '/admin/products/AddProducts',
            icon: <IoIcons.IoIosAddCircleOutline />,
            cName: 'action-text'
        },
        // {
        //     title: 'Update',
        //     path: '/admin/products/updateProducts',
        //     icon: <MdIcons.MdUpdate />,
        //     cName: 'action-text'
        // },
        // {
        //     title: 'Delete',
        //     path: '/admin/products/deleteProducts',
        //     icon: <RiIcons.RiDeleteBinLine />,
        //     cName: 'action-text'
        // },
]
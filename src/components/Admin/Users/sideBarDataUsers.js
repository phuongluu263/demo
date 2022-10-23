import React, { Children } from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const sideBarDataUsers =  [
        {
            title: 'Add',
            path: '/admin/users/addUsers',
            icon: <IoIcons.IoIosAddCircleOutline />,
            cName: 'action-text'
        },
        // {
        //     title: 'Update',
        //     path: '/admin/users/updateUsers',
        //     icon: <MdIcons.MdUpdate />,
        //     cName: 'action-text'
        // },
        // {
        //     title: 'Delete',
        //     path: '/admin/users/deleteUsers',
        //     icon: <RiIcons.RiDeleteBinLine />,
        //     cName: 'action-text'
        // },
]
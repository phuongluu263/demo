import React, { Children } from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const sideBarDataPosts =  [
        {
            title: 'Add',
            path: '/admin/posts/addPosts',
            icon: <IoIcons.IoIosAddCircleOutline />,
            cName: 'action-text'
        },
        // {
        //     title: 'Update',
        //     path: '/admin/posts/updatePosts',
        //     icon: <MdIcons.MdUpdate />,
        //     cName: 'action-text'
        // },
        // {
        //     title: 'Delete',
        //     path: '/admin/posts/deletePosts',
        //     icon: <RiIcons.RiDeleteBinLine />,
        //     cName: 'action-text'
        // },
]
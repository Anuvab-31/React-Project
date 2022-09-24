import { useState } from "react"
import { Box, Divider, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <>
                <Box className={open ? 'sidebarItem open' : 'sidebarItem'}>
                    <Box className="sidebarItemTitle">
                        {/* <IconButton> <LinkedInIcon /></IconButton> */}
                        <span>{item.title}</span>
                        {item.title1}
                        <IconButton className="toggleBtn" onClick={() => setOpen(!open)}> <ArrowForwardIosIcon /></IconButton>
                    </Box>

                    <Box>
                        <Divider ></Divider>
                    </Box>

                    <Box className="sidebarContent">
                        {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                    </Box>
                </Box>
            </>
        )

    }
    else {
        return (
            <a href={item.path || "#"} className="sidebarItem plain">
                {item.icon && <IconButton className={item.icon}></IconButton>}
                {item.title}
            </a>
        )
    }
}
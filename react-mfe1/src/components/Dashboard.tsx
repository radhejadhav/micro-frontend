import { Box, Chip, Container, Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { DashboardPropsType } from "../interfaces/Global";
import { ImageSearchRounded } from "@mui/icons-material";


const Dashboard: React.FC<DashboardPropsType> = ({ page, children }) => {
    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", marginTop: "10px" }}  >
                <Box width={"10%"}>
                    {/* <Chip label={page} /> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <ImageSearchRounded />
                        </ListItemIcon>
                        <ListItemText primary={page} />
                    </ListItemButton>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ paddingLeft: "10px" }}>
                    {children}
                </Box>
            </Container>
        </>
    )
}

export default Dashboard;
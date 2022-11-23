import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

export default function Profile(){
    const [personalData,setPersonalData] = useState({})
    const [isPersonalDataLoaded,setIsPersonalDataLoaded] = useState(false)
    const inputurl = new URL(window.location.href)
    const email = inputurl.searchParams.get('email')

    const loadPersonalInfo = () =>{
        let url = new URL("http://localhost:5000/personalData")
        url.searchParams.set('email', email)
        fetch(url).then((res) => {
            res.json().then((data) => {
                console.log(data.resultData)
                setPersonalData({
                    name : data.resultData.name,
                    gender : data.resultData.gender,
                    phone : data.resultData.phone,
                    location : data.resultData.location,
                    walletlimit : data.resultData.walletlimit,
                    email : data.resultData.email,
                    password : data.resultData.password
                })
                setIsPersonalDataLoaded(true)
            })
        })
    }

    useEffect(()=>{
        loadPersonalInfo()
    },[])
    return <>
        <Box sx={{ margin: 5, borderRadius: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={4} sx={{ padding: 2, backgroundColor: "#f99" }}>
                    <Typography variant="h5">
                        Profile
                    </Typography>
                    <Avatar
                        sx={{ bgcolor: '#99F' }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Wallet Limit
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                {personalData.walletlimit}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8} spacing={2} sx={{ padding: 2, backgroundColor: "#fff" }}>
                    <Typography variant="h6">
                        Information
                    </Typography>
                    <Divider />
                    <Grid container spacing={0} sx={{ marginTop: 1, marginBottom: 1 }}>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Email
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Password
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                                {personalData.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                            {personalData.password}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h6">
                        Personal Detail
                    </Typography>
                    <Divider />
                    <Grid container spacing={0} sx={{ marginTop: 1, marginBottom: 1 }}>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Phone
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                            {personalData.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                                {personalData.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Gender
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                Location
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                                {personalData.gender}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">
                                {personalData.location}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>
}

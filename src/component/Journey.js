import React from 'react'
import { Typography, Box, Grid, Stack, } from "@mui/material"
import '@fontsource/roboto'



const Journey = () => {
    return (
        <>
            <Grid container position="absolute" zindex="-1" m={2} minWidth={1200} minHeight={1200}>
                <Grid item mt={10} ml={13}  display='flex' >
                    <Box m={2}>
                        <Typography sx={{
                            writingMode: 'vertical-lr',
                            transform: 'rotate(180deg)',
                            fontSize: 50,
                            fontWeight: "bold",
                            color: '#9e9e9e',
                        }}>
                            Journey Begins
                        </Typography>

                    </Box>
                    <Box m={2} sx={{ height: 400, width: 200 }}>
                        <Typography display='flex' justifyContent="center" m={2} variant='h5' color='inherit' sx={{ borderBottom: 3, borderBottomColor: 'orange', width: 160, fontWeight: "bold", color: 'orange', float: 'right' }} >
                            2 November
                        </Typography>

                        <Typography m={2} textAlign='right' color='#9e9e9e' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga laboriosam unde ipsam reprehenderit at nostrum perspiciatis a distinctio aliquam.

                        </Typography>
                    </Box>
                    <Grid container ml={3} width={400} height={800} justifyContent='center' justifyItems='center'>
                        <Grid item display='flex' justifyContent='center' justifyItems='center' sx={{ height: 300, width: 300, borderRadius: 200, backgroundColor: '#424242', }}><Typography color='whitesmoke' fontSize={100} sx={{ margin: 'auto' }}>B</Typography></Grid>
                        <Grid item   >
                            <Box mb={3} sx={{ height: 120, width: 120, borderRadius: 60, backgroundColor: '#bdbdbd', border: 10, borderColor: '#e0e0e0' }}></Box>
                            <Box sx={{ margin: 'auto', height: 250, width: 5, borderRadius: 1, backgroundColor: '#bdbdbd', borderColor: '#e0e0e0' }}></Box>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item display="grid" justifyContent="center" justifyItems="center" zIndex='3' ml={-15} float="left" >
                    <Typography sx={{
                        maxHeight: 100,
                        fontWeight: 'bold',
                        fontSize: 70,
                        color: '#9e9e9e',
                    }}>December 2020</Typography>
                    <Stack width={200}>
                        <Typography variant='h5' sx={{ borderBottom: 3, borderBottomColor: 'orange', width: 160, fontWeight: "bold", color: 'orange', float: 'right' }}> 2 November</Typography>
                        <Typography mt={2} mr={2} color='#9e9e9e'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus odio id autem saepe maiores voluptatibus ipsum facere qui deserunt?</Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container position='relative' top={850} >

                <Grid item display="grid" justifyContent="center" justifyItems="center" ml={18} mt={-7} float="left">
                    <Typography sx={{
                        maxHeight: 100,
                        fontWeight: 'bold',
                        fontSize: 70,
                        color: '#9e9e9e',
                    }}>December 2019</Typography>
                    <Stack mt={25} width={200} >
                        <Typography variant='h5' textAlign='right' sx={{ borderBottom: 3, borderBottomColor: 'orange', width: 160, fontWeight: "bold", color: 'orange', float: 'right' }}> 2 November</Typography>
                        <Typography mt={2} mr={2} color='#9e9e9e' textAlign='right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus odio id autem saepe maiores voluptatibus ipsum facere qui deserunt?</Typography>
                    </Stack>
                </Grid>
                <Grid item >
                    <Grid container mt={5} ml={-20} width={400} height={800} justifyContent='center' justifyItems='center'>
                        <Grid item display="grid" justifyContent="center" justifyItems="center" sx={{ height: 300, width: 300, borderRadius: 200, backgroundColor: '#424242', }}>
                            <Typography variant='h5' color='orange' mt={5}>Creating</Typography>
                            <Typography variant='body1' color="#9e9e9e" textAlign="center" m={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</Typography>
                        </Grid>
                        <Grid item mt={5}  >
                            <Box mb={3} sx={{ height: 120, width: 120, borderRadius: 60, backgroundColor: '#bdbdbd', border: 10, borderColor: '#e0e0e0' }}></Box>
                            <Box sx={{ margin: 'auto', height: 400, width: 5, borderRadius: 1, backgroundColor: '#bdbdbd', borderColor: '#e0e0e0' }}></Box>
                        </Grid>

                    </Grid>

                    <Box ml={5} mt={-25} sx={{
                        height: 150, width: 150,
                        border: 5,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: '#bdbdbd',
                        borderColor: '#e0e0e0'
                    }}></Box>
                    <Typography mt={-18} ml={27} height={150} width={200} color='#9e9e9e' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt possimus mollitia nemo fuga praesentium.</Typography>

                </Grid>
                <Grid item ml={10} display="flex" alignItems="center" justifyContent='flex-end' >
                    <Typography mt={5} sx={{
                        writingMode: 'vertical-lr',
                        transform: 'rotate(180deg)',
                        fontSize: 50,
                        fontWeight: "bold",
                        color: '#9e9e9e',
                    }}>
                        App Completed
                    </Typography>
                </Grid>

                <Grid container mt={10} >
                    <Grid item mt={10} ml={11}  display='flex'  >
                        <Box m={2} mt={20} mr={10} >
                            <Typography sx={{
                                writingMode: 'vertical-lr',
                                transform: 'rotate(180deg)',
                                fontSize: 50,
                                fontWeight: "bold",
                                color: '#9e9e9e',
                            }}>
                                App Launch
                            </Typography>

                        </Box>
                        <Box m={2} mt={40} sx={{ height: 400, width: 200 }}>
                            <Typography display='flex' justifyContent="center" m={2} variant='h5' color='inherit' sx={{ borderBottom: 3, borderBottomColor: 'orange', width: 160, fontWeight: "bold", color: 'orange', float: 'right' }} >
                                2 November
                            </Typography>

                            <Typography m={2} textAlign='right' color='#9e9e9e' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga laboriosam unde ipsam reprehenderit at nostrum perspiciatis a distinctio aliquam.

                            </Typography>
                        </Box>
                        <Grid container width={400} height={800} justifyContent='center' justifyItems='center'>
                        <Grid item display="grid"  justifyItems="center" sx={{ height: 300, width: 300, borderRadius: 200, backgroundColor: '#424242', }}>
                            <Typography variant='h5' color='orange' mt={5} >Launch</Typography>
                            <Typography variant='body1' color="#9e9e9e" textAlign="center" m={2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, rerum.</Typography>
                        </Grid>
                            <Grid item   >
                                <Box mb={3} sx={{ height: 120, width: 120, borderRadius: 60, backgroundColor: '#bdbdbd', border: 10, borderColor: '#e0e0e0' }}></Box>
                                <Box sx={{ margin: 'auto', height: 250, width: 5, borderRadius: 1, backgroundColor: '#bdbdbd', borderColor: '#e0e0e0' }}></Box>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item display="grid" justifyContent="center" justifyItems="center" zIndex='3' ml={-15} float="left" >
                        <Typography sx={{
                            maxHeight: 100,
                            fontWeight: 'bold',
                            fontSize: 70,
                            color: '#9e9e9e',
                            }}>December 2020
                        </Typography>
                    </Grid>
                    <Typography ml={72} mb={10} sx={{
                            maxHeight: 100,
                            fontWeight: 'bold',
                            fontSize: 40,
                            color: '#9e9e9e',
                            }}
                    >Countinues....</Typography>
                </Grid>
            </Grid>


        </>
    )
}

export default Journey
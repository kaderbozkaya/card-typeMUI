import { Box, Grid2, Stack, Typography, useTheme } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useRef } from 'react'
import img1 from '../images/blog.png'

function CardSlider() {
    const theme=useTheme()
    const containerRef=useRef<HTMLDListElement>(null)
  return (
    <>
<Stack sx={{py:"30px", px:{xs:"20px", xl:"60px"}}}>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
<Typography variant='h6' component="div" fontWeight="bold" textAlign="center" sx={{my:"20px", color:theme.palette.primary.dark}} >
deneme yazmak
</Typography>
<Box sx={{display:"flex", flexDirection:"row", gap:3}}>
  <Stack sx={{background:theme.palette.primary.dark, height:"35px", width:"35px", borderRadius:"50%", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", mb:"20px", color:"#fff", cursor:"pointer"}}>
    <ArrowBackIosIcon sx={{fontSize:"15px"}}/>
  </Stack>
</Box>
<Box sx={{display:"flex", flexDirection:"row", gap:3}}>
  <Stack sx={{background:theme.palette.primary.dark, height:"35px", width:"35px", borderRadius:"50%", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", mb:"20px", color:"#fff", cursor:"pointer"}}>
    <ArrowForwardIosIcon sx={{fontSize:"15px"}}/>
  </Stack>
</Box>
    </Box>
    <Box sx={{height:'300px', overflowX:"scroll", WebkitOverflowScrolling:"touch", "&::-webkit-scrollbar":{
      display:"none"
    },
    mb:"20px"
    }}
    ref={containerRef}>
      <Box sx={{height:"100%", width:"100%", background:"orange", display:"flex", flexWrap:"wrap", alignContent:"center"}}>
        <Grid2 rowSpacing={1} columnSpacing={{xs:1,sm:2, md:3}} gap={2} justifyContent="center" sx={{display:"flex"}}>
          <Box sx={{height:"300px", width:"300px", bgcolor:"green", boxShadow:"0 2px 4px rgba(0,0,0,0.1)", borderRadius:"10px", overflow:'hidden'}}>
            <Box sx={{height:"60%"}}>
              <img src={img1} width='100%' height='100%' style={{objectFit:"cover"}}></img>
            </Box>
            <Box sx={{px:"10px", mt:"5px"}} gap={3}>
              <Typography fontWeight="bold">Title</Typography>
              <Typography variant='body2' justifyContent="justify" py="5px">Title</Typography>
              <Typography fontWeight="bold" color='orange' sx={{cursor:"pointer"}}>Learn More</Typography>
            </Box>
          </Box>

        </Grid2>
      </Box>

    </Box>
</Stack>
    </>
  )
}

export default CardSlider
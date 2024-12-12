import { Box, Grid2, Stack, Typography, useTheme } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useRef } from 'react'
import { Listitems } from '../components/Listitems';
import Card from '../components/Card';

function CardSlider() {
    const theme=useTheme()
    const containerRef=useRef<HTMLDListElement>(null)
    const sliderButton=(side:string)=>{
      if(containerRef.current&&side==="left"){
        containerRef.current.scrollLeft -=500
      }
      if(containerRef.current&&side==="right"){
        containerRef.current.scrollLeft +=500
      }
    }
  return (
    <>
<Stack sx={{py:"30px", px:{xs:"20px", xl:"60px"}}}>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
<Typography variant='h6' component="div" fontWeight="bold" textAlign="center" sx={{fontFamily:"Roboto", my:"20px", color:theme.palette.primary.dark}} >
Card Header
</Typography>
<Box sx={{display:"flex", flexDirection:"row", gap:3}}>
  <Stack sx={{background:theme.palette.primary.dark, height:"35px", width:"35px", borderRadius:"50%", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", mb:"15px", color:"#fff", cursor:"pointer"}} onClick={()=>sliderButton("left")}>
    <ArrowBackIosIcon sx={{fontSize:"15px"}}/>
  </Stack>
  <Stack sx={{background:theme.palette.primary.dark, height:"35px", width:"35px", borderRadius:"50%", flexWrap:"wrap" ,justifyContent:"center", alignContent:"center", mb:"20px", color:"#fff", cursor:"pointer"}} onClick={()=>sliderButton("right")}>
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
      <Box sx={{height:"100%",width:"280%", display:"flex" , flexWrap:"wrap", alignContent:"center"}}>
        <Grid2 rowSpacing={1} columnSpacing={{xs:1,sm:2, md:3}} gap={2} justifyContent="center" sx={{display:"flex"}}>
         {Listitems.map((slider,index)=> {
          return(
            <Card image={slider.image} title={slider.title} desc={slider.desc}/>
          )
         })}

        </Grid2>
      </Box>

    </Box>
</Stack>
    </>
  )
}

export default CardSlider
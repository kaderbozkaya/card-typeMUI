import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
interface CardProps {
    image:string
    title:string 
    desc:string
}
const Card:FC<CardProps>=({image,title,desc})=> {
  const maxLeng=75
   
  return (
    <>
         <Box sx={{height:"300px", width:"300px", bgcolor:"green", boxShadow:"0 2px 4px rgba(0,0,0,0.1)", borderRadius:"10px", overflow:'hidden'}}>
            <Box sx={{height:"60%"}}>
              <img src={image} width='100%' height='100%' style={{objectFit:"cover"}}></img>
            </Box>
            <Box sx={{px:"10px", mt:"5px"}} gap={3}>
              <Typography fontWeight="bold">{title}</Typography>
              <Typography variant='body2' justifyContent="justify" py="5px">{desc.length>maxLeng ? `${desc.slice(0,maxLeng)}.....` :desc}</Typography>
              <Typography fontWeight="bold" color='orange' sx={{cursor:"pointer"}}>Learn More</Typography>
            </Box>
          </Box>
          </>
  )
}

export default Card
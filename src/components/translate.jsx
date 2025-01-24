import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { ArrowRightLeft, PlusCircle } from 'lucide-react';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'

export default function Translator() {
  const [flag, setFlag] = useState(false)

  return (
    <div className="w-full h-[29%] bg-[#2C2C2C] rounded-xl">

      <div className='w-full h-[20%] flex items-center justify-between'>
        <Box sx={{ p: 2, border: '0.8px solid white', borderRadius: '10px', width: '40%', height: '100%', display: 'flex', alignItems: 'center',}}>
          <span>{flag ? 'Portuguese' : 'English' }</span>
        </Box>
        <div className='flex items-center gap-2 w-[20%] justify-center'>
          <IconButton onClick={() => setFlag(!flag)} color="light" sx={{ height: '35px', width: '35px', color: '#0DA37F', '&:hover': { color: '#0BBF8C'} }} >
            <ArrowRightLeft />
          </IconButton>
          <IconButton color="light" sx={{ height: '35px', width: '35px', color: '#0DA37F', '&:hover': { color: '#0BBF8C'} }}>
            <PlusCircle />
          </IconButton>
        </div>
        <Box sx={{ p: 2, border: '0.8px solid white', borderRadius: '10px', width: '40%', height: '100%', display: 'flex', alignItems: 'center',}}>
        <span>{flag ? 'English' : 'Portuguese' }</span>
        </Box>
      </div>

      <div className='h-[80%] w-full flex justify-between'>
      <TextField
        sx={{
          width: '50%',
          height: '100%',
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            border: 'none', 
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', 
          },
        }}
        multiline
        rows={6} // Número de linhas visíveis
      />
        <Divider orientation='vertical' variant='middle' flexItem sx={{ bgcolor: 'white', opacity: 0.5, mb: '20px'}}/>
        <Box 
          sx={{
            padding: '10px',
            width: '50%',
            height: '100%',
          }}>
          <span>testes</span>
        </Box>

      </div>

    </div>
  );
}

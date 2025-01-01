import axios from 'axios';
import { Box, TextField, IconButton, Typography, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function Chat() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
      if (!input.trim()) return;

      const userMessage = { role: 'user', content: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');

      try {
          const response = await axios.post('http://localhost:5000/chat', {
              message: input,
          });

          const botMessage = { role: 'assistant', content: response.data.reply };
          setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
          console.error('Erro:', error);
      }
  };





  // Chat GPT Integracao
  return (
    <Paper elevation={3} sx={{ maxWidth: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', bgcolor: '#2C2C2C', borderRadius: '20px' }}>

      {/* Área de Mensagens */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, bgcolor: '#2C2C2C', width: '100%', borderRadius: '20px' }}>
          <List>
              {messages.map((msg, index) => (
                  <ListItem key={index} sx={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                      <Paper
                          elevation={1}
                          sx={{
                              p: 1,
                              maxWidth: '75%',
                              bgcolor: msg.role === 'user' ? 'primary.light' : 'grey.200',
                          }}
                      >
                          <ListItemText primary={msg.content} />
                      </Paper>
                  </ListItem>
              ))}
          </List>
      </Box>
      <Divider />

    {/* Campo de Entrada */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 1, width: '90%', marginBottom: '10px', background: 'gray', borderRadius: '15px', background: '#3D3D3D' }}>
          <TextField
              className='rounded-xl'
              sx={{
                borderRadius: '20px',
                flex: 1,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#555', // Borda padrão
                    },
                    '&:hover fieldset': {
                        borderColor: '#888', // Borda ao passar o mouse
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#0DA37F', // Borda quando focada
                    },
                    '& input': {
                        color: '#FFFFFF', // Cor do texto digitado
                    },
                },
                '& .MuiOutlinedInput-input::placeholder': {
                    color: '#BBBBBB', // Cor do placeholder
                    opacity: 1,
                },
              }}
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <IconButton color="light" onClick={sendMessage} 
            sx={{
              ml: 1,
              height: '40px',
              width: '40px',
              color: '#0DA37F', // Cor do ícone de envio
              '&:hover': {
                  color: '#0BBF8C', // Cor ao passar o mouse no ícone
              },
            }}>
            <SendIcon />
          </IconButton>
      </Box>
    </Paper>
  )
}
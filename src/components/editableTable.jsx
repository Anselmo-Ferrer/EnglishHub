import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, IconButton, Typography, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatGPT() {
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

    return (
        <Paper elevation={3} sx={{ maxWidth: 600, margin: 'auto', mt: 4, display: 'flex', flexDirection: 'column', height: '80vh', alignItems: 'center', bgcolor: '#f5f5f5' }}>

            {/* Área de Mensagens */}
            <Box sx={{ flex: 1, overflowY: 'auto', p: 2, bgcolor: '#f5f5f5', width: '100%' }}>
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
            <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        marginBottom: '10px',
        background: 'gray',
        borderRadius: '15px',
        width: '100%',
        maxWidth: '500px', // Largura máxima da caixa de entrada
        margin: 'auto', // Centralizar horizontalmente
    }}
>
    <TextField
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        sx={{
            borderRadius: '90px',
            flex: 1, // Ocupar o máximo disponível
            '& .MuiOutlinedInput-root': {
                height: '40px', // Altura da caixa de entrada
                borderRadius: '20px', // Bordas arredondadas
            },
            '& input': {
                padding: '8px 12px', // Espaçamento interno
            },
        }}
    />
    <IconButton
        color="primary"
        onClick={sendMessage}
        sx={{
            ml: 1,
            height: '40px',
            width: '40px',
        }}
    >
        <SendIcon />
    </IconButton>
</Box>
        </Paper>
    );
}

export default ChatGPT;
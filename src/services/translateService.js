import axios from 'axios';

// URL da API MyMemory
const MYMEMORY_URL = 'https://api.mymemory.translated.net/get';

export const translateText = async (text, targetLanguage) => {
  if (!text || !targetLanguage) {
    console.error('Texto ou idioma de destino ausente!');
    return 'Erro: Texto ou idioma de destino ausente.';
  }

  try {
    const response = await axios.get(MYMEMORY_URL, {
      params: {
        q: text,
        langpair: `pt|${targetLanguage}` // Traduzindo de inglês para o idioma de destino
      }
    });

    // Verifique se a tradução foi retornada corretamente
    if (response.data.responseData && response.data.responseData.translatedText) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error('Resposta inválida da API');
    }
  } catch (error) {
    console.error('Erro na tradução:', error.response?.data || error.message);
    return 'Erro na tradução. Verifique os parâmetros.';
  }
};
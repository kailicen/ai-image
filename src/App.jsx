/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';

import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';

function App() {
  const [colorMode, setColorMode] = useColorMode();

  const [prompt, setPrompt] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  // listen to device's setting, adjust to the selected mode
  useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  }, undefined, (isDarkPrefered) => setColorMode(isDarkPrefered ? 'dark' : 'light'))

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImgUrl(response.data.data[0].url);
    console.log(response.data.data[0].url);
  }
  return (
    <div className='main'>
      <h1 sx={{fontFamily: 'heading'}}>Generate an image using Open AI API</h1>
      <button 
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} 
        sx={{fontFamily: 'monospace', bg: 'primary', color: 'inverseText'}}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
      <input 
        placeholder='Your image prompt...'
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ fontFamily: 'body' }} />
      <button onClick={generateImage} sx={{fontFamily: 'monospace', bg: 'primary', color: 'inverseText'}}>Generate an Image</button>
      <img 
        src={imgUrl} 
        alt="result" 
        onError={event => {
          event.target.src = "https://communityworks.com.au/wp-content/uploads/2014/07/default-placeholder.png"
          event.onerror = null
        }} />
    </div>
  )
}

export default App

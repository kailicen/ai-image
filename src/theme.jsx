const theme = {
    config: {
        useLocalStorage: false
    },
    initialColorModeName: 'light',
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        text: 'black',
        inverseText: 'white',
        background: 'white',
        primary: '#354b48', // green
        modes: {
            dark: {
                text: 'white',
                inverseText: 'black',
                background: '#1a2524', // dark green
                primary: '#86bcb4', // light green
            }

        }
    }
}

export default theme;
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme:{
        letterSpacing:{
            tight: '-.015em'
        },
        extend:{
            height:{
                'half-screen': '50vh'
            }
        }
    },
    plugins: []
}
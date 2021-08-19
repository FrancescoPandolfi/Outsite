module.exports = {}

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'outsite-green': '#66C59F',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

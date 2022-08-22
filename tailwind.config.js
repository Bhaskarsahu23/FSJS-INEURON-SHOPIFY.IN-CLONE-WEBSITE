/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                inter: "'Inter', sans-serif",
                poppins: "'Poppins', sans",
            },
            colors: {
                bgncolor: '#FBF7EC',
                greenlightest: '#F2FCF4',
                greenlight: '#039472',
                greenhover: '#00664E',
                greendark: '#004C3F',
                greendarkest: '#002E24',
            },
        },
    },
    plugins: [],
};

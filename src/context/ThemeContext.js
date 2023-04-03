import React from 'react'

const themes = {
    light: {
        backgroundColor: '#E6EAEE',
        secondaryColor: '#1D1C1CFF',
        color: '#f7f7f7'
    },
    dark: {
        backgroundColor: '#0a0b0c',
        secondaryColor: '#e6eaee',
        color: '#1f1f1f'
    },
}

const initialState = {
    dark: true,
    theme: themes.dark,
    toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(true) // Default theme is dark

    // On mount, read the preferred theme from the persistence
    React.useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, []) // Removed the 'dark' dependency

    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
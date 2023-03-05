export const darkTheme = {
    primary: {
        100: "#d2eafe",
        200: "#a5d5fe",
        300: "#78c0fd",
        400: "#4babfd",
        500: "#1e96fc",
        600: "#1878ca",
        700: "#125a97",
        800: "#0c3c65",
        900: "#061e32"
    },

    secondary: {
        100: "#ffe9cc",
        200: "#FFC292",
        300: "#F3A15E",
        400: "#fea633",
        500: "#fe9000",
        600: "#E96235",
        700: "#E34B2C",
        800: "#F86736",
        900: "#D03400"
    },

    gray: {
        100: "#ffffff",
        200: "#a2a3a5",
        300: "#737677",
        400: "#45484a",
        500: "#161a1d",
        600: "#121517",
        700: "#0d1011",
        800: "#090a0c",
        900: "#040506"
    },

    white: {
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#000000"
    },


};

function reverseTheme(darkTheme) {
    const reversedTheme = {};
    Object.entries(darkTheme).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObject = {};

        for (let i = 0; i < length; i++) {
            reversedObject[keys[i]] = values[length - 1 - i];
        }
        reversedTheme[key] = reversedObject;
    });
    return reversedTheme;
}
export const lightTheme = reverseTheme(darkTheme);



export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark') ?
                {
                    primary: {
                        ...darkTheme.primary,
                        main: darkTheme.primary[400],
                        light: darkTheme.primary[400],
                    },
                    secondary: {
                        ...darkTheme.secondary,
                        main: darkTheme.secondary[400],
                    },
                    white: {
                        ...darkTheme.white,
                        main: darkTheme.white[500],
                    },
                    background: {
                        ...darkTheme.gray,
                        default: darkTheme.gray[500],
                        alt: darkTheme.gray[500],
                    }
                }
                :
                {
                    primary: {
                        ...lightTheme.primary,
                        main: darkTheme.gray[100],
                        light: darkTheme.gray[100],
                    },
                    secondary: {
                        ...lightTheme.secondary,
                        main: darkTheme.secondary[600],
                        light: darkTheme.secondary[700],
                    },
                    white: {
                        ...lightTheme.white,
                        main: darkTheme.white[500],
                    },
                    background: {
                        ...darkTheme.gray,
                        default: darkTheme.gray[100],
                        alt: darkTheme.gray[100],
                    },
                }
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14,
            },
        },



    }
}
import React, {createContext, useReducer, useEffect} from 'react';
import {AppState, Appearance} from 'react-native';
import {lightTheme, themeReducer, ThemeState, darkTheme} from './themeReducer';

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({children}: any) {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  //   useEffect(() => {
  //     AppState.addEventListener('change', status => {
  //       if (status === 'active') {
  //         Appearance.getColorScheme() === 'light'
  //           ? setLightTheme()
  //           : setDarkTheme();
  //       }
  //     });
  //   }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

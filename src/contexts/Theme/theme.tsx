import React, {useContext, useState} from "react";
import {DataLayer} from "../Datalayer/datalayer";

type theme = {
    [key: string] : storeTheme
};

type storeTheme = {
    name: string,
    cleanSelf: Function,
    applySelf: Function
};

const storeThemePropertiesDictionary: theme = {
    "LIGHT": {
        name: 'ALDO_STORE_NAME',
        cleanSelf: (args: any) => {
            document.body.classList.remove('dark');
        },
        applySelf: (args: any) => {
            document.body.classList.add('light');
        }
    },
    "DARK": {
        name: 'CIS_STORE_NAME',
        cleanSelf: (args: any) => {
            document.body.classList.remove('light');
        },
        applySelf: (args: any) => {
            document.body.classList.add('dark');
        }
    }
}

export const Theme = React.createContext(null);


export const ThemeProvider: React.FC = ({ children }) => {
    const [store, setStore] = useState<storeTheme | null>(null);

    return (
        <Theme.Provider value={store}>
            {children}
        </Theme.Provider>
    );
};

export const useDataLayerConfig = () => useContext(DataLayer);
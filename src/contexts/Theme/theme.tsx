import React, {useContext, useState} from "react";
import {DataLayer} from "../Datalayer/datalayer";
// @ts-ignore
import {useHistory} from "react-router";

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

const removeAllStores = () => {
    for (const store in storeThemePropertiesDictionary) {
        storeThemePropertiesDictionary[store].cleanSelf();
    }
}

export const ThemeProvider: React.FC = ({ children }) => {
    const [store, setStore] = useState<storeTheme | null>(null);
     const history = useHistory();
    // useEffect(() => {
    //     const storeType = getStoreType();
    //     applyStore(storeType);
    // }, []);

    const handleSwitchStore = (storeType: String, goToHomePage = true ) => {
        const newStore = applyStore(storeType);
        if(goToHomePage) {
            history.push(newStore.path);
        }
    };

    const applyStore: Function = (storeType: string) => {
        const newStore = storeThemePropertiesDictionary[storeType];
        removeAllStores();
        newStore.applySelf();
        setStore(newStore);
        return newStore;
    }
    return (
        <Theme.Provider value={store}>
            {children}
        </Theme.Provider>
    );
};

export const useDataLayerConfig = () => useContext(DataLayer);
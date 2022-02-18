import React, {useContext, useEffect, useState} from "react";
import {merge} from "lodash-es";
import {DataLayer} from "../Datalayer/datalayer";
// @ts-ignore
import {useHistory} from "react-router";

const StoreThemePropertiesDictionary = {
    "ALDO": {
        name: 'ALDO_STORE_NAME',
        cleanSelf: (args: any) => {
            document.body.classList.remove('store-aldo');
        },
        applySelf: (args: any) => {
            document.body.classList.add('store-aldo');
        }
    },
    "CIS": {
        name: 'CIS_STORE_NAME',
        cleanSelf: (args: any) => {
            document.body.classList.remove('store-aldo');
        },
        applySelf: (args: any) => {
            document.body.classList.add('store-aldo');
        }
    }
}

export const Theme = React.createContext(null);

const removeAllStores = () => {
    for (const store in StoreThemePropertiesDictionary) {
        StoreThemePropertiesDictionary[store].cleanSelf();
    }
}

export const ThemeProvider: React.FC = ({ children }) => {
    const [store, setStore] = useState('');
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
        const newStore = StoreThemePropertiesDictionary[storeType];
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
import React, { useContext } from 'react';
import { merge } from 'lodash-es';
import { dataLayerConfig } from './data';

export const DataLayer = React.createContext(null);

const defaultDataLayer = dataLayerConfig;

type datalayerChildren = {
    children: JSX.Element,
    additionalDataLayer?: object | any
}

export const DataLayerProvider: React.FC<datalayerChildren>= ({ children, additionalDataLayer = {} }) => {
    return (
        <DataLayer.Provider value={merge({}, defaultDataLayer, additionalDataLayer)}>
            {children}
        </DataLayer.Provider>
    );
};

export const useDataLayerConfig = () => useContext(DataLayer);
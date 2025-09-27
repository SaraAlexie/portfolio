"use client";

import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from "react";

type Dimension = {
    width: number;
    height: number;
};

type DimensionContextType = {
    dimension: Dimension | null;
};

const DimensionContext = createContext<DimensionContextType | null>(null);

export const DimensionProvider = ({ children }: { children: ReactNode }) => {
    const [dimension, setDimension] = useState<Dimension | null>(null);

    useEffect(() => {
        function handleResize() {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // set initial value after mount
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <DimensionContext.Provider value={{ dimension }}>
            {children}
        </DimensionContext.Provider>
    );
};

export const useDimension = () => {
    const context = useContext(DimensionContext);
    if (!context) {
        throw new Error("useDimension must be used within a DimensionProvider");
    }
    return context;
};

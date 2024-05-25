import { useState } from 'react';

export default function useStores() {
    const [loading, setLoading] = useState(false);
    const [stores, setStores] = useState(null);
    const [store, setStore] = useState(null);
    const [meta, setMeta] = useState(null);

    const enableLoading = () => {
        setLoading(true);
    };

    const disableLoading = () => {
        setLoading(false);
    };

    return {
        loading,
        stores,
        store,
        meta,
        getStores: async (slug) => {
            enableLoading();
            try {
                const response = await fetch("https://beta.apinouthemes.com/stores", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setStores(data ? data : null);
            } catch (error) {
                setStore(null);
                console.error("Error fetching store:", error);
            } finally {
                disableLoading();
            }
        },

        getStore: async (slug) => {
            enableLoading();
            try {
                const response = await fetch(`https://beta.apinouthemes.com/stores?slug=${slug}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setStore(data ? data : null);
            } catch (error) {
                setStore(null);
                console.error(`Error fetching store with slug ${slug}:`, error);
            } finally {
                disableLoading();
            }
        },
    };
}


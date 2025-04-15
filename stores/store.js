import { defineStore } from "pinia";
import { headers, HOST } from "~/helpers/api";

export const usePresetsStore = defineStore('presetsStore', {
    state: () => {
        return {
            _presetCollections: []
        }
    },
    actions: {
        async fetchCollections(url) {
            const finalURL = HOST + 'api/' + url;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._presetCollections = data;
                console.log(data);
            }

        }
    },
    getters: {
        presetCollections: (state) => state._presetCollections
    }
});


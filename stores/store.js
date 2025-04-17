import { defineStore } from "pinia";
import { headers, HOST } from "~/helpers/api";

export const usePresetsStore = defineStore('presetsStore', {
    state: () => {
        return {
            _presetCollections: null,
            _aboutWorks: null,
            _withLove: null,
            _faq: null,
        }
    },
    actions: {
        async fetchCollections() {
            const URL = 'preset-collections?populate[presets][populate][beforeAfterPhotos][populate][0]=beforePhoto&populate[presets][populate][beforeAfterPhotos][populate][1]=afterPhoto'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._presetCollections = data;

            }
        },
        async fetchAboutBlock() {
            const URL = 'works-in-about-block?populate[0]=works'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._aboutWorks = data;
            }
        },
        async fetchWithLove() {
            const URL = 'with-love-background?populate[0]=background'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._withLove = data;
            }
        },
        async fetchFAQ() {
            const URL = 'question-answers'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._faq = data;
                console.log(data)
            }
        },
    },
    getters: {
        presetCollections: (state) => state._presetCollections,
        aboutWorks: (state) => state._aboutWorks,
        withLove: (state) => state._withLove,
        faq: (state) => state._faq,
    }
});


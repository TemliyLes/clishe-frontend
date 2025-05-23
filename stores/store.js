import { defineStore } from "pinia";
import { headers, HOST } from "~/helpers/api";

export const usePresetsStore = defineStore('presetsStore', {
    state: () => {
        return {
            _presetCollections: null,
            _aboutWorks: null,
            _withLove: null,
            _faq: null,
            _themes: null,
            _methodic: null,
            _sales: null,
            _learning: null,
            _lections: null,
            _learning_info: null,
        }
    },
    actions: {
        async fetchCollections() {
            const URL = 'preset-collections?populate[detailPageImage]=true&populate[presets][populate][beforeAfterPhotos][populate][0]=beforePhoto&populate[presets][populate][beforeAfterPhotos][populate][1]=afterPhoto'
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
            }
        },
        async fetchThemes() {
            const URL = 'themes'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._themes = data;
            }
        },
        async fetchMethodic() {
            const URL = 'methodic-page'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._methodic = data;
            }
        },
        async fetchSales() {
            const URL = 'sales'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._sales = data;
            }
        },
        async fetchLections() {
            const URL = 'lections'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._lections = data;
            }
        },
        async fetchLearning() {
            const URL = 'learning?populate[0]=bg'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._learning = data;
            }
        },
        async fetchLearningInfo() {
            const URL = 'learning-infos'
            const finalURL = HOST + '/api/' + URL;
            const { data } = await useFetch(finalURL, headers);
            if (data) {
                this._learning_info = data;
            }
        },
        async createSale(postData) {
            const URL = 'sales'
            const findMailer = this._sales?.data.find((el) => el.email === postData.email);
            const id = findMailer ? findMailer.documentId : null;
            const additionId = id ? `/${id}` : '';
            const finalURL = HOST + '/api/' + URL + additionId;
            const objSend = {
                method: id ? 'PUT' : 'POST',
                body: {
                    headers,
                    data: postData
                }
            };
            const data = await $fetch(finalURL, objSend);
            if (data) {
                this.fetchSales();
            }
        },
        async sendCode(code, email) {
            const objSend = {
                method: 'POST',
                body: {
                    code: code,
                    email: email
                }
            }
            const URL = 'https://cliche.academy/code.php';
            await $fetch(URL, objSend);
        }
    },
    getters: {
        presetCollections: (state) => state._presetCollections,
        aboutWorks: (state) => state._aboutWorks,
        withLove: (state) => state._withLove,
        faq: (state) => state._faq,
        themes: (state) => state._themes,
        methodic: (state) => state._methodic,
        sales: (state) => state._sales,
        learning: (state) => state._learning,
        lections: (state) => state._lections,
        learning_info: (state) => state._learning_info,
    }
});


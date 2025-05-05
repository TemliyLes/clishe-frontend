const API_TOKEN = 'aa5ae8003db04857be78fe8b13a86413939565eef2d7b7581d93dc2d9b5d498628cb8afb7e1f6232b523875f3bb0bc011ec132bdbddd6803edf4140fc8cc5412279c565a045e8bc88aaaf51f927734d57247054836c3c5a9298b1c0f8f6e5809dc47e604bbe94c90510bd63746573aba27d71159b4dae71efda6a7675a55e3f1';
// const API_TOKEN = '753189361ba6494cdda1fdf7fd8176bbfc23b1b303ee30a82d11c2cf8149b30a0848644e59555105a6715ec80259d8f9ba17483d6c697a5767622d9f3a96fe63f11838583b4f361f5b7a2e6d1f276772a14c348791c38366d2487985c463d76db03a07b7fec09d05c26e055a3253da8dfe0003c8d8ad1d64c23f2cf0c69269b8';

const headers = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
};


// const HOST = 'https://cliche.academy:1337';
const HOST = 'http://localhost:1337';

const imgURL = src => HOST + src
export { headers, HOST, imgURL }
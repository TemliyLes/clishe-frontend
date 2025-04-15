const API_TOKEN = '3fc18e583b1853eff5ca7da895f12357e086f070382191c263b4d3728db0e4ff8555d03640193817a426d48e6beabea84b91ca4d6a50614d459f04390d9dbbef3d658707da284be64d52ec3f9f05eeb304ebd75d988d8e150c232a45ddca0180962fe9b612aedc6eacb61dbdfab2d38933802b879a395954dff47b1771454f70';
const headers = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
};

const HOST = 'http://localhost:1337';
const imgURL = src => HOST + src
export { headers, HOST, imgURL }
import axios from "axios";

const url = 'http://localhost:8085/api/lookup/account/freqList';

class ListRequests {
    static getLists() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(data.map(user => ({
                        id: user.id,
                        gamertag: user.gamertag,
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }
    // add to list
    static insertUser(user) {
        return axios.post(url, {
            gamertag: user.gamertag,
            platform: user.platform,
        });
    }

    // remove from list
    static deleteUser(id) {
        return axios.delete(`${url}/${id}`)
    }
}

export default ListRequests;
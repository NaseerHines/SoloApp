const {
    Router
} = require("express");
const axios = require("axios");
const {
    Hide
} = require("../configs");

const apiRouter = Router();

apiRouter.get("/lookup/account/:gamertag/:platform", (req, res) => {
    const {
        gamertag,
        platform
    } = req.params;
    return axios
        .get(`${Hide.URL}${gamertag}/${platform}/generic`, {
            headers: {
                Authorization: `Bearer ${Hide.TOKEN}`,
            }
        })
        .then((account) => {
            console.log(account);
            res.send(account.data);
        })
        .catch((error) => {
            console.log("error", error);
            res.send("error", error);
        });
});

apiRouter.get("/test", (req, res) => {
    console.log(Hide.TOKEN);
    console.log(Hide.URL);
    res.send(`the token is ${Hide.TOKEN}, the url is ${Hide.URL}`);
});
module.exports.apiRouter = apiRouter;

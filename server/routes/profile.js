const {
    Router
} = require("express");
const {
    getUserSavedList,
    addToUserSavedList,
    removeFromUserSavedList,
} = require('../db');
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

userRouter.get('/lookup/account/freqList', (req, res) => {
    getUserSavedList()
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});
userRouter.post('/lookup/account/freqList', (req, res) => {
    addToUserSavedList(req.body)
        .then((user) => {
            console.log('Account created!');
            res.send('account saved');
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});
userRouter.delete('/lookup/account/freqList/:id', (req, res) => {
    removeFromUserSavedList(req.params.id)
        .then((user) => {
            console.log('Account created!');
            res.send('account saved');
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
});

apiRouter.get("/test", (req, res) => {
    console.log(Hide.TOKEN);
    console.log(Hide.URL);
    res.send(`the token is ${Hide.TOKEN}, the url is ${Hide.URL}`);
});
module.exports.apiRouter = apiRouter;

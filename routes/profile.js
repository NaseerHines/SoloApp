const { Router } = require("express");
const axios = require("axios");
const { Hide } = require("../config");
const apiRouter = Router();
apiRouter.get("/lookup/account/:gamertag/:platform", (req, res) => {
  const options = {
    headers: {
      Authorization: `Bearer ${Hide.TOKEN}`,
    },
  };
  const { gamertag, platform } = req.params;
  const request = `${Hide.URL}/${gamertag}/${platform}/all`;
  console.log(gamertag, platform);
  return axios
    .get(request, options)
    .then((account) => {
      console.log(account.data);
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

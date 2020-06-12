// global route
const router = require("express").Router();

require("./routes/pages")(router);

module.exports = () => {
  return router;
};

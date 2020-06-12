console.log("exported the module");
const { home, about, contact } = require("../controllers/PagesController");

module.exports = (router) => {
  router.get("/", home);
};
module.exports = (router) => {
  router.get("/", about);
};
module.exports = (router) => {
  router.get("/", contact);
};

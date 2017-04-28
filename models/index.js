var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = db.define('page', {
  title: {Sequelize.STRING, allowNull: false},
  urlTitle: {Sequelize.TEXT, allowNull: false},
  content: {Sequelize.TEXT, allowNull: false},
  status: Sequelize.ENUM('open', 'closed')
})

var User = db.define('user', {
  name: {Sequelize.STRING, allowNull: false},
  email: {Sequelize.STRING, allowNull: false}
})

module.exports = {
  db: db
};

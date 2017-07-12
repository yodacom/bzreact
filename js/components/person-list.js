const Person = require('./person');

const PersonList = function () {
  return (
    <div className="perosn-list">
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>

    );
};

module.exports = PersonList;

const React = require('react');
const Person = require('./person');

const PersonList = () => {
  const people = [];
  for (let i = 0; i < 5; i += 1) {
    people.push(<Person />);
  }
  return (
    <div className="person-list">
      {people}
    </div>
  );
};

export default PersonList;

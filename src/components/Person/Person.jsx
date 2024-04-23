import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerStatus = sex === 'f'
    ? `My husband name is ${partnerName}`
    : `My wife name is ${partnerName}`;

  const statusText = isMarried
    ? <p className="Person__partner">{partnerStatus}</p>
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p
          className="Person__age"
          // style={{
          //   display: person.age ? 'block' : 'none',
          // }}
        >
          {`I am ${age}`}
        </p>
      )}
      {statusText}
    </section>
  );
};

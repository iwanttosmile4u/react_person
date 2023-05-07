import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  // eslint-disable-next-line react/jsx-filename-extension
  const {
    name, age, sex, isMarried, partnerName,
  } = person;

  const partner = sex === 'f' ? `My husband's name is ${partnerName}`
    : `My wife's name is ${partnerName}`;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="Person">
      <h2 className="Person__name">{ `My name is ${name}` }</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {isMarried ? (
          <p className="Person__partner">
            {partner}
          </p>
        ) : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: 0,
    partnerName: '',
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryToPhoneBook } from '../redux/actions';
import { formStyle } from '../styles/styles';

function PhoneBookForm() {
  const [user, setUser] = useState({
    firstName: 'Coder',
    lastName: 'Byte',
    phone: '8885559999',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntryToPhoneBook(user));
    setUser({ firstName: 'Coder', lastName: 'Byte', phone: '8885559999' });
  };

  return (
    <form style={formStyle.container} onSubmit={handleSubmit}>
      <label>First name:</label>
      <br />
      <input
        style={formStyle.inputs}
        className="userFirstname"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={formStyle.inputs}
        className="userLastname"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={formStyle.inputs}
        className="userPhone"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
      <br />
      <input
        style={formStyle.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

export default PhoneBookForm;

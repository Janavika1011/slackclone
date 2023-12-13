import React, { useState } from 'react';
import { Form, Grid, Segment, Icon, Header, Button, Message } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory from React Router
import './Register.css';

const Register = () => {
  const history = useHistory();

  const initialUserState = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [userState, setUserState] = useState(initialUserState);
  const [errorState, seterrorState] = useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserState((currentState) => ({
      ...currentState,
      [name]: value
    }));
  };

  const checkForm = () => {
    if (isFormEmpty()) {
      seterrorState((error) => error.concat({ message: 'Please fill in all fields' }));
      return false;
    } else if (!checkPassword()) {
      seterrorState((error) => error.concat({ message: 'Passwords do not match or are less than 8 characters' }));
      return false;
    }
    return true;
  };

  const isFormEmpty = () => {
    return !userState.userName.length || !userState.password.length || !userState.confirmPassword.length || !userState.email.length;
  };

  const checkPassword = () => {
    return userState.password.length >= 8 && userState.password === userState.confirmPassword;
  };

  const onSubmit = (event) => {
    seterrorState([]);
    event.preventDefault();
    if (checkForm()) {
      // Example condition: If the account is not found, redirect to the login page
      if (!accountFound(userState.email)) {
        history.push('/login');
        return;
      }

      // Handle form submission here (you can add your own logic)
      console.log('Form submitted:', userState);
    }
  };

  const accountFound = (email) => {
    // Replace this with your own logic to check if the account exists
    // For simplicity, let's assume the account is found if the email contains "example.com"
    return email.includes('example.com');
  };

  const formatErrors = () => {
    return errorState.map((error, index) => <p key={index}> {error.message}</p>);
  };

  return (
    <Grid verticalAlign="middle" textAlign="center" className="grid-form">
      <Grid.Column style={{ maxWidth: '500px' }}>
        <Header icon as="h2">
          <Icon name="slack" />
          Register
        </Header>

        <Form onSubmit={onSubmit}>
          <Segment stacked>
            <Form.Input
              name="userName"
              value={userState.userName}
              icon="user"
              iconPosition="left"
              onChange={handleInput}
              type="text"
              placeholder="User Name"
            />
            <Form.Input
              name="email"
              value={userState.email}
              icon="mail"
              iconPosition="left"
              onChange={handleInput}
              type="email"
              placeholder="User email"
            />
            <Form.Input
              name="password"
              value={userState.password}
              icon="lock"
              iconPosition="left"
              onChange={handleInput}
              type="password"
              placeholder="User Password"
            />
            <Form.Input
              name="confirmPassword"
              value={userState.confirmPassword}
              icon="lock"
              iconPosition="left"
              onChange={handleInput}
              type="password"
              placeholder="Confirm Password"
            />
          </Segment>
          <Button type="submit">Submit</Button>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
        {errorState.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {formatErrors()}
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Register;

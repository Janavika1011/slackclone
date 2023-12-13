// Login.js
import React from 'react';
import { Form, Grid, Segment, Icon, Header, Button, Message } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'; // Create a CSS file for styling if needed

const Login = () => {
  const history = useHistory();

  const initialUserState = {
    email: '',
    password: ''
  };

  const [userState, setUserState] = React.useState(initialUserState);
  const [errorState, seterrorState] = React.useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserState((currentState) => ({
      ...currentState,
      [name]: value
    }));
  };

  const onSubmit = (event) => {
    seterrorState([]);
    event.preventDefault();
    
    // Navigate to the main page
    history.push('/main'); // Update the route to your main page
  };

  const formatErrors = () => {
    return errorState.map((error, index) => <p key={index}> {error.message}</p>);
  };

  return (
    <Grid verticalAlign="middle" textAlign="center" className="grid-form">
      <Grid.Column style={{ maxWidth: '500px' }}>
        <Header icon as="h2">
          <Icon name="sign-in" />
          Login
        </Header>

        <Form onSubmit={onSubmit}>
          <Segment stacked>
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
              placeholder="Password"
            />
          </Segment>
          <Button type="submit">Login</Button>
        </Form>
        <Message>
          New user? <Link to="/register">Register</Link>
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

export default Login;

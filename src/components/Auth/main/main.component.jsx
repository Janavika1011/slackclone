// Main.jsx
import React, { useState } from 'react';
import { Grid, Segment, Input, Button, Dropdown, Icon } from 'semantic-ui-react';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState('User1');
  const users = ['Janu', 'Akshi', ''];

  const handleInputChange = (e, { value }) => {
    setNewMessage(value);
  };

  const handleUserChange = (e, { value }) => {
    setSelectedUser(value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessages = [...messages, { sender: selectedUser, text: newMessage, timestamp: new Date().toLocaleTimeString() }];
    setMessages(newMessages);
    setNewMessage('');
  };

  const handleSendImage = () => {
    // Implement image sending logic
  };

  const handleSendVoiceNote = () => {
    // Implement voice note sending logic
  };

  const styles = {
    chatContainer: {
      height: '400px',
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
    },
    messageList: {
      listStyleType: 'none',
      padding: '0',
    },
    message: {
      marginBottom: '10px',
    },
    strong: {
      color: '#2a6496',
    },
    inputContainer: {
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    inputField: {
      flex: '1',
      marginRight: '10px',
    },
    actionButtons: {
      display: 'flex',
    },
    actionButton: {
      marginLeft: '5px',
    },
    uploadedImage: {
      maxWidth: '100%',
      maxHeight: '200px',
      marginTop: '5px',
    },
    timestamp: {
      color: '#777',
      marginLeft: '5px',
    },
  };

  return (
    <Grid.Column>
      <Segment style={styles.chatContainer}>
        <div style={styles.messageList}>
          <h2>Chat</h2>
          <ul>
            {messages.map((message, index) => (
              <li key={index} style={styles.message}>
                <strong style={styles.strong}>{message.sender}:</strong>
                {message.text && <span>{message.text}</span>}
                {message.image && <img src={message.image} alt="user-upload" style={styles.uploadedImage} />}
                {message.voiceNote && (
                  <audio controls>
                    <source src={message.voiceNote} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                )}
                <span style={styles.timestamp}>({message.timestamp})</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.inputContainer}>
          <Input
            fluid
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleInputChange}
            style={styles.inputField}
            action={
              <div style={styles.actionButtons}>
                <Dropdown
                  selection
                  options={users.map((user) => ({ key: user, text: user, value: user }))}
                  onChange={handleUserChange}
                  value={selectedUser}
                />
                <Button color="teal" onClick={handleSendMessage} style={styles.actionButton}>
                  Send
                </Button>
                <Button color="blue" onClick={handleSendImage} style={styles.actionButton}>
                  <Icon name="file image" />
                  Image
                </Button>
                <Button color="green" onClick={handleSendVoiceNote} style={styles.actionButton}>
                  <Icon name="microphone" />
                  Voice Note
                </Button>
              </div>
            }
          />
        </div>
      </Segment>
    </Grid.Column>
  );
};

export default Main;

# NodeJs backend chat

Simple implementation of chat server with two models

## Getting Started

```npm install```
use ```mongo/start.bat``` to run database
```npm start```

### Routes
POST: ```http://localhost:3000/api/user``` - to create new user send obj with two fields (name and email)\
GET: ```http://localhost:3000/api/users``` - to get list of all users\
PUT: ```http://localhost:3000/api/user/:id``` to update user\
DELETE: ```http://localhost:3000/api/user/:id``` - to delete user

POST: ```http://localhost:3000/api/message``` - to create new message send obj with three fields (msg, senderId and receiverId)\
GET: ```http://localhost:3000/api/messages``` - to get list of all messages\
PUT: ```http://localhost:3000/api/message/:id``` - to update message\
DELETE: ```http://localhost:3000/api/message/:id``` - to delete message

GET: ```http://localhost:3000/api/contacts/user/:id``` - to get list of contacts of user bu using his id\

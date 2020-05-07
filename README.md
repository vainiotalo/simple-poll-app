## simple-poll-app

Test the app at <http://fullstack-poll-app.herokuapp.com>

### Description

This is a simple full stack poll app that was created with React, Node.js, Express and MongoDB. User can create polls, which consist of one question and 2-30 answer options. Main page contains the poll maker and a directory of open polls. Polls can be deleted from the directory via a button press. Polls and their results are on separate pages (URLs).

Other features include:
- dynamically updated option fields when creating a poll
- poll results shown as percentage bars
- to be continued...

### Why was this app created?

To learn React and Node (and CSS later on), and full stack development in general. The app is also intended to be useful when it's finished.

### Installing / Getting started

Git and Node/npm is needed.

```
git clone https://github.com/vainiotalo/simple-poll-app
cd simple-poll-app
```

#### Front end:

```
cd poll-front
npm start
```

 Server functionality (saving polls, etc.) can be tested with `json-server`.

#### Back end:

Back end cannot be ran without the local `.env` variable. Code can be inspected though. Back end is connected to a production build of the front end.


### Tasks to be done

- Implement user authentication
- Implement the ability sort polls in the poll directory, e.g. by date

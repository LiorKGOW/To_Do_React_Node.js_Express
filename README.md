# Lior's ToDo Application

## Project Description
This is a ToDo application written in JavaScript, React, Node.js and Express using MongoDB as a database
Supported actions : Create, Update and Delete

## How To Run This Application
1. First, insure you have the [Required Prerequisites](https://github.com/LiorKGOW/To_Do_React_Node.js_Express#prerequisites) before continuing to the next step (can be found at the bottom of this readme)

2. [Open a CLI Window](https://tutorial.djangogirls.org/en/intro_to_command_line/) in the path of your liking (this is the location where the application code & data would be stored in a folder called: 
To_Do_React_Node.js_Express)

3. Clone this repository to your local machine, using the following command (after opening a CLI window in the path of your liking):

`git clone git@github.com:LiorKGOW/To_Do_React_Node.js_Express.git`

4. Open a CLI window and navigate to the root folder of the project (where you have cloned it) using `cd` followed by the path of the root folder of the project

5. Navigate to the ToDoServer folder by typing the following command: 

`cd ToDoServer`

6. Run the following command in order to install the server's dependencies:

`npm install`

7. Run the following command in order to run the ToDo Server:

`npm start`

Keep this CLI window open! The server must be running in order to use the ToDo Client!

8. Open a new CLI window and navigate to the root folder of the project, exactly like in step 2

9. Navigate to the ToDoClient folder by typing the following command:

`cd ToDoClient`

10. Run the following command in order to install the Client's dependencies:

`npm install`

11. Run the following command in order to run the ToDo Client:

`npm start`

12. Open your favorite browser (Please use a modern browser, preferably Google Chrome,  Mozilla Firefox or Safari)

13. Navigate to: `http://localhost:3000/` (should be done automatically after running the commmand in step 8)

14. Please read the [Important Notices](https://github.com/LiorKGOW/To_Do_React_Node.js_Express#important-notices) before using this application

15. Enjoy :)

---

## Some Screenshots of the ToDo Application:
The initial state of the App, presenting the available data that is currently stored in the DB in MongoDB:
![The initial state of the App, presenting the data that is currently available from the DB in MongoDB](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/254786b4-9f14-45a0-ba4a-a05a62955bd5)

The initial state of the DB in MongoDB:
![The initial state of the DB in MongoDB](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/8176d5b5-d71b-4611-afff-a1fcccc7cf27)

---

### This Application Supports Several Actions
#### 1. Updating an Excisting ToDo Item
Pressing the update icon (the icon of the pencil on the left) of the second ToDo item enters an update mode of this ToDo item:
![Pressing the update icon of the second ToDo item enters an update mode of this ToDo item](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/e6a8cbfc-aead-445b-9f18-a84d41e7b7aa)

First, change the text in the text input box:
![Changing the text in the text input box and then pressing the update button](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/708a8cd2-ff71-42f4-a75b-d8137bb13016)

Then, after pressing the `Update` button, the application updates this ToDo item's title in the UI:
![After pressing the Update button, the application updates the ToDo item's title in the UI](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/d42a3b05-9f18-4293-9ec1-77726e6a1e5c)

The title of this ToDo item was also changed in the DB in MongoDB:
![The title of the ToDo item was changed in the DB in MongoDB](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/33fd650f-6431-4075-93ff-6184fbc1ee9d)

#### 2. Deleting ToDo Items From the ToDo List
Clicking on the delete icon (the trash can icon on the right) of the second ToDo item deletes this ToDo item from the ToDo list:
![Clicking on the delete icon of the second ToDo item deletes this ToDo item from the ToDo list](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/5a37ce17-02bc-4957-8825-8cc34aea02b9)

The second ToDo item is also deleted from the DB in MongoDB:
![The second ToDo item is also deleted from the DB in MongoDB](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/18f66d2d-f48c-42c4-97db-94c426c56550)

#### 3. Adding a New ToDo Item 
First, enter a requested text in the text input box:
![After entering a requested text in the text input box and pressing the Add button, a new Todo item is created in the UI](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/e134be47-7c31-44e3-a956-b643eebd6fea)

Next, after clicking the `Add` button, a new ToDo item is created in the UI:
![After clicking the Add button, a new ToDo item is created in the UI](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/f3914920-2437-420a-badd-17f1a45bee35)

The new ToDo item was also added in the DB in MongoDB:
![The new ToDo item was also added in the DB in MongoDB](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/assets/93318917/2d69d3a7-eba4-495f-b4d5-a8390dfd4624)

---

### Prerequisites
* [Node.js Version 18](https://nodejs.org/en/blog/release/v18.12.0) (or higher)
* npm version 9 (or higher)
* [Git](https://git-scm.com/downloads)
* Here's a quick & easy [Guide](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) to help you install Node.js and npm on your local computer

---

### Important Notices

*Both CLI windows of the server and the client must remain open while using this application !*

*Ensure you have an active internet connection while using this application !*

*Please update me in case you have found any bugs, or in case you have any recommendation for updates or new features :)*

*Feel free to open a new pull request for any ideas you may have for improving this application :)*

*The Server runs on port 5000 and the client runs on port 3000*
*The server's port can be changed !*
*Changing the Server side's port in this file: [ToDoServer.js](https://github.com/LiorKGOW/To_Do_React_Node.js_Express/blob/main/ToDoServer/ToDoServer.js) (line 10)*

### What Would I Add Next
* `status state` attribute of the ToDos, which would indicate the state of the ToDo "Done" / "In Progress" / "ToDo" the users can also change in the UI 
* `Read action` to inspect a specific ToDo in an open modal feature or maybe by using React Router
* `Drag & Drop` action to change the order of the ToDos in the UI
* `Deploying a live version` of the application on the internet

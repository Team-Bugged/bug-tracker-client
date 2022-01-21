# Bug Tracker

Bug Tracking System made with MERN Stack.

# Description

Bug Tracker is a web application that keeps track of reported software bugs in software development projects. The database is implemented using mongoDB. The web application involves features such as CRUD operations on projects and its associated bugs.

A user can create multiple projects and each project is associated with a unique project ID, project title, project description, project start date, project contributors, and project status. Project status indicates the completion status of the project. A Project contributor may report multiple bugs.

A bug is an error, flaw or fault in software code that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. Each Bug has a unique ID, title,  due date, contributors/assignees, status, and severity. Each bug has associated bug description. The due date is the expected time or date to resolve the bug, status indicates whether the bug has been resolved or not.

Both project and bugs can be deleted and updated. Deleting a project necessarily means deleting all its associated bugs.

<!-- Steps to reproduce and additional information. -->
<!-- Projects can be filtered based on status , start date and number of bugs whereas bugs can be filtered based on bug status, severity, start date, etc. -->

# ER Diagram: 

![image](https://user-images.githubusercontent.com/57508390/150481035-32190fb1-459d-4fe5-ac90-e891ca768409.png)

# We learnt how to use the following Tech Stack
![image](https://user-images.githubusercontent.com/57508390/150481923-79cc2330-1999-4588-a61f-eea5cc143559.png= 100X20)



# DEMO

## To run on browser 

Step 1: Run the server on your browser: <a target="_blank" href="https://bug-tracker-sever.herokuapp.com/">Click here</a> <br>
Step 2: Finally, <a target="_blank" href="https://bug-tracker-cliet.herokuapp.com/">Click here</a> to view our application

## To run locally

- `git clone`
- `npm install`
- `npm start`
- visit `localhost:3000` on browser

# Developer Credits
<a href="https://github.com/Sahil-101">Sahil</a>
<a href="https://github.com/siddharthsharma19">Siddharth Sharma </a>
<a href="https://github.com/vridhi-vk">Vridhi Kamath </a>




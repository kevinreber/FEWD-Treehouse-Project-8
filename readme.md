## Project Introduction
Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

Awesome Startup is a distributed company with employees working all over the world. They need a smart way to for employees to share contact information with each other. In this project, you’ll use the Random User Generator API ([https://randomuser.me/](https://randomuser.me/)) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. You’ll request a JSON object from the API using fetch and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

## Before you start

To prepare for this project you'll need to make sure you complete and understand these steps.

-   #### Download the sample layouts. We've provided two files:
    
    -   employee_directory.png - an example of what the main directory should look like
    -   employee_overlay.png - an example of the overlay providing more detail
    -   You will need to create your own HTML, CSS and JS files for this project.
    
-   #### Review the Random User Generator  [documentation](https://randomuser.me/documentation). Grab the example they provide and console.log the data so you can see what information you’ll receive and start to think about how you’ll access the correct information and display it on the page.
    

## Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

-   #### Use fetch to get and display 12 random users from  [The Random User Generator API](https://randomuser.me/)
    
    -   Using photos and information that the API provides, you’ll display 12 users, along with some basic information:
        -   Image
        -   First and Last Name
        -   Email
        -   City
    
-   #### Create a modal window that will pop up when any part of the user’s row is clicked. The following details should display in the modal window:
    
    -   Image
    -   Name
    -   Email
    -   Cell Number
    -   Detailed Address, including street name and number, city, state, and postcode.
    -   Birthdate
    
-   #### Structure and style the user directory so that it roughly matches the provide mockup.
    
    -   Display the users in a grid or table
    -   Add a hover state to the rows of the user table.
    -   Make sure there’s a way to close the modal window
    

## Extra Credit

To get an "exceeds" rating, complete all of the steps below:

-   #### Add a way to filter the directory by name or username. To do this, you’ll need to request a random user nationality that will only return data in the English alphabet. Note: you don't have to rely on the API to return search results. You'll need to write functionality that filters result once they already on the page.
    
-   #### Add a way to move back and forth between employee detail windows when the modal window is open.
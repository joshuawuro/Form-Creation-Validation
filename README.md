<h1>
    Deep Dive into JavaScript
</h1>
<img src="./assets/e0e7737e1938b51a9011e85a4c16b351817a7ef8.jpg" alt="webdev">
<p>
    Welcome to the "Deep Dive into JavaScript" project! In this project, you will develop a user registration form with validation and fetch user data from a public API. This project will enhance your understanding of form validation, DOM manipulation, and asynchronous JavaScript.
</p>
<p>
    <h3>
        You will learn how to:
    </h3>
    <ul>
        <li>
            Validate form inputs using JavaScript
        </li>
        <li>
            Dynamically interact with HTML elements
        </li>
        <li>
            Fetch and display data from a punlic API
        </li>
        <li>
            Provide real-time feedback to users
        </li>
    </ul>
    By the end of this project, you will have a solid understanding of advanced JavaScript concepts and be able to create dynamic and interactive web applications
</p>
<h1>
    <h3>
        Learning Objectives
    </h3>    
</h1>
<p>
    By the end of this project, students should be able to:
    <ol>
        <li>
            <h3>
                Implement Form validation
            </h3>
            <ul>
                <li>
                    Understand and implement basic form validation using JavaScript
                </li>
                <li>
                    Ensure user inputs meet specific criteria before form submission
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Work with the DOM!
            </h3> 
            <ul>
                <li>
                Use DOM manipulationto dynamically interact with HTMLelements
                </li>
                <li>
                    Understand and utilize event listeners for form submission and input validation
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Asynchronous JavaScript and API's:
            </h3> 
            <ul>
                <li>
                Use JavaScript to fetch data asynchronously form a public API
                </li>
                <li>
                    display fetched data dynamically on a webpage
                </li>
                <li>
                    Handle potential errors during data fetching
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Enhance User Experience:
            </h3>
            <ul>
                <li>
                Provide real-time feedback to users for form validation
                </li>
                <li>
                    Ensure data persists across browser sessions using local storage
                </li>
            </ul>
        </li>
    </ol>
</p>
<h1>
    0.Form Creation and Validation
</h1>
<h1>
    Repo Requirements:
</h1>
<p>
    <ul>
        <li>
            Create a New Repo in GitHub
        </li>
        <li>
            Repo Name: Form-Creation-Validation
        </li>
    </ul>
    Using this user registration form, implement validations to ensure that users provide the right kind of data.
</p>
<h2>
    HTML Structure
</h2>
<img src="/assets/Screenshot 2024-07-17 191329.png" alt="html code">
<h2>
    CSS (style.css)
</h2>
<img src="./assets/Screenshot 2024-07-17 191357.png" alt="css code">
<p>
    Implement a form validation script using basic JavaScript string methods and conditions. Upon form submission, validate the input fields for username, email, and password according to specific criteria. Display a success message if all validations pass, or appropriate error messages if any validations fail.
</p>
<h1>
    Task Requirements
</h1>
<h2>
    Setup and Initial Code Structure
</h2>
<ol>
    <li>
        <h3>
            Start with DOMContentLoaded Event
        </h3>
        <ul>
            <li>
                Wrap your entire script in a <strong>DOMContentLoaded</strong> event listener. This ensures your JavaScript runs after the entire HTML document has been loaded
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Form Selection
        </h3>
        <ul>
            <li>
                Use <strong>document.getElementById</strong> to select the form with <strong>id='registration-form'</strong>. Store this reference in a constant named <strong>form</strong>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Feedback
        </h3>
        <ul>
            <li>
                Similarly, select the division where feedback will be displayed (<strong>id='form-feedback'</strong>) and store it in a constant named <strong>feedbackDiv</strong>.
            </li>
        </ul>
    </li>
</ol>
<h2>
    Form Submission and Event Prevention
</h2>
<ol>
    <li>
        Form Submission Event listener:
    </li>
    <ul>
        <li>
            Add an event listener to <strong>form</strong> for the 'submit' event. Use an anonymous function to handle the handle event.
        </li>
        <li>
            Inside this function, call <strong>event.preventDefault()</strong> to prevent the form from submitting to the server. This is crucial for client-side validation
        </li>
    </ul>
</ol>
<h2>
    Input Retrieval and Trimming
</h2>
<ol>
    <li>
        Retrieve User Inputs:
        <ul>
            Use <strong>document.getElementById</strong> to select each input field by its respective ID: username, email, and password
        </ul>
        <li>
            For each, retrieve the <strong>.value</strong> property and apply the <strong>.trim()</strong> method to remove any leading or trailing whitespace. Store these trimmed values in constants named after each input field
        </li>
    </li>
</ol>
<h2>
    Validation Logic
</h2>
<ol>
    <li>
        <h3>
            Initialize Validation Variables:
        </h3>
        <ul>
            <li>
                Declare a variables named <strong>isValid</strong> and set it to <strong>true</strong>. This will track the overall validation status.
            </li>
            <li>
                Declare an array named <strong>messages</strong> to store validation error messages
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Username Validation:
        </h3>
        <ul>
            <li>
                Check if <strong>username.length</strong> is less than 3. If so, set <strong>isValid</strong> to <strong>false</strong> and add specific error messages to <strong>messages</strong>.
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Email Validation:
        </h3>
        <ul>
            <li>
                Check if <strong>email</strong> includes both '@' and '.' characters. If not, set <strong>isValid</strong> to <strong>false</strong> and append the corresponding error message to <strong>messages</strong>.
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Password Validation:
        </h3>
        <ul>
            <li>
                Ensure <strong>password.length</strong> is at least 8. If it falls short, update <strong>isValid</strong> to <strong>false</strong> and add an appropriate error message to <strong>messages</strong>.
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Displaying Feedback
        </h3>
        <ul>
            <li>
                Make <strong>feedbackDiv</strong> visible by setting its <strong>style.display</strong> to <strong>"block"</strong>
            </li>
            <li>
                If <strong>isValid</strong> remains <strong>true</strong>, set the <strong>textContent</strong> of <strong>feedbackDiv</strong> to <strong>"Registration successful!"</strong> and its <strong>style.color</strong> to <strong>#28a745</strong>
            </li>
            <li>
                If <strong>isValid</strong> is <strong>false</strong>, join <strong>messages</strong> with <strong>br</strong> to form a single string, and assign this to the innerHTML of <strong>feedbackDIV</strong>. Set <strong>feedbackDIV.style.color</strong> to <strong>"#dc3545"</strong>
            </li>
        </ul>
    </li>
</ol>
<h3>
    Repo:
</h3>
<ul>
    <li>
        GitHub repository: <strong>Form-Creation-Validation</strong>
    </li>
    <li>
        File: <strong>index.html, style.css, script.js</strong>
    </li>
</ul>


<h1>
    1. Fetching Data from an API and Displaying it
</h1>
<p>
    Implement JavaScript functionality to asynchronously fetch user data from a public API (https://jsonplaceholder.typicode.com/users) and display the names of the users in a list on the webpage.
</p>
<h1>
    Final Output
</h1>
<p>
    After implementing the JavaScript code, you should end up with something like this:
</p>
<img src="/assets/Screenshot 2024-07-18 035813.png" alt="list of users">
<h2>
    HTML Code
</h2>
<img src="assets/Screenshot 2024-07-18 035837.png" alt="html code">
<h2>
    CSS Code
</h2>
<img src="assets/Screenshot 2024-07-18 035852.png" alt="css code">
<h1>
    Detailed Instructions for JavaScript Task
</h1>
<h2>
    Overview
</h2>
<p>
    You will write JavaScript code to asynchronously fetch user data from a public API and display each user's name on a web page. Your code will also handle potential errors during the fetch operation.
</p>
<h2>
    JavaScript Code Writing Steps
</h2>
<ol>
    <li>
        <h3>
            Initial the Async Function
        </h3>
        <ul>
            <li>
                Begin by defining an asynchronous function named <strong>fetchUserData</strong>. This function will contain all your code for fetching and displaying the data.
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Define the APU URL:
        </h3>
        <ul>
            Inside <strong>fetchUserData</strong>, declare a constant <strong>apiUrl</strong> and assign it the string value <strong>'https://jsonplaceholder.typicode.com/users'</strong>. This URL points to the API endpoint from which you’ll fetch user data.
        </ul>
    </li>
    <li>
        <h3>
            Select the Data Container Element
        </h3>
        <ul>
            <li>
                Select the HTML element where the API data will be displayed by using <strong>document.getElementById</strong>. Look for an element with the ID <strong>'api-data'</strong> and store this reference in a constant named <strong>dataContainer</strong>.
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Fetch Data Using <strong>try-catch</strong>:
        </h3>
        <ul>
            <li>
                Employ a <strong>try-catch</strong> block to handle the fetching process and potential errors
            </li>
            <li>
                n the <strong>try</strong> block, use the <strong>await</strong> keyword with the <strong>fetch</strong> function to asynchronously get data from <strong>apiUrl</strong>. Store the response in a constant named <strong>response</strong>
            </li>
            <li>
                Then, convert the response to JSON using <strong>await response.json()</strong> and store this data in a constant named <strong>users</strong>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Clear the Loading Message:
        </h3>
        <ul>
            <li>
                Before appending new content to <strong>dataContainer</strong>, clear its existing content (the “Loading user data…” message) by setting <strong>dataContainer.innerHTML = ''</strong>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Create and Append User List:
        </h3>
        <ul>
            <li>
                Create a <strong><ul></strong> element and store it in a constant named <strong>userList</strong>
            </li>
            <li>
                Loop through the <strong>users</strong> array with <strong>forEach</strong>, and for each user, do the following:
                <ul>
                    <li>
                        Create a <strong><ul></strong> element
                    </li>
                    <li>
                        Set the text content of the <li> to the user's name
                    </li>
                    <li>
                        Append the <li> to userList
                    </li>
                </ul>
            </li>
            <li>
                After the loop, append <strong>userList</strong> to <strong>dataContainer</strong>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Invoke <strong>fetchUserData</strong> on DOMContentLoaded
        </h3>
        <ul>
            <li>
                Outside <strong>fetchUserData</strong>, add an event listener to <strong>document</strong> for the <strong>DOMContentLoaded</strong> event. Set the callback function to invoke <strong>fetchUserData</strong>. This ensures your data fetching logic runs once the HTML document has fully loaded
            </li>
        </ul>
    </li>
</ol>
Repo:
</h3>
<ul>
    <li>
        GitHub repository: <strong>Form-Creation-Validation</strong>
    </li>
    <li>
        File: <strong>fetch-data.html, fetch-data.css, fetch-data.js</strong>
    </li>
</ul>
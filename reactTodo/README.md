## React-Todo-App-with-Pagination-and-mock-server
## Problem Statement

In this project, you will be creating a Todo application using React.js and a mock server using json-server. Your application should be designed to interact with the mock server to perform various operations on the Todo list.
Here's a rundown of the features your application should include:

- `Todo List Display`: The application should display a list of todos fetched from the json-server. This list should be updated whenever a todo item is added, updated, or deleted. You should use React's useState and useEffect hooks to manage and update the state of your todos.

- `Pagination`: The application should incorporate pagination functionality. Users should be able to select the number of todo items to be displayed per page. You can offer options like 3, 6, and 9 items per page. The pagination component should also allow users to navigate between pages (Next and Previous).

- `Add Todo Item`: Users should be able to add a new todo item. This item should then be posted to the json-server using the `POST` method. After the addition, the list of todos should be updated to reflect the newly added todo item.

- `Update Todo Item Status`: Users should be able to toggle the status of a todo item (completed or not completed). This update should be sent to the json-server using the `PUT` method. The status of the item in the todo list should reflect the update.

- `Delete Todo Item`: Users should be able to delete a todo item. This action should send a "DELETE" request to the json-server. After deletion, the list of todos should be updated to reflect the removed item.

### Components

## App.jsx

This component will render `TodoList` component.

On page load, we should be able to see todos.

<div style="text-align:center">
</div>


**component structure**
<div style="text-align:center">
</div>


## TodoList.jsx: 
Component that manages the state of the application and includes methods for fetching, adding, updating, and deleting todos. Also includes the pagination and limit selection functionality.
  - This component will consist of one `select` tag and 3 `components`.
    - There should be a `select` tag to select, how many Todo's you want to see on a single page.
      - You can provide 3 options with text content `3`,`6`,`9` and values `3`,`6`,`9` respectively.
        - By default `3` todos should be visible on the page.
        - For example:- If I select option `6` then I should see 6 todos on a single page.
        <div style="text-align:center">
        </div>
    - Below are the components that should be present in the `TodoList` component.
  -  Handle loading and error states for your requests. Display a loading message while the request is being processed, and display an error message if something goes wrong
      - Between `request` and `response` to the json-server it should display `<h1 data-testid="loading">Loading...</h1>`
      - If any error occurs after requesting the json server you need to display `<h1 data-testid="err">Something went wrong..</h1>`

Note:- 
1. By default only 3 todos should be visible. (Hint:- limit=3 in query params)
2. By default 1st page should be visible (Hine:- pass the page in query params)

**component structure**
<div style="text-align:center">
</div>

### **Child components in TodoList**
## AddTodo
This component allows users to add a new todo item.
 - should contain an `input` tag to enter todo and a `button` with text Content `ADD TODO` to add todo.
  - When the user enters todo and clicks on the button, you should make a `POST` to json-server with endpoint `/todos`. And the Todo's should be updated on DOM by making a `GET` request. (User query params as we need to display only 3 todos by default)             
## TodoItem 
   - All the todos are rendered with this component.
        - It should consist of the following tags.
          - 1st `p` tag for `title`
          - 2nd `p` tag for showing status `Completed` or `Not Completed`
          - 1st `button` should have text content `TOGGLE` on clicking and the status of the `todo` should be changed to `Completed` or `Not Completed`.(If it is `Completed` then it will be changed to `Not Completed` and vice-versa)
            - By default, the status will be `Not Completed`.
          - 2nd `button` should have text content `DELETE` on clicking which that particular todo should get `deleted`.
## Pagination
 - In this component, we should be able to see two buttons, 1st should be having text content `PREVIOUS`, and 2nd button should have text content `NEXT`
     - `NEXT` button - should show the next page
     - `PREVIOUS` button - should show the previous page 
          - The next page or prev page should appear after making a `GET` request with query params using limit and page.
        - There should be a `div` in between both the buttons with text content equal to the current page number(example 1, 2, 3).
        - The `PREVIOUS` and `NEXT` buttons should get disabled when there are no previous pages and next pages respectively.           
  - Changing the total number of todos that should be displayed in the select tag, the Pagination component should also be updated accordingly. 
 
**Markup for reference**
<div style="text-align:center">
</div>

 <h4 style="color:red">Follow the order of HTML elements as mentioned in problem statement/images provied</h4>

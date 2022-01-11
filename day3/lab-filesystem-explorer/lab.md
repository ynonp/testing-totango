# Lab: Filesystem Explorer



## Add supertest and jest

1. Add supertest and jest to the project

2. Test the main route works

3. Test filesystem navigation works

4. Test the "home" link works



## Add Delete functionality and test it

1. Implement the "Delete" route in routes/index.js

2. Test the "Delete" functionality



## Discussion: Testing without breaking

1. Modify the code so you'll be able to test more creative scenarios?
   (other filesystem structures etc.)

2. Modify the code so you'll be able to test "Delete" without actually deleting files




## Discussion: Parallel Testing

1. Create multiple test files, each test file will create a specific file in "./start" folder and delete it. Run the tests with "npx jest --no-cache".

2. Did all the tests pass? How would you modify the code to fix it?

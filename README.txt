📌 Overview
This project is a Playwright-driven test suite designed for automated testing of Project Board application. 
It uses data-driven techniques to improve maintainability and scalability.

🛠️ Setup & Installation
Clone the repository:
git clone https://github.com/haromets/LOOPQA.git

Install dependencies:
npm install

Run tests:
npx playwright test


📂 Project Structure
tests/projectBoard.spec.ts - Main test file for test scenarios
tests/testData.json - JSON file storing test data
playwright.config.ts - Playwright configuration file

✅ Test Cases
Test Case 1
Login to Demo App.
Navigate to "Web Application."
Verify "Implement user authentication" is in the "To Do" column.
Confirm tags: "Feature" "High Priority”
Test Case 2
Login to Demo App.
Navigate to "Web Application."
Verify "Fix navigation bug" is in the "To Do" column.
Confirm tags: "Bug"
Test Case 3
Login to Demo App.
Navigate to "Web Application."
Verify "Design system updates" is in the "In Progress" column.
Confirm tags: "Design”
Test Case 4
Login to Demo App.
Navigate to "Mobile Application."
Verify "Push notification system" is in the "To Do" column.
Confirm tags: "Feature”
Test Case 5
Login to Demo App.
Navigate to "Mobile Application."
Verify "Offline mode" is in the "In Progress" column.
Confirm tags: "Feature" & "High Priority”
Test Case 6
Login to Demo App.
Navigate to "Mobile Application."
Verify "App icon design" is in the "Done" column.
Confirm tags: "Design”

📎 Notes
The test suite uses soft assertions to improve debugging.
Test data is stored separately in testData.json for better maintainability.

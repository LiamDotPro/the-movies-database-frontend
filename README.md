# the-movies-database-frontend

Notes

1) I would of much rather started from something like create react app as project setup is very basic repeated code. Also you can eject further down the road if you get a specific scenario that requires advanced configuration.

2) I'll be using react router for scalability of declarative routing and simplicity, I don't want to recreate the wheel for routing when a small simple package is available and widely supported.

3) React Redux is super heavy for this application and I wouldn't of used it if one of the main objectives was scalability.

4) I've used prop types for some type safety inside components, but it's no where near as powerful as typescript.

5) I used flex grid to handle responsiveness inside the application because of ease of use and to add structure.

6) I choose redux saga's because there simple and easy to test.

7) I choose to use Axios so when testing you can make use of Axios Mocks and spies and the eco system for testing.

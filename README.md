# Node.js Server Port Binding Error

This repository demonstrates a common error in Node.js applications: failure to start the server due to port binding issues.  The original `server.js` file lacks proper error handling, resulting in unhelpful error messages when the specified port is unavailable. The improved `serverSolution.js` provides a solution that gracefully handles port binding errors.

## Problem

The `server.js` file attempts to start a server on port 3000. If port 3000 is already in use, the server will fail to start and throw an error. The error message is not always clear, making it difficult to diagnose the problem.

## Solution

The `serverSolution.js` provides a more robust solution that checks if the port is available before attempting to bind to it.  It includes more detailed error handling and logging, making the error messages more informative.
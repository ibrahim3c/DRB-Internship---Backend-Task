# DRB Internship – Backend Task

## Objective

This project is a small **REST API for a Route Scheduling System** built with Node.js. The primary goal is to design a clean, functional API that handles route and driver management, including the core business logic for scheduling assignments.

---

## Frameworks & Tools

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB (with Mongoose)

---

## API Endpoints

### Routes

#### `POST /api/routes`

Adds a new route to the system.

* **Request Body Example:**

    ```json
    {
      "startLocation": "Cairo",
      "endLocation": "Alexandria",
      "distance": 220,
      "estimatedTime": 4.5
    }
    ```

### Drivers

#### `POST /api/drivers`

Adds a new driver to the system.

* **Request Body Example:**

    ```json
    {
      "id": 101,
      "name": "Karim Adel",
      "licenseType": "C",
      "availability": true
    }
    ```

### Scheduling

#### `GET /api/schedule`

Returns the current schedule, showing which driver is assigned to each active route. Routes without an available driver will be marked as "unassigned".

### Bonus Endpoints

#### `GET /api/drivers/:id/history`

Returns a list of all past routes that were assigned to a specific driver, identified by their ID.

#### `GET /api/routes`

Returns a paginated list of all routes in the system.

* **Query Parameters:**
    * `page` (optional, default: 1)
    * `limit` (optional, default: 10)

---

## Features Implemented

* ✅ endpoints for managing drivers and routes.
* ✅ Core driver assignment logic based on availability.
* ✅ **Bonus**: Driver-specific route history endpoint.
* ✅ **Bonus**: Pagination support for fetching routes.
* ✅ Global error handling middleware for consistent error responses.
* ✅ Input validation for incoming requests.

---

## Setup Instructions

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-link>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd <project-directory>
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Create a `.env` file** in the root of the project and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=<your-mongodb-connection-string>
    ```

5.  **Start the server:**
    ```sh
    npm start
    ```
    The API will be running on `http://localhost:5000`.

---

## Assumptions Made

1.  **Database Choice**: MongoDB was selected as the database for its flexibility with document-based data.
2.  **Driver Availability**: A driver's `availability` status is a simple boolean. `true` means they are free, and `false` means they are currently on an active route.
3.  **Single Active Route**: It is assumed that a driver can only be assigned to one active route at any given time. The logic prevents assigning an unavailable driver to a new route.

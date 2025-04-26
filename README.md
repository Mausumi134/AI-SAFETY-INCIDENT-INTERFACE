# AI Safety Incident Dashboard

This project implements an interactive "AI Safety Incident Dashboard" component using React, TypeScript, HTML, and CSS. The dashboard allows users to view, filter, sort, and report AI safety incidents. It includes functionalities for displaying a list of incidents, filtering by severity, sorting by reported date, viewing details of each incident, and reporting new incidents.

![Screenshot 2025-04-26 201032](https://github.com/user-attachments/assets/6ed261e9-a1f8-444e-836c-a809712ab79e)

## Features

- **Incident List**: Displays a list of mock AI safety incidents with the following details:
  - **Title**
  - **Severity** (Low, Medium, High)
  - **Reported Date**
- **Filtering**: Filter incidents by severity (All, Low, Medium, High) using a dropdown.
- **Sorting**: Sort incidents by Reported Date (Newest First, Oldest First) using a dropdown.
- **View Details**: Each incident has a "View Details" button to toggle visibility of the full Description.
- **Report New Incident**: A form to report new incidents, including Title, Description, and Severity.
  - On form submission, the new incident is added to the displayed list (with basic input validation).
- **Responsive Design**: The layout is responsive using Flexbox or Grid, ensuring it works well on both desktop and mobile devices.

## Technologies Used

- **Frontend**: 
  - React
  - TypeScript
  - HTML/CSS (with Flexbox or Grid layout)
- **State Management**: React's `useState` for managing state within the component.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Mausumi134/AI-SAFETY-INCIDENT-INTERFACE.git
   ```

2. Navigate into the project directory:
   ```bash
   cd project
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

The application will start and can be accessed in your browser at `http://localhost:5173`.

## Folder Structure

```
AI-Safety-Incident/
│
├── dist/                     # Build output folder (auto-generated during build)
│
├── node_modules/             # Node.js packages (auto-generated after `npm install`)
│
├── public/                   # Public files like index.html
│
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   │   ├── Dashboard.tsx     # Main dashboard component
│   │   ├── FilterControls.tsx# Component for filtering incidents
│   │   ├── Header.tsx        # Header of the application
│   │   ├── IncidentCard.tsx  # Display individual incident
│   │   ├── IncidentForm.tsx  # Form to report a new incident
│   │   └── IncidentList.tsx  # List of incidents displayed in the dashboard
│   │
│   ├── data/                 # Data-related files (mock data or API services)
│   │   └── mockincidents.ts  # Mock incident data
│   │
│   ├── types/                # TypeScript type definitions
│   │   └── incident.ts       # Type definition for Incident
│   │
│   ├── App.tsx               # Root component
│   ├── index.css             # Global styles for the app
│   ├── main.tsx              # Main entry point for React app
│   └── vite-env.d.ts         # TypeScript environment configurations for Vite
│
├── .gitignore                # Specifies which files should be ignored by git
├── eslint.config.js          # ESLint configuration file
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation

```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Submit a pull request with a description of the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


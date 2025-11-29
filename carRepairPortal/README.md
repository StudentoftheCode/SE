Car Repair Portal

A full-stack web application for managing car repair jobs, customers, notes and print-ready job summaries. Built with Node.js, Express, MONGODB(Mongoose) and EJS

🔧 Features
	•	User Authentication (login + logout)
	•	Create / View / Edit / Delete repair jobs
	•	Add and manage customer information
	•	Add notes to each job
	•	Printable job summary (print-ready EJS template)
	•	Dark Mode support
	•	Responsive UI with Bootstrap
	•	Flash messages for form validation, errors, and success states

Tech Stack

Frontend:
	•	HTML, CSS,
	•	EJS templating engine

Backend:
	•	Node.js
	•	Express.js
	•	express-session
	•	express-flash

Database:
	•	MONDODB

  Setup Instructions
  1. Clone Repo
     git clone https://github.com/StudentoftheCode/SE/tree/main/carRepairPortal
     cd car-repair-portal
  2. Install Dependancies
     npm install  
  3. Create .env file
     MONGO_URI=mongodb://localhost:27017/carRepairPortal
     SESSION_SECRET=yourSecretKey
     PORT=3000
  4. Start the Server
     npm start

App runs at:
➡️ http://localhost:3000

🖨️ Print Job Feature

Your application includes a dedicated print-friendly view (print-job.ejs) that displays:
	•	Job details
	•	Customer contact info
	•	Repair description
	•	Notes
	•	Costs, labor, parts (if applicable)

The page is styled to print cleanly using the browser’s print dialog.

⸻

 Dark Mode
	•	Implemented using your custom CSS classes
	•	Ensures buttons, table cells, and form fields change correctly
	•	Fixes include ensuring “View” and “Notes” buttons remain visible in dark mode

(No Bootstrap used.)

⸻

 Possible Future Enhancements
	•	Export as PDF
	•	Customer search
	•	Staff roles (Admin vs Employee)
	•	Customer notifications
	•	Photo upload per job
	•	Activity logs

 

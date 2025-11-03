# 💼 Accounting Software

A simple and efficient **Invoice Management REST API** built with **Node.js**, **Express**, and **Sequelize**.  
This project helps manage **contractors, invoices, and PDF invoice generation** for a single company.

---

## 🚀 Overview

This application provides an easy-to-use API for creating and managing invoices and contractor data.  
It is designed for small or medium-sized businesses that need a lightweight self-hosted invoice management tool.

---

## ⚙️ Features

### 👥 Contractor Management

- Add, edit, list, and delete contractors.
- Archived contractors remain available for generating historical invoices.
- Keeps an audit trail of all contractor details for data integrity.

### 🧾 Invoice Management

- Add, list, and view invoices.
- Generate **PDF invoices** directly from the API.
- Automatically link invoices to contractor records.

### 🏢 Company Setup

- Supports **single-company configuration** (not SaaS multi-tenant).  
  The application focuses on managing invoices for one organization efficiently.

### 🧠 Additional Features

- Uses **Sequelize ORM** for database operations.
- Easy to switch between databases (PostgreSQL, MySQL, SQLite, etc.).

---

## ⚠️ Limitations

- Currently supports only one company for issuing invoices.
- Invoice correction (credit note) functionality is not yet implemented.

---

## 🧩 Tech Stack

- **Backend:** Node.js (Express 4)
- **Database:** PostgreSQL (via Sequelize ORM)
- **PDF Generation:** Built-in invoice export system
- **Testing:** Jest or Mocha (customizable)

---

## 🖥️ Installation & Setup

### 1. Prerequisites

Ensure you have **Node.js** and **PostgreSQL** installed and running.

### 2. Clone the Repository

```bash
git clone https://github.com/SevenSquare-Tech/accounting-software.git
cd accounting-software
npm install
```

### 3. Configure the Database

Duplicate the configuration file:

```bash
cp config/config-template.js config/config.js
```

Then, open `config/config.js` and update the database credentials according to your setup.

### 4. Start the Server

```bash
npm start
```

Your application will be available at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Changing the Database

This application uses **Sequelize ORM**, making it flexible to work with other databases.  
You can install and configure a different connector (MySQL, SQLite, MSSQL, etc.) and update your `config/config.js` accordingly.

---

## 🧪 Running Tests

To execute tests, simply run:

```bash
npm test
```

---

## 📌 Notes & Disclaimer

> ⚠️ This project was originally developed for managing **Polish invoices**. Some financial or tax details may differ based on your country’s regulations.  
> Use it as a base project or learning reference, and adapt it to your regional accounting rules.

---

## 🙌 Acknowledgements

Special thanks to the open-source community and contributors who made tools like **Node.js**, **Express**, and **Sequelize** possible.

---

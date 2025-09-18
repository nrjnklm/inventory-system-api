## **Modifying Data through API – Inventory Management App**

This live practical session introduces you to building a real-world backend. You'll learn to create API routes in Express that let users modify inventory data in a MongoDB database using Mongoose. You’ll also test your endpoints using an API client like Postman or Bruno.

Instead of a task manager, let’s build a simple **Inventory Management System**.

### **1. Scenario Overview**

You're developing the backend for a basic **inventory system**. Users should be able to:

- Add new inventory items
- Update item details (like quantity or price)
- Delete items that are no longer available

Each inventory item has the following fields:

- `name` (String, required)
- `quantity` (Number, default: 0)
- `price` (Number, required)

### **2. Plan Your API Endpoints**

Define the routes needed to modify inventory data:

| Endpoint            | Description               |
| ------------------- | ------------------------- |
| POST `/items`       | Add a new inventory item  |
| PUT `/items/:id`    | Update item details by ID |
| DELETE `/items/:id` | Delete an item by ID      |

Ensure your routes follow RESTful API standards.

### **3. Choose the Right Mongoose Methods**

Use suitable Mongoose methods for handling inventory data:

| Action | Mongoose Method            |
| ------ | -------------------------- |
| Create | `Item.create()`            |
| Update | `Item.findByIdAndUpdate()` |
| Delete | `Item.findByIdAndDelete()` |

### **4. Testing with API Client**

Use Postman or Bruno to test your inventory API:

- **POST**: Send `{"name": "Notebook", "price": 50}` and expect status `201 Created`
- **PUT**: Update an item's `quantity` to `100`, expect status `200 OK`
- **DELETE**: Delete an item, expect status `204 No Content`

Always confirm that your database reflects the correct changes after each test.

### **5. Repository and Setup Instructions**

**Fork the StackBlitz Project:**

- A pre-configured link will be provided
- Fork and work on your own version

**Push to GitHub:**
Either use GitHub integration or do a manual push:

```bash
git init
git remote add origin <your_repo_url>
git add .
git commit -m "Setup inventory API endpoints"
git push -u origin main
```

### **6. Submission Format**

Submit a **PDF file** with the following:

- GitHub repository link
- Google Drive link to your demo video (sharing set to `kalvium.community`)
- A short note (1–2 lines) about your schema or API logic

**Example PDF Naming Format:**
`inventory_api_<yourname>.pdf`

**Example Content:**

- GitHub: `https://github.com/<your_username>/inventory_api`
- Video: Google Drive link
- Note: “Created routes to manage inventory items with Mongoose CRUD operations.”

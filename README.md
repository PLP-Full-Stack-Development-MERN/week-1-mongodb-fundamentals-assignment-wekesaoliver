# MongoDB Setup and Usage Guide

## Prerequisites
Before running the MongoDB script, ensure you have the following installed on your system:

- [MongoDB](https://www.mongodb.com/try/download/community) (Ensure `mongod` service is running)
- [MongoDB Shell (`mongosh`)](https://www.mongodb.com/try/download/shell)
- [Visual Studio Code](https://code.visualstudio.com/)


## Setup Instructions

### 1. Install MongoDB
If MongoDB is not installed, download and install it from [MongoDB Download Center](https://www.mongodb.com/try/download/community). Ensure the MongoDB service (`mongod`) is running.

### 2. Verify Installation
Run the following command in a terminal to check if MongoDB is installed:
```sh
mongod --version
mongosh --version
```

### 3. Start MongoDB Server
Start the MongoDB service if it's not already running:
```sh
mongod
```

### 4. Open MongoDB Shell
In another terminal, start `mongosh` by running:
```sh
mongosh
```

### 5. Run the MongoDB Script
Save the provided MongoDB script as `mongodb_script.js`, then execute it using:
```sh
mongosh < mongodb_script.js
```
This will create the database, collections, and insert the necessary data.

### 6. Verify Data Insertion
After running the script, check if data is inserted successfully:
```sh
use library;
db.books.find().pretty();
db.users.find().pretty();
db.products.find().pretty();
db.orders.find().pretty();
```

## Additional Commands
### Retrieve Data
```sh
db.books.find()
db.books.find({ author: "George Orwell" })
db.books.find({ publishedYear: { $gt: 2000 } })
```

### Update Data
```sh
db.books.updateOne(
    { title: "1984" },
    { $set: { publishedYear: 1950 } }
);
db.books.updateMany({}, { $set: { rating: 5 } });
```

### Delete Data
```sh
db.books.deleteOne({ ISBN: "978-0-452-28423-4" })
db.books.deleteMany({ genre: "Romance" })
```

## Indexing
Create an index on the `author` field:
```sh
db.books.createIndex({ author: 1 })
```


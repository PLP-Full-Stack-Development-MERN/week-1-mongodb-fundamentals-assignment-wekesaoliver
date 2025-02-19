// Database and Collection Creation
use library;
db.createCollection("books");

// Insert Data
db.books.insertMany([
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        genre: "Fiction",
        ISBN: "978-0-06-112008-4"
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        genre: "Dystopian",
        ISBN: "978-0-452-28423-4"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genre: "Tragedy",
        ISBN: "978-0-7432-7356-5"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        publishedYear: 1851,
        genre: "Adventure",
        ISBN: "978-0-14-243724-7"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813,
        genre: "Romance",
        ISBN: "978-0-19-953556-9"
    }
]);

// Retrieve Data
db.books.find(); // Retrieve all books
db.books.find({ author: "George Orwell" }); // Retrieve books by George Orwell
db.books.find({ publishedYear: { $gt: 2000 } }); // Retrieve books published after 2000

// Update Data
db.books.updateOne(
    { title: "1984" },
    { $set: { publishedYear: 1950 } }
);

db.books.updateMany(
    {},
    { $set: { rating: 5 } }
);

// Delete Data
db.books.deleteOne({ ISBN: "978-0-452-28423-4" }); // Delete a specific book
db.books.deleteMany({ genre: "Romance" }); // Delete all books in the Romance genre

// Data Modeling Exercise

// Users Collection
db.createCollection("users");
db.users.insertMany([
    {
        userId: 1,
        name: "John Doe",
        email: "john@gmail.com",
        address: {
            street: "123 Main St",
            city: "California",
            state: "CA",
            zip: "12345"
        },
        orders: [1, 2]
    },
    {
        userId: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        address: {
            street: "456 Elm St",
            city: "New York",
            state: "NY",
            zip: "67890"
        },
        orders: [3]
    }
]);

// Products Collection
db.createCollection("products");
db.products.insertMany([
    {
        productId: 1,
        name: "Laptop",
        description: "A high-performance laptop",
        price: 999.99,
        category: "Electronics",
        stock: 50
    },
    {
        productId: 2,
        name: "Smartphone",
        description: "A latest model smartphone",
        price: 699.99,
        category: "Electronics",
        stock: 100
    }
]);

// Orders Collection
db.createCollection("orders");
db.orders.insertMany([
    {
        orderId: 1,
        userId: 1,
        products: [
            { productId: 1, quantity: 1 },
            { productId: 2, quantity: 2 }
        ],
        total: 2399.97,
        orderDate: new Date("2023-10-01")
    },
    {
        orderId: 2,
        userId: 1,
        products: [
            { productId: 2, quantity: 1 }
        ],
        total: 699.99,
        orderDate: new Date("2023-10-05")
    },
    {
        orderId: 3,
        userId: 2,
        products: [
            { productId: 1, quantity: 1 }
        ],
        total: 999.99,
        orderDate: new Date("2023-10-10")
    }
]);

// Aggregation Pipeline

// Total number of books per genre
db.books.aggregate([
    {
        $group: {
            _id: "$genre",
            totalBooks: { $sum: 1 }
        }
    }
]);

// Average published year of all books
db.books.aggregate([
    {
        $group: {
            _id: null,
            averagePublishedYear: { $avg: "$publishedYear" }
        }
    }
]);

// Identify the top-rated book
db.books.aggregate([
    {
        $sort: { rating: -1 }
    },
    {
        $limit: 1
    }
]);

// Indexing

// Create Index on Author Field
db.books.createIndex({ author: 1 });


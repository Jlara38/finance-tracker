import * as SQLite from 'expo-sqlite'

// This will open our database that will enable us to store data.
const db = SQLite.openDatabaseSync('expenses.db');

  useEffect(() => {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        amount INTEGER NOT NULL,
        description TEXT,
        category TEXT,
        date TEXT
      );`
    )

    // Only insert if table is empty
    const result = db.getFirstSync('SELECT COUNT(*) as count FROM expenses')
    if (result.count === 0) {
      db.execSync(
        `INSERT INTO expenses (type, amount, description, category, date) VALUES
          ('income', 3000, 'Monthly salary', 'Salary', '2024-01-01'),
          ('expense', 50, 'Grocery run', 'Food', '2024-01-02'),
          ('expense', 120, 'Electric bill', 'Utilities', '2024-01-03'),
          ('income', 500, 'Freelance project', 'Side income', '2024-01-04'),
          ('expense', 200, 'New shoes', 'Shopping', '2024-01-05');`
      )
    }

    // Add this to confirm data is there
    const expenses = db.getAllSync('SELECT * FROM expenses')
    console.log(expenses)

    setIsLoading(false)
  }, [])
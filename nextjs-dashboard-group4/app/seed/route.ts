import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() { 
  try {
    // Create tables
    await sql`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER REFERENCES customers(id),
        amount DECIMAL,
        status VARCHAR(50)
      );
    `;

    // Insert demo data
    await sql`INSERT INTO customers (name, email) VALUES ('Alice Johnson', 'alice@example.com');`;
    await sql`INSERT INTO customers (name, email) VALUES ('Bob Smith', 'bob@example.com');`;

    await sql`INSERT INTO invoices (customer_id, amount, status) VALUES (1, 250.00, 'paid');`;
    await sql`INSERT INTO invoices (customer_id, amount, status) VALUES (2, 125.00, 'pending');`;

    return NextResponse.json({ message: 'Database seeded successfully ✅' });
  } catch (error: any) {
    console.error('Seeding error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

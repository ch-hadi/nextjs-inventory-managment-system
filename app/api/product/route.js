import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const database = client.db('stock-managment');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.findOne(query);
    return NextResponse.json(allProducts);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//  Adding Product
export async function POST(request) {
  try {
    const body = request.body;
    const database = client.db('stock-managment');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const product = await inventory.insertOne(body);
    return NextResponse.json(product);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Replace the uri string with your connection string.
const uri =
  'mongodb+srv://chhadi:wBgtnawGGTt37bxn@cluster0.e2t2ihr.mongodb.net/';
const client = new MongoClient(uri);

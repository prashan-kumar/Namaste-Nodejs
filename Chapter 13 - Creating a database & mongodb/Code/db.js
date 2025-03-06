const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

//connection URL
const url= "mongodb+srv://prashantkumars584:bJ1GXStUU6qKmu7z@namasteproject.xuvvz.mongodb.net/"
const client = new MongoClient(url);

const dbname = "mainDatabase"

async function main() {
    await client.connect();
    console.log("Database connected successfully")
    const db = client.db(dbname);
    const collection = db.collection("collection")

    const data = {
        firstname: "random",
        lastname: "kumar"
    }


    // Create
    const insertData = await collection.insertMany([data])
    console.log("data inserted = ", insertData)


    // // Update
    // // const updateData = await collection.updateOne({ _id: new ObjectId('67066d6a3be8f41630d5dae4') }, { $set: { firstname: "Mint" } })
    // // console.log("Updated document ", updateData)

    
    //Read 
    const findData = await collection.find({}).toArray();
    console.log("All data :", findData)

    // //delete
    // // const deletedata = await collection.deleteOne({ _id: new ObjectId('670668562c6bd11e25050c13') })
    // // console.log("deleted data=>", deletedata)

    // //Count documents
    // const countData = await collection.countDocuments({})
    // console.log("Number of documents in db are :", countData)



    return 'done'


}

main().then(console.log)
    .catch(console.error)
    .finally(() => client.close());

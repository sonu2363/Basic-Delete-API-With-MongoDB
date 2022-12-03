const {MongoClient}=require('mongodb')

const url='mongodb://0.0.0.0:27017'
const client=new MongoClient(url)

const dbName='e-com'

async function main(){
    await client.connect()
    const db=client.db(dbName)
    
   const collection=db.collection('products')
    
    return collection
     
}
module.exports=main

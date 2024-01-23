
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('course').insertMany(


    [
        {
        
          "name": "java",
          "price": "20000",
          "author": "harry"
        },
        {
        
          "name": "java",
          "price": "21000",
          "author": "susan"
        },
        {
          
          "name": "java",
          "price": "19000",
          "author": "john"
        },
        {
          
          "name": "java",
          "price": "18000",
          "author": "linda"
        },
        {
        
          "name": "java",
          "price": "22000",
          "author": "alex"
        },
        {
          
          "name": "java",
          "price": "20500",
          "author": "david"
        }
      ]
      



);



// Print a message to the output window.
console.log(`done insarting data`);


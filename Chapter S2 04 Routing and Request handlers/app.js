// const express=require("express")
// const app=express();

// //this is yhe perfect way of wrotting of routes 
// //beacuse browwser will parse the routes fron top top to bottom

// //  app.use("/hello/2",(req,res)=>{
// //   res.send("hello2")
// //  })

// //  app.use("/test",(req,res)=>{
// //   res.send("test");
// //  })

// //  app.use("/hello",(req,res)=>{
// //   res.send("hello");
// //  })

// //  app.use("/",(req,res)=>{
// //   res.send("home");
// //  })

// app.use("/hello",(req,res)=>{
//   res.send("hahahahahaha");
// });

// //this will only handle the get call to / hello
// app.get("/hello",(req,res)=>{
//   res.send({firstName:"prashant",lastName:"kumar"});
// });

// app.post("/hello",(req,res)=>{
//   res.send("data successfully saved");
// });

// app.delete("/hello",(req,res)=>{
//   res.send("data succesfully deleted");
// });




// //this will match all the HTTP method api calls to /test
// app.use("/test",(req,res)=>{
//   res.send("test");
// });

//  app.listen(7777,()=>{
//   console.log("server is running on port 7777")
//  });




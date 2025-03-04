const express=require("express")

const app=express();
 
// //Both are working same way
// //app.use("/user", [rh1,rh2,rh3,rh4,rh5])
// //app.use("/user", [rh1,rh2,rh3],rh4,rh5)

// app.use("/user", [(req,res,next)=>{
//    console.log("first");
//    //next();
//    res.send("1st response");
//    //next();

// },(req,res)=>{
//   console.log("second");
//   res.send("2nd response");
//   //res.send("2nd response") //if response is not written -> hanging and witing to the response.
// }] );


// // get/user=>middleware=>route handler

// app.get("/user",(req,res,next)=>{
//    console.log("first");
//    //res.send("1st response");
//    //next();  
// });

// app.get("/user",(req,res,next)=>{
//    console.log("second");
//    res.send("2nd response");
//    //next();    //give some error
// },(req,res)=>{
//   console.log("third");
//   res.send("3rd response");
// });

// // hanle auth middleware for all get,post,patch,delete requrests
// app.use("/admin",(req,res,next)=>{
//   console.log("admin auth is getting checked");
//   const token="xyz";
//   const isAdminAuthorized = token=== "xyz";
//   if(isAdminAuthorized){  
//      next();
//   }
//   else{
//     res.status(401).send("unauthorized Acess");;
//   }
// });

// app.get("/admin/getAllData",(req,res,next)=>{
  
//   // logic checking if the resquest is autorized or not
  
//   // console.log("admin auth is getting checked");
//   // const token="xyz";
//   // const isAdminAuthorized=token===xyz;
//   // if(isAdminAuthorized){  
//   //    next();
//   // }
//   // else{
//   //   res.status(401).send("unauthorized Acess");;
//   // }

//    res.send("All data");
// });

// app.get("/admin/deleteData",(req,res)=>{
//   res.send("delete data");
// })



// const {adminAuth,userAuth}=require("./middleware/auth");

// app.use("/admin",adminAuth);

// app.user("/user/login",(req,res)=>{
//   res.send("user login");
// })

// app.use("user/getAllData",userAutg,(req,res)=>{
//   res.send("All data");
// })

// app.get("/admin/getAllData",(req,res)=>{
//   res.send("All Data");
// });

// app.get("/admin/deleteData",(req,res)=>{
//   res.send("delete Data");
// })


// error handling using app.use("/",(err,req,res,next)=>{ })

app.use("/",(err,req,res,next)=>{
  if(err){
    //log your error
    res.status(500).send("somthing went wrong");
  }
});

app.get("/getUserData",(req,res)=>{

//   try{
//     //logic of DB call and get user data
//     throw new Error("error");
//     res.send("user data sent");
// }catch(err){
//    res.status(500).send("some error occured contact team");
// }



  //logic of DB call and get user data
  throw new Error("error Occur");

  res.send("user data");

})

app.use("/",(err,req,res,next)=>{
  if(err){
    //log your error
    res.status(500).send("somthing went wrong");
  }
});


 app.listen(7777,()=>{ 
  console.log("server is running on port 7777")
 });
var count =0;
const temp = document.getElementById("box");
 temp.addEventListener("mouseenter",()=>{
     count+=1;

     if(count%2==0)
     {
         temp.className="boxl";
     }
     else{
         temp.className="boxr";
     }
    //  console.log(count);
   });
//    temp.addEventListener("mouseleave",(count)=>{
//        count=count+1;
//     if(count%2==0)
//     {
//         temp.className="boxl";
//     }
//     else{
//      temp.className="boxl";

//     }

// });
   
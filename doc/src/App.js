


// function App() {
//   return (
//     <div>
//       <h1>Hello react</h1>
//       <button>Count</button>
//     </div>
    
//   );
// }

// export default App;

const user = {
  name : "Tom Bhayya",
  imageurl : "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize : 90,
};

export default function profile(){
  return(
    <>
    <h1>
      {user.name}
    </h1>
    <img>
    </img>
    </>
  )
}

//   import List from './List.jsx'
//  import Student  from './Student.jsx'
// import Button from './Button.jsx'
// import Card from './Card.jsx'
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import React, { useState } from 'react';
// import UserGreeting from './UserGreeting'
// import Button from './Button.jsx'
// import ProfilePicture from './ProfilePicture.jsx';
// import MyComponent from "./MyComponent";
// import Counter from './Counter.jsx'
// import MyComponent2 from "./MyComponent2";
// import ColorPicker from "./ColorPicker.jsx"//
// import MyComponent4 from "./MyComponent4";
// import MyComponent5 from "./MyComponent5"; 
// import MyComponent6 from "./MyComponent6";
import ToDoList from "./ToDoList";



function App() {

   

   // const fruits = [{id: 1, name: "apple", calories: 95}, 
   //                 {id: 2, name: "orange", calories: 45}, 
   //                 {id: 3, name: "banana", calories: 105}, 
   //                 {id: 4, name: "coconut", calories: 159}, 
   //                 {id: 5, name: "pineapple", calories: 37}];

   // const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
   //                   {id: 7, name: "celery", calories: 15}, 
   //                   {id: 8, name: "carrots", calories: 25}, 
   //                   {id: 9, name: "corn", calories: 63}, 
   //                   {id: 10, name: "broccoli", calories: 50}];for list rendering



// const [isLoggedIn, setIsLoggedIn] = useState(false);

   // const handleButtonClick = () => {
   //    setIsLoggedIn(!isLoggedIn);
   // }; // For Login button

   return (

      <ToDoList />
      // <MyComponent6 />
      //   <MyComponent5 />
      // <MyComponent4 />
      // <MyComponent3 />

      //  <ColorPicker />

      //<MyComponent2/>//for onChange
      // <Counter />

      // <MyComponent />
      // <ProfilePicture />

      // <Button />
      // <>
      // {fruits.length > 0 && <List items={fruits} category="fruits"/>}
      // {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>} For list rendering
      // </>


      // <>
      //    <UserGreeting isLoggedIn={isLoggedIn} username="ChiefDaddy" />
      //    <button onClick={handleButtonClick}>
      //       {isLoggedIn ? 'Log Out' : 'Log In'}
      //    </button>
      // </> //For login and logout button

      // <>
      //    <UserGreeting isLoggedIn={true} username="ChiefDaddy" />

      // </>
      // <>
      // <Student name="Thegods" age={30} isStudent={true}/>
      // <Student name="Mjbaby"  age={42} isStudent={false}/>
      // <Student name="Royalchukwu" age={13} isStudent={false}/>
      // <Student name="Gbewa" age={27} isStudent={true}/>
      // {/* <Student name="Lois"/> */}
      // <Student />
      // </>


      // <Button/>
      //  <>
      //  <Card/>
      //   <Card/>
      //   <Card/>
      //   <Card/>
      //  </>

      //   // <Header></Header>
      //   <>
      //     <Header/>
      //     <Food/>
      //     <Footer />
      //   </>

   );
}

export default App

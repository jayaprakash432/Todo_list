   import Todos from "./components/Todos";  // new

   function App() {
     return (
       <ChakraProvider value={defaultSystem}>
         <Header />
         <Todos />  {/* new */}
       </ChakraProvider>
     );
   }
   
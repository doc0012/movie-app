import Moviecard from "./Moviecard"

 const Movielist= ({ movies, searchName, searchRating }) => {
   return (
     <div
       style={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-evenly",
         flexWrap: "wrap"
       }}
     >
       {movies
         .filter(
           (el) =>
             el.name.toLowerCase().includes(searchName.toLowerCase()) &&
             el.rating >= searchRating
         )
         .map((el) => (
           <Moviecard el={el} />
         ))}
     </div>
   );
 };

  export default Movielist 
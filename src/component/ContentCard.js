function ContentCard(prop){
    return(
     <div className="content-card">
       <h2>{prop.title || "Title of content of card"}</h2>
       <p>{prop.detail ||"This is the content of the card "}</p>
     </div>
    );
 
 
   }
 export default ContentCard
import logo from './logo.svg';
import './App.css';


function ContentCard(prop){
   return(
    <div className="content-card">
      <h2>{prop.title || "Title of content of card"}</h2>
      <p>{prop.detail ||"This is the content of the card "}</p>
    </div>
   );


  }
//Header
function Header(prop){
  return(
    <header className="header">
       <div className="logo">Your logo</div>
       <nav className="nav">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Service</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
       </nav>
    </header>
  );

}

function Footer(prop){
    return(
     <footer className="footer">
       <p>&copy; {new Date().getFullYear()}Your company name</p>
     </footer>   

    );
    
    
}


function App() {
  return (
    <div className="App">
     <Header></Header>
     <ContentCard></ContentCard>
     <ContentCard></ContentCard>
     <ContentCard></ContentCard>
     <Footer></Footer>
    </div>
  );
}

export default App;

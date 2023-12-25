import logo from './logo.svg';
import './App.css';
import { Players } from './Player';
import { useState } from 'react';
import ContentCard from './component/ContentCard';
import Header from './component/Header';
import Footer from './component/Footer';
//Header


function App() {
  const [data, setdata] = useState(Players);
  return (
    <div className="App">
     <Header></Header>
     {data && data.map(item =>(
      <ContentCard title={item.name} detail={item.club}></ContentCard>
     ))}
    
     <Footer></Footer>
    </div>
  );
}

export default App;

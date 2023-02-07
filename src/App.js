import './App.css';
import axios from 'axios'

function App() {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", "English is hard, but detectably so");
  



  const handlesubmit = (e) => {
    axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
     'data: encodedParams',
     {
      headers: {

        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'e2d341dda3mshd2e862573ecfccbp171fe8jsn8c06ebba684c',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },


    }
     
     )


  }
  return (
    <div className="App">

      <button onClick={handlesubmit}>Post request</button>


    </div>
  );
}

export default App;

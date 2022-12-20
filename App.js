import './App.css';
import Photo from './Profile/Photo';
import Pro from './Profile/Pro';
function App() {
const infos ={
  fullname:"Hana Achour",
  bio: "On a mission to learn React",
  profession:"Web Dev",
};
const handlename=()=>{
  alert(infos.fullname);
};

  return (
    <div className="App">
      <Pro
        fullname={infos.fullname}
        bio={infos.bio}
        profession={infos.profession}
          fun={handlename}>;
      </Pro>
      <Photo>Hello this is me *___*</Photo>
    </div>
  );
}

export default App;

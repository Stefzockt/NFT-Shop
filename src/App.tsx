import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {NavBarComponent} from "./components/NavBarComponent";
import {Outlet} from "@mui/icons-material";
import {User} from "./Models/User";

const logoUrl="data:image/jpeg;base64,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"

function App() {
    const user:User={
        UserName:"test User",
        avatarSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5spYMNieWX-f77dDLGoPujAm2Ra7xcjypXw&usqp=CAU"
    }
  return (
    <div className="App">
      <header>
        <NavBarComponent loggedInUser={user} title={"Nft Trading"} logoUrl={logoUrl}/>
      </header>
        <div>
            <Outlet/>
        </div>
    </div>
  );
}

export default App;

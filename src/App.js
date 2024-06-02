import { BrowserRouter , Routes ,Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import Hearder from "./Composents/Hearder.jsx";
const Acceuil = lazy(()=> import("./Pages/Acceuil.jsx"))
const Decouvrir = lazy(()=> import("./Pages/Decouvrir.jsx"))
const DetailProduit = lazy(()=> import("./Pages/DetailProduit.jsx"))
const Profil = lazy(()=> import("./Pages/Profil.jsx"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Hearder/>}>
         <Routes>
           <Route path="/" element={<Acceuil/>}/>
           <Route path="/decouvrir" element={<Decouvrir/>} />
           <Route path="/profil/:id" element={<Profil/>} />
           <Route path="/:id" element={<DetailProduit/>} />
           <Route path="/profil/:id/personne_detail" element={<Profil/>}/>
           <Route path="/profil/:id/preferences" element={<Profil/>}/>
           <Route path="/profil/:id/securite" element={<Profil/>}/>
           <Route path="/profil/:id/messages" element={<Profil/>}/>
           <Route path="/profil/:id/setting" element={<Profil/>}/>
           <Route path="/profil/:id/biens" element={<Profil/>}/>
         </Routes>
         </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { GlobalStyle } from "./globalStyles";
import { Wrapper } from "style";
import { Login } from "pages/Login";
import { ProfileProvider } from "context/ProfileContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateProfile } from "pages/CreateProfile";
import { Profile } from "pages/Profile";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateProfile />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </Wrapper>
  );
}

export default App;

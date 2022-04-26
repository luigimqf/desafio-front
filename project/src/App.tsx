import { GlobalStyle } from "./globalStyles";
import { Wrapper } from "style";
import { Login } from "components/login/Login";
import { ProfileProvider } from "context/ProfileContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StepsHolder } from "components/createProfile/StepsHolder";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<StepsHolder />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </Wrapper>
  );
}

export default App;

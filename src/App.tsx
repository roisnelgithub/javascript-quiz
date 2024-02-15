import { Container } from "@mui/material";
import HeaderQuiz from "./components/header/HeaderQuiz";
import StartScreen from "./screens/start-screen/StartScreen";

function App() {
  return (
    <>
      <main>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <HeaderQuiz />
          <StartScreen />
        </Container>
      </main>
    </>
  );
}

export default App;

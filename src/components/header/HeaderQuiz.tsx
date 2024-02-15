import { Stack, Typography } from "@mui/material";
import JavaScriptLogo from "../javascript-logo/JavaScriptLogo";

const HeaderQuiz = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={"center"}
      alignContent={"center"}
      p={1}
    >
      <JavaScriptLogo width={32} height={32} />
      <Typography fontSize={{ xs: "1.5rem", sm: "1.8rem" }}>
        Java Script Quiz
      </Typography>
    </Stack>
  );
};

export default HeaderQuiz;

import { Stack, Typography, useMediaQuery } from "@mui/material";
import JavaScriptLogo from "../javascript-logo/JavaScriptLogo";

const HeaderQuiz = () => {
  const matches = useMediaQuery("(min-width:380px)");
  return (
    <Stack direction="row" spacing={1} p={1}>
      <JavaScriptLogo width={32} height={32} />
      <Typography fontSize={matches ? "1.8rem" : "1.7rem"}>
        Javascript Quiz
      </Typography>
    </Stack>
  );
};

export default HeaderQuiz;

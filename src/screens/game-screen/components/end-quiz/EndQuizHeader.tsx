import { Stack, Typography } from "@mui/material";
import MultiColoredConfetti from "../../../../components/icons/MultiColoredConfetti";
import HappyFace from "../../../../components/icons/HappyFace";
import SadFace from "../../../../components/icons/SadFace";

interface EndQuizHeaderProps {
  score: number;
}
const EndQuizHeader = ({ score }: EndQuizHeaderProps) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      {score === 100 && (
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <MultiColoredConfetti size={50} />
          <Stack direction={"column"}>
            <Typography variant="h5">¡EXCELENTE!</Typography>
            <Typography fontSize={"0.7rem"}>
              ¡Has alcanzado la máxima puntuación!
            </Typography>
          </Stack>
        </Stack>
      )}
      {score >= 90 && score < 100 && (
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <HappyFace size={40} />
          <Stack direction={"column"}>
            <Typography variant="h5">¡MUY BIEN!</Typography>
            <Typography fontSize={"0.7rem"}>
              ¡Continua así, vas muy bien!
            </Typography>
          </Stack>
        </Stack>
      )}
      {score >= 60 && score < 89 && (
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <HappyFace size={40} />
          <Stack direction={"column"}>
            <Typography variant="h5">¡EH, NO ESTA MAL!</Typography>
            <Typography fontSize={"0.7rem"}>¡Hay que darle caña!</Typography>
          </Stack>
        </Stack>
      )}
      {score < 60 && (
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <SadFace size={40} />
          <Stack direction="column">
            <Typography variant="h6">¡QUE PENA!</Typography>
            <Typography fontSize={"0.7rem"}>
              Hay que estudiar más. ¡Ánimos!
            </Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default EndQuizHeader;

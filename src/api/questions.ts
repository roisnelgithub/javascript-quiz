export const getQuestions = async () => {
  const res = await fetch("http://localhost:5173/data.json");
  const data = await res.json();
  return data;
};

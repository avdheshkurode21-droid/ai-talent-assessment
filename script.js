const API_KEY = AIzaSyBzIIt_H6QsrQGyqdmmLuvi9Trm_O-Xvko;

async function generateQuestion() {
  const domain = document.getElementById("domain").value;
  if (!domain) {
    alert("Please select a domain");
    return;
  }

  const prompt = `
You are an HR interviewer.
Ask one professional interview question for a ${domain} candidate.
Difficulty: medium.
Only give the question.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await response.json();
  const question =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "AI error. Try again.";

  document.getElementById("questionBox").innerHTML =
    `<h3>Question:</h3><p>${question}</p>`;
}

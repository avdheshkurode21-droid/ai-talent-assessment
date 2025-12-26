const API_KEY = "AIzaSyBzIIt_H6QsrQGyqdmmLuvi9Trm_O-Xvko";

async function generateQuestion() {
  const domain = document.getElementById("domain").value;
  if (!domain) {
    alert("Select domain first");
    return;
  }

  const prompt = `Ask one professional interview question for a ${domain} candidate.`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await res.json();
    document.getElementById("questionBox").innerText =
      data.candidates[0].content.parts[0].text;

  } catch (e) {
    document.getElementById("questionBox").innerText =
      "Error: API blocked by browser (CORS).";
  }
}


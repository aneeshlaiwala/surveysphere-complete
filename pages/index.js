export default function Home() {
  const features = [
    {
      title: "Voice-Based Survey Builder",
      image: "/feature_1.png",
      description: "Create surveys using voice commands. AI handles logic like skip patterns and validations."
    },
    {
      title: "Gamified Question Wording",
      image: "/feature_4.png",
      description: "Survey questions become games — with badges, levels, and visual progress bars."
    },
    {
      title: "Avatar-Based Questioning",
      image: "/feature_2.png",
      description: "Animated avatars talk to respondents and collect feedback."
    }
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>🎯 SurveySphere Storyboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginTop: "2rem" }}>
        {features.map((f, i) => (
          <div key={i} style={{ width: 300, border: "1px solid #ccc", borderRadius: 10, padding: 10 }}>
            <img src={f.image} alt={f.title} width="300" height="180" />
            <h2 style={{ fontSize: "1.2rem", marginTop: 10 }}>{f.title}</h2>
            <p style={{ fontSize: "0.9rem" }}>{f.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

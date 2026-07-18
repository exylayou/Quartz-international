
async function testPost() {
  const payload = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    scope: "cabinets-countertops",
    preferredStyle: "Shaker",
    cabinetColor: "white",
    budgetTier: "premium",
    hasIsland: false,
    isCondo: false,
    postalCode: "M5V 2T6",
    timeline: "3-6-months",
    images: [
      {
        base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=",
        name: "test_kitchen.jpg"
      }
    ]
  };

  try {
    const res = await fetch('http://localhost:3000/api/design-recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("Response Status:", res.status);
    console.log("Response Data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

testPost();

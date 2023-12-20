// Fetch data from the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let totalScore = 0;

    // Iterate through each category and update the HTML
    data.forEach((category) => {
      totalScore += category.score;
      document.querySelector(
        `.summary_${category.category.toLowerCase()} span`
      ).textContent = category.score;
    });

    // Calculate the average score
    const averageScore = Math.round(totalScore / data.length);

    // Update the result score with the average
    document.querySelector(".result_score p").textContent = averageScore;
  })
  .catch((error) => console.error("Error loading JSON:", error));

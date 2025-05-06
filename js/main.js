function calculateAge() {
    const year = document.getElementById("birthYear").value;
    fetch(`/api/age?year=${year}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("ageResult").textContent = `You are ${data.age} years old.`;
      })
      .catch(err => console.error(err));
  }
  
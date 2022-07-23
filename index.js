const button = document.getElementsByTagName("button");

const fareMap = {
  upto10: {
    fare: 100,
  },
  upto50: {
    fare: 300,
  },
  upto100: {
    fare: 500,
  },
  upto200: {
    fare: 1000,
  },
  upto300: {
    fare: 1200,
  },
  upto400: {
    fare: 1500,
  },
};

function fareCalculator() {
  const totalFare = getTotalFare();
  const results = document.getElementById("Answer");

  if (isNaN(totalFare)) {
    results.textContent = totalFare;
  } else {
    results.textContent = `Total Fare: Ksh${totalFare}`;
  }
  // also use TextContent to take js to html....//use value when reading from html to js
}

function getTotalFare() {
  const distance = parseInt(document.getElementById("dist1").value);
  const people = parseInt(document.getElementById("pp2").value);
  let fare = 0;

  if (distance >= 1 && distance <= 10) {
    fare = calculateFare("upto10", people);
  } else if (distance <= 50 && distance >= 11) {
    fare = calculateFare("upto50", people);
  } else if (distance <= 100 && distance >= 51) {
    fare = calculateFare("upto100", people);
  } else if (distance <= 200 && distance >= 101) {
    fare = calculateFare("upto200", people);
  } else if (distance <= 300 && distance >= 201) {
    fare = calculateFare("upto300", people);
  } else if (distance <= 400 && distance >= 301) {
    fare = calculateFare("upto400", people);
  } else {
    return "Bus doesn't go beyond this point";
  }

  return fare;
}

function calculateFare(FareMapKey, people) {
  return fareMap[FareMapKey].fare * people;
}

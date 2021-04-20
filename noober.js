// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Present in human-readable format
  console.log(
    `Noober x Passenger: ${passengerDetails.first} ${passengerDetails.last}
     - ${passengerDetails.phoneNumber}. Pickup at ${pickupLocation}.
     Drop-off at ${dropoffLocation}`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})

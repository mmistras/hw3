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

// Define each object
// Passenger Details objects
let passengerFirstName = ride.passengerDetails.first
let passengerLastName = ride.passengerDetails.last
let passengerPhoneNumber = ride.passengerDetails.phoneNumber

// pickup location objects
let pickupAddress = ride.pickupLocation.address
let pickupCity = ride.pickupLocation.city
let pickupState = ride.pickupLocation.state
let pickupZip = ride.pickupLocation.zip

// dropoff location objects
let dropoffAddress = ride.pickupLocation.address
let dropoffCity = ride.pickupLocation.city
let dropoffState = ride.pickupLocation.state
let dropoffZip = ride.pickupLocation.zip

// Pre-define complex address strings
let pickupLocation = `${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}`
let dropoffLocation = `${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`

// Create purple/XL/X conditional
  // first define necessary variables
let purpleReq = ride.purpleRequested
let numOfPass = ride.numberOfPassengers
let rideStatus
  // if statement
if (purpleReq == 1) {rideStatus = `Purple`}
else if (purpleReq == 0 && numOfPass > 3) {rideStatus = `XL`}
else {rideStatus = `X`}

// printing code
console.log(`Noober ${rideStatus} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupLocation}. Drop-off at ${dropoffLocation}`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize
            return true
        } else {
            return false
        }
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
        return true
    }
}

// seatParty
// removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))


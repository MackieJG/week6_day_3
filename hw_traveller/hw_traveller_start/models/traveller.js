const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter( (journey) => {
    if (journey.transport === transport) {
      return journey;
      
    }
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter( (journey) => {
    if (journey.distance > minDistance) {
      return journey;
    };
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce( (totalDistance, journey) => {
        return totalDistance += journey.distance;
    }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.forEach((journey) => {
    return journey.transport;
  });
};


module.exports = Traveller;






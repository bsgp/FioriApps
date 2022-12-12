sap.ui.define(["sap/ui/integration/Extension", "sap/ui/model/json/JSONModel"], function (Extension, JSONModel) {
	"use strict";

	var DataExtension = Extension.extend("com.sap.sample.UICardAdaptive.DataExtension");
    // should return a promise
	DataExtension.prototype.getData = function () {
        var oContactModel = new JSONModel(
            {
                "@context": "http://schema.org",
                "@type": "FlightReservation",
                "reservationId": "RXJ34P",
                "reservationStatus": "http://schema.org/ReservationConfirmed",
                "passengerPriorityStatus": "Fast Track",
                "passengerSequenceNumber": "ABC123",
                "securityScreening": "TSA PreCheck",
                "underName": {
                  "@type": "Person",
                  "name": "Sarah Hum"
                },
                "reservationFor": {
                  "@type": "Flight",
                  "flightNumber": "KL605",
                  "provider": {
                  "@type": "Airline",
                  "name": "KLM",
                  "iataCode": "KL",
                  "boardingPolicy": "http://schema.org/ZoneBoardingPolicy"
                  },
                  "seller": {
                  "@type": "Airline",
                  "name": "KLM",
                  "iataCode": "KL"
                  },
                  "departureAirport": {
                  "@type": "Airport",
                  "name": "Amsterdam Airport",
                  "iataCode": "AMS"
                  },
                  "departureTime": "2017-03-04T09:20:00-01:00",
                  "arrivalAirport": {
                  "@type": "Airport",
                  "name": "San Francisco Airport",
                  "iataCode": "SFO"
                  },
                  "arrivalTime": "2017-03-05T08:20:00+04:00"
                }
            }
        );
        return Promise.resolve(oContactModel.getData());
	};

	return DataExtension;
});

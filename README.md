### MINI-WEATHER-APPLICATION

This mini weather application  that helps to determine weather condition for a place  in simple detaisl

## Sample output

# Before Enter the location
<img width="1686" height="575" alt="image" src="https://github.com/user-attachments/assets/82d30bd6-49d1-4126-a48a-4d20bf55e5da" />


# After Enter the location( sample various city)

<img width="861" height="626" alt="image" src="https://github.com/user-attachments/assets/82eb6b2e-375e-4ddd-a5ea-bd493429de91" />

<img width="788" height="643" alt="image" src="https://github.com/user-attachments/assets/8ac01bdc-caf1-4673-9f49-55ab31aaff18" />



# Handled  location if not found

<img width="789" height="404" alt="image" src="https://github.com/user-attachments/assets/64fa5115-f171-41e4-847a-230aad5222d8" />

## Sample response when search location

``
{
    "location": {
        "name": "Dodoma",
        "region": "Dodoma",
        "country": "Tanzania",
        "lat": -6.1833,
        "lon": 35.75,
        "tz_id": "Africa/Dar_es_Salaam",
        "localtime_epoch": 1774603769,
        "localtime": "2026-03-27 12:29"
    },
    "current": {
        "last_updated_epoch": 1774602900,
        "last_updated": "2026-03-27 12:15",
        "temp_c": 23.9,
        "temp_f": 75.0,
        "is_day": 1,
        "condition": {
            "text": "Patchy rain nearby",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
            "code": 1063
        },
        "wind_mph": 6.7,
        "wind_kph": 10.8,
        "wind_degree": 85,
        "wind_dir": "E",
        "pressure_mb": 1016.0,
        "pressure_in": 29.99,
        "precip_mm": 0.1,
        "precip_in": 0.0,
        "humidity": 67,
        "cloud": 54,
        "feelslike_c": 25.5,
        "feelslike_f": 78.0,
        "windchill_c": 23.9,
        "windchill_f": 75.0,
        "heatindex_c": 25.5,
        "heatindex_f": 78.0,
        "dewpoint_c": 17.4,
        "dewpoint_f": 63.3,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 13.3,
        "gust_mph": 7.7,
        "gust_kph": 12.4,
        "short_rad": 778.1,
        "diff_rad": 184.11,
        "dni": 1067.98,
        "gti": 762.25
    }
}
``


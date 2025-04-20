import json
import requests

# Your GeoNames username (replace with your actual username)
GEONAMES_USERNAME = "your_username"

# File containing city data
INPUT_FILE = "citiesus.json"
OUTPUT_FILE = "cities_updated.json"

def get_population(city_name, lat, lon):
    """Fetch population data from GeoNames API."""
    url = f"http://api.geonames.org/findNearbyPlaceNameJSON?lat={lat}&lng={lon}&username={GEONAMES_USERNAME}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        if "geonames" in data and data["geonames"]:
            return data["geonames"][0].get("population", "Unknown")
    return "Unknown"

def update_population():
    """Load cities, fetch population data, and update JSON file."""
    with open(INPUT_FILE, "r", encoding="utf-8") as file:
        cities = json.load(file)
    
    for city in cities:
        city_name = city["name"]
        lat, lon = city["lat"], city["lon"]
        
        print(f"Fetching population for {city_name}...")
        city["population"] = get_population(city_name, lat, lon)
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        json.dump(cities, file, indent=4)
    
    print("Updated population data saved!")

# Run the script
update_population()

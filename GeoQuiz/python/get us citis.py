import json

def convert_file(input_file, output_file):
    cities = []
    with open(input_file, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue  # Skip empty lines

            # Split by tab; note that fields may be empty
            fields = line.split('\t')
            try:
                # Check country code: in this file, it's in column 9 (index 8)
                country = fields[8].strip()
                if country != "US":
                    continue  # Skip non-US cities

                # Extract other fields based on expected positions:
                # Column 2: Name (index 1)
                name = fields[1].strip()
                # Column 5: Latitude (index 4)
                lat = float(fields[4].strip())
                # Column 6: Longitude (index 5)
                lon = float(fields[5].strip())
                # Column 14: Population (index 13)
                pop_str = fields[13].strip()
                population = int(pop_str) if pop_str else 0

                city = {
                    "name": name,
                    "lat": lat,
                    "lon": lon,
                    "population": population
                }
                cities.append(city)
            except (IndexError, ValueError) as e:
                print(f"Error processing line: {line}")
                print(e)

    # Write the filtered cities as JSON
    with open(output_file, 'w', encoding='utf-8') as f_out:
        json.dump(cities, f_out, indent=2, ensure_ascii=False)

    print(f"Converted {len(cities)} US cities to {output_file}")

if __name__ == "__main__":
    input_filename = "C:/Users/sebas/OneDrive/Documents/GitHub/Sebastian-H-G.github.io/sebastian-h-g.github.io/Haupstädte, Flaggen Quiz/SVG Maps/cities1000.txt"    # Change to your input file path
    output_filename = "us_cities.json"  # Desired output file name
    convert_file(input_filename, output_filename)

import json

def convert_file(input_file, output_file):
    cities = []
    with open(input_file, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue  # skip empty lines

            # Split by tab; note that fields may be empty
            fields = line.split('\t')
            try:
                # Extract fields based on index positions (0-based)
                name = fields[1].strip()
                lat = float(fields[4].strip())
                lon = float(fields[5].strip())
                # Population may be missing or empty; try converting to int
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

    # Write the result as JSON	
    with open(output_file, 'w', encoding='utf-8') as f_out:
        json.dump(cities, f_out, indent=2, ensure_ascii=False)

    print(f"Converted {len(cities)} cities to {output_file}")

if __name__ == "__main__":
    input_filename = "C:/Users/sebas/OneDrive/Documents/GitHub/Sebastian-H-G.github.io/sebastian-h-g.github.io/Haupstädte, Flaggen Quiz/SVG Maps/cities1000.txt"   # change to your input file path
    output_filename = "cities.json" # change to your desired output file path
    convert_file(input_filename, output_filename)

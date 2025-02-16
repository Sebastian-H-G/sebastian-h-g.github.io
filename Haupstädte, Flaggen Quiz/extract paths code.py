import re

def extract_paths_from_text(input_filename, titles, output_filename):
    # Read the entire file as text.
    with open(input_filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find <path> elements.
    path_pattern = re.compile(r'<path\b.*?(?:/?>|>.*?</path>)', re.DOTALL | re.IGNORECASE)
    matches = path_pattern.findall(content)
    
    selected_paths = []
    no_title_count = 0
    found_titles = set()
    
    # Process each matched <path> element.
    for match in matches:
        title_match = re.search(r'title\s*=\s*"([^"]+)"', match, re.IGNORECASE)
        if title_match:
            title_value = title_match.group(1)
            # If the title is one of the ones we want, add it.
            if title_value in titles:
                selected_paths.append(match)
                found_titles.add(title_value)
        else:
            no_title_count += 1
    
    # Report if any <path> elements were encountered without a title attribute.
    if no_title_count > 0:
        print(f"Encountered {no_title_count} <path> element(s) without a title attribute.")
    
    # Identify and report titles that were not found.
    missing_titles = [t for t in titles if t not in found_titles]
    if missing_titles:
        print("The following title(s) were not found in any <path> element:")
        for t in missing_titles:
            print(f" - {t}")
    
    if not selected_paths:
        print("No paths found with the specified title(s).")
        return

    # Write the extracted paths into a new SVG file, wrapped in a minimal SVG container.
    svg_header = '<?xml version="1.0" encoding="UTF-8"?>\n' \
                 '<svg xmlns="http://www.w3.org/2000/svg">\n'
    svg_footer = '</svg>\n'
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(svg_header)
        for path in selected_paths:
            f.write(path + "\n")
        f.write(svg_footer)
    
    print(f"Extracted {len(selected_paths)} path(s) to {output_filename}")

if __name__ == "__main__":
    input_filename = input("Enter the input text file containing the SVG: ")
    titles_input = input("Enter comma-separated titles to extract: ")
    # Split the input and remove extra whitespace.
    titles = [t.strip() for t in titles_input.split(",") if t.strip()]
    output_filename = input("Enter the output file name: ")

    extract_paths_from_text(input_filename, titles, output_filename)

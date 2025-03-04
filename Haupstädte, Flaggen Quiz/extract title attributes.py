import re

def extract_titles(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()  # Read the entire file as a string

    # Use regex to find all title attributes
    titles = re.findall(r'title="(.*?)"', content)

    if titles:
        print(f"Total titles found: {len(titles)}\n")
        
        # Normal list
        print("Normal List:")
        print(", ".join(titles))

        # Quoted list
        print("\nQuoted List:")
        print(", ".join(f'"{title}"' for title in titles))
    else:
        print("No titles found.")

# Example usage
extract_titles(r"C:/Users/sebas/OneDrive/Documents/GitHub/Sebastian-H-G.github.io/sebastian-h-g.github.io/Haupstädte, Flaggen Quiz/SVG Maps/world capitals.html")

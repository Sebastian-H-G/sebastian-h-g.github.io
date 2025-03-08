import re

def add_hover_circle(content):
    # This pattern matches a <circle> tag that has a title attribute.
    # It captures the entire tag as group(1) and its attribute string as group(2).
    pattern = re.compile(r'(<circle\s+([^>]*title="([^"]*)"[^>]*)></circle>)')

    def repl(match):
        full_tag = match.group(1)  # the entire original <circle> tag
        attr_string = match.group(2)  # just the attributes part
        capital_name = match.group(3)  # the capital name from the title attribute
        
        # Parse attributes into a dictionary
        attributes = dict(re.findall(r'(\w+)\s*=\s*"([^"]*)"', attr_string))
        
        # Remove the title attribute
        if "title" in attributes:
            del attributes["title"]
        
        # Update attributes as required
        attributes["r"] = "8"
        attributes["class"] = "hover-ring"
        
        # Add the updated title attribute
        new_title = f"{capital_name.lower()}-hover-ring"
        attributes["title"] = new_title
        
        # Rebuild attribute string (order might differ from original)
        new_attr_str = " ".join(f'{k}="{v}"' for k, v in attributes.items())
        new_circle = f"<circle {new_attr_str}></circle>"
        
        # Insert the new circle tag right after the original one
        return full_tag + new_circle

    # Replace each matched tag with the original tag plus the new hover-circle tag.
    new_content = pattern.sub(repl, content)
    return new_content

if __name__ == '__main__':
    filepath = input("Enter the path to the HTML file: ")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_content = add_hover_circle(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print("File updated successfully.")

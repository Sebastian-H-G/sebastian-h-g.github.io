import re

def modify_svg_attribute(file_path, action, attribute, value=None):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            svg_content = file.read()

        pattern = fr'(<path[^>]*?)\s*{attribute}="[^"]*"'
        
        if action == "modify" or action == "add":
            if re.search(pattern, svg_content):
                # Replace existing attribute value
                modified_content = re.sub(pattern, fr'\1 {attribute}="{value}"', svg_content)
            else:
                # Add attribute at the beginning of the opening tag
                modified_content = re.sub(r'(<path)([^>]*?>)', fr'\1 {attribute}="{value}"\2', svg_content)
        elif action == "remove":
            # Remove attribute if it exists
            modified_content = re.sub(pattern, r'\1', svg_content)
        else:
            print("Invalid action. Please enter 'modify', 'add', or 'remove'.")
            return

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        
        print(f"Successfully {action}d '{attribute}' in {file_path}.")
    except FileNotFoundError:
        print("Error: File not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    file_path = input("Enter the path to the SVG file: ")
    action = input("Do you want to modify, add, or remove an attribute? ").strip().lower()
    attribute = input("Enter the attribute (e.g., fill, stroke): ")
    value = None
    
    if action in ["modify", "add"]:
        value = input("Enter the new value for the attribute: ")
    
    modify_svg_attribute(file_path, action, attribute, value)

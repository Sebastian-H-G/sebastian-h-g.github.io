import re

def add_line_breaks(file_path, num_breaks):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Count occurrences of </path>
        count = content.count('</path>')
        
        # Add specified number of newlines after each </path>
        newline_str = '</path>' + '\n' * num_breaks
        modified_content = re.sub(r'</path>', newline_str, content)
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        
        print(f"{count} occurrences modified with {num_breaks} line breaks each.")
    except FileNotFoundError:
        print("File not found. Please enter a valid file path.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    file_path = input("Enter the SVG file path: ")
    try:
        num_breaks = int(input("Enter the number of line breaks after each closing tag: "))
        add_line_breaks(file_path, num_breaks)
    except ValueError:
        print("Please enter a valid number.")

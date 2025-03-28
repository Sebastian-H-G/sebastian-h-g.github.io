def wrap_paths_in_g(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
    except Exception as e:
        print(f"Error reading file: {e}")
        return
    
    new_lines = []
    path_buffer = ""
    inside_path = False

    for line in lines:
        stripped = line.strip()
        # Accumulate lines for a single <path> tag if the tag is multiline
        if "<path" in stripped:
            inside_path = True
            path_buffer += stripped
        elif inside_path and "</path>" in stripped:
            path_buffer += stripped
            # Now, process the accumulated <path> tag
            id_start = path_buffer.find('id="')
            if id_start != -1:
                id_end = path_buffer.find('"', id_start + 4)
                if id_end != -1:
                    path_id = path_buffer[id_start + 4:id_end]
                    new_lines.append(f'<g id="{path_id}">')
                    new_lines.append(path_buffer)
                    new_lines.append('</g>')
                    print(f"Wrapped path with id: {path_id}")
                else:
                    print(f"Malformed id attribute in line: {path_buffer.strip()}")
                    new_lines.append(path_buffer)
            else:
                print(f"No id found in path: {path_buffer.strip()}")
                new_lines.append(path_buffer)
            inside_path = False
            path_buffer = ""
        else:
            if not inside_path:
                new_lines.append(line.rstrip())

    new_svg_content = "\n".join(new_lines) + "\n"
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_svg_content)
        print("SVG paths wrapped successfully.")
    except Exception as e:
        print(f"Error writing file: {e}")

if __name__ == "__main__":
    file_path = input("Enter the SVG file path: ")
    wrap_paths_in_g(file_path)

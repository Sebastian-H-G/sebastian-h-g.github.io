import tkinter as tk
import random

# Function to move the question marks
def move_question_marks():
    global x1, y1, x2, y2, x3, y3, dx, dy
    
    canvas.delete("all")  # Clear canvas
    
    # Update positions
    x1 += dx
    y1 += dy
    x2 += dx
    y2 += dy
    x3 += dx
    y3 += dy
    
    # Check boundaries and reverse direction if needed
    if x1 <= 0 or x1 >= screen_width - 50:
        dx *= -1
    if y1 <= 0 or y1 >= screen_height - 50:
        dy *= -1
    
    # Adjust x positions to stay aligned horizontally
    x2 = x1 - 100
    x3 = x1 - 200
    
    # Draw question marks
    canvas.create_text(x1, y1, text="?", fill="white", font=("Arial", 48, "bold"))
    canvas.create_text(x2, y2, text="?", fill="red", font=("Arial", 48, "bold"))
    canvas.create_text(x3, y3, text="?", fill="blue", font=("Arial", 48, "bold"))
    
    # Schedule next movement
    root.after(30, move_question_marks)

# Initialize tkinter
root = tk.Tk()
root.title("Question Mark Screensaver")

# Set screen dimensions
screen_width = 800
screen_height = 600

# Create canvas widget
canvas = tk.Canvas(root, width=screen_width, height=screen_height, bg="black")
canvas.pack()

# Initial positions and velocity of question marks
x1, y1 = screen_width - 50, 0
x2, y2 = x1 - 100, 0
x3, y3 = x1 - 200, 0
dx, dy = -3, 3  # Initial movement direction

# Start moving question marks
move_question_marks()

# Run the tkinter main loop
root.mainloop()

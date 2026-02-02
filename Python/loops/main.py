# for loop: Iterates over a sequence (e.g., list, tuple, string, or range) and executes a block of code for each item in the sequence.
# while loop: Keeps executing the code block as long as a specified condition remains True.

# Syntax:

# for item in sequence:
#   code to execute for
#   each item

# Example 1: Looping Through a List:

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("Example1:", fruit)
    
# Example 2: Using range() in a for loop:

for i in range(5):  # Generates numbers from 0 to 4
    print("Example2:", i)
    
# While Loop Example:

# Syntax:
# while condition:
#     code to execute while condition is True

# Example: Basic While Loop:

count = 0
while count < 5:
    print("Example3:", count)
    count += 1  # Increment count to avoid infinite loop
    
# Engage and Apply:

number = 1 # Initialize a Variable.
while number <= 20: # Set Up the While Loop.
    if number % 2 == 0: # Check if the Number is Even, if it is, Print the Number.
        print("Example4:", number)
    number += 1 # Increment the Number.
    
# Control Flow in Loops:
# break Statement: Stops the loop prematurely when a certain condition is met.

for i in range(10):
    if i == 5:
        break  # Exit the loop when i is 5
    print("Example5:", i)
    
# continue Statement:
# Skips the current iteration and moves to the next one.

for i in range(5):
    if i == 3:
        continue  # Skip the rest of the loop when i is 3
    print("Example6:", i)
    
# Final Challenge:

for i in range(31):
    if i % 3 == 0:
        continue
    if i > 25:
        break
    else:
        print("Final Challenge:", i)
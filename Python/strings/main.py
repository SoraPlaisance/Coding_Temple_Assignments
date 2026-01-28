my_string = " Coding temple is the best bootcamp ever!"

# Uppercase
print(my_string.upper()) # Output: " CODING TEMPLE IS THE BEST BOOTCAMP EVER!"

# Remove Whitespace
print(my_string.strip()) # Output: "Coding temple is the best bootcamp ever!"

# Replace a word with another word
print(my_string.replace("best", "greatest")) # Output: " Coding temple is the greatest bootcamp ever!"

# Split the string into a list
print(my_string.split()) # Output: ['Coding', 'temple', 'is', 'the', 'best', 'bootcamp', 'ever!']

import random

first_names = ["Christian", "Dylan", "Travis", "Katelyn"]
last_names = ["Sachs", "Katina", "Peck", "Mehner"]
random_first = random.choice(first_names)
random_last = random.choice(last_names)
print(f"Hello, my name is {random_first} {random_last}.")
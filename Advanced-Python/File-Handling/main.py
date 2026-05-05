# 1. Opening and Writing to Files

# Let’s start by exploring how to open and write to files in Python. You can write data into a file using the open() function and specifying the mode ('w' for write or 'a' for append).

# Open a file in "w" mode to write data

file = open('new_file.txt', 'w')
file.write('Writing to a file from Python!\n')
file.close() # Always close the file after writing

# Appending data to the file without overwriting
file = open('new_file.txt', 'a')
file.write('Adding more content with "a" mode\n')
file.close()

# Explanation: The 'w' mode overwrites the file if it already exists, while 'a' mode adds data to the file without removing existing content. Always ensure you close the file after writing to it using file.close().


# 2. Reading Files

# Now, let’s look at how to read data back from files. Python provides different methods for reading files, such as read(), readline(), and readlines().

# Reading the file with "r" mode

with open('new_file.txt', 'r') as file:
    content = file.read() # Read the entire file content
    print(content)
    
# Explanation: Using with open ensures the file is properly closed after reading, even if an error occurs in your program.


# Engage & Apply: Mid-Lesson Exercise
# Task: Create a simple Python program that:

    # Allows the user to add favorite foods to a list.
    
    # Stores the data in a file.
    
    # Lets the user view or remove items from the list.

def write_foods(foods):
    with open('foods.txt', 'w') as file:
        for food in foods:
            file.write(food + '\n')

def read_foods():
    foods_list = []
    try:
        with open('foods.txt', 'r') as file:
            for line in file:
                foods_list.append(line.strip())
    except FileNotFoundError:
        pass  # start with empty list if file doesn't exist
    return foods_list

def main():
    foods = read_foods()
    while True:
        action = input("1 - Add Food, 2 - View Foods, 3 - Remove Food, 4 - Quit\n")
        if action == '1':
            new_food = input("Enter the name of the food: ")
            foods.append(new_food)
            write_foods(foods)
        elif action == '2':
            print("Your favorite foods:")
            for food in foods:
                print(food)
        elif action == '3':
            idx = int(input("Which food to remove? "))
            foods.pop(idx - 1)
            write_foods(foods)
        elif action == '4':
            break

main()


# 3. Storing and Extracting Data from Lists and Dictionaries

# Now that you have experience writing and reading from files, let’s move on to more structured data like lists and dictionaries.

flowers = ["Wysteria", "Sunflowers", "Orchids", "Marigolds"]

with open('garden.txt', 'w') as file:
    for flower in flowers:
        file.write(flower + '\n')
        
flowers = []

with open('garden.txt', 'r') as file:
    for line in file:
        flowers.append(line.strip())
print(flowers)

# Explanation: The strip() method removes unwanted whitespace, and you can loop through each line to append the cleaned-up data to your list.

# Storing and Extracting Dictionaries:

clubs = {
    'Driver': 'Cobra',
    'Irons': 'Sirixion',
    'Hybrid': 'Callaway',
    'Putter': 'Ping'
}

with open('golf_bag.txt', 'w') as file:
    for club, brand in clubs.items():
        file.write(f"{club}: {brand}\n")
        
# Extracting dictionary data
golf_clubs = {}

with open('golf_bag.txt', 'r') as file:
    for line in file:
        club, brand = line.strip().split(': ')
        golf_clubs[club] = brand
print(golf_clubs)

# Explanation: When extracting dictionaries, split(': ') separates each line into key-value pairs to be stored in the dictionary.


# 4. Managing Data Interactively: TV Show Manager
# Let’s build a more advanced program for managing a list of TV shows. We’ll use regular expressions to store and retrieve structured data from the file.

# Writing, Reading, and Removing TV Shows:

import re

# Function to write TV shows to a file
def write_show(shows):
    with open('shows_list.txt', 'w') as file:
        for show in shows:
            file.write(f"{show['Title']}-:-{show['Platform']}-:-{show['Genre']}\n")
            
# Writing Shows
# • The write_show function iterates over a list of dictionaries (shows) and writes each show’s details (Title, Platform, Genre) into a file using the -:- delimiter.

# • The delimiter helps in separating different fields of a show’s information for structured storage and easier parsing during the read operation.

# Function to add show to our shows list in dictionary format, and write it to our file with the write_show function

def add_show(shows):
    title = input("What is the title of the show? ")
    platform = input("Where can we watch it? ")
    genre = input("What is the genre? ")
    shows.append({'Title': title, 'Platform': platform, 'Genre': genre})
    write_show(shows) # write to shows file
    
# Adding Shows:
# • The add_show function gathers input from the user for each field (Title, Platform, Genre).

# • It appends the new show’s details as a dictionary to the shows list and updates the file by calling the write_show function.

# • This ensures the file always reflects the latest state of the shows list.

# Function to read TV shows from a file
def read_shows():
    shows_list = []
    with open('shows_list.txt', 'r') as file:
        for line in file:
            data = re.search(r"([\w\s]+)-:-([\w\s]+)-:-([\w\s]+)", line)
            shows_list.append({'Title': data.group(1), 'Platform': data.group(2), 'Genre': data.group(3).strip()})
    return shows_list

# Reading Shows:

# • The read_shows function reads the file line by line, using a regular expression (re.search) to extract structured data (Title, Platform, Genre).

# • The extracted details are stored as dictionaries in a list (shows_list), making it easy to work with the data programmatically.

# Function to print the list of shows for the user in a formatted way
def view(shows):
    print("Shows List")
    print('--------------------')
    for idx, show in enumerate(shows):
        vowels = ['a', 'e', 'i', 'o', 'u']
        a_or_an = 'an' if show['Genre'][0].lower() in vowels else 'a'
        print(f"{idx + 1}.) {show['Title']} is {a_or_an} {show['Genre']} show on {show['Platform']}")
        
# Viewing Shows:
# • The view function provides a user-friendly way to display the shows list.

# • It uses conditional logic to determine whether to use “a” or “an” before the genre based on vowel sounds, adding polish to the output.

# Function to show our current list of shows and allow the user to choose which to remove
def remove_show(shows):
    view(shows)
    option = int(input("\n\nChoose a number for the show you'd like to remove: "))
    show = shows.pop(option - 1) # index - 1
    print(f"\n{show['Title']} was sucessfully removed!")
    write_show(shows)
    
# Removing Shows:

# • The remove_show function allows the user to select a show to remove by displaying the current list and prompting for an index.

# • After removing the selected show, the updated list is written back to the file using the write_show function.

# • This ensures the removed show is no longer persisted in the file.

# 5. Building the Interactive Program

# The final step is to build an interactive menu for adding, viewing, and removing shows from the list.

# Main function to run the TV show manager
def main():
    while True:
        shows_list = read_shows()  # Read the current list of shows from the file
        action = input('''
Options
-----------------------
1 - Add a TV Show
2 - Remove a TV Show
3 - View List of TV Shows
4 - Quit
''')
        if action == '1':
            add_show(shows_list)  # Add a new show
        elif action == '2':
            remove_show(shows_list)  # Remove a show
        elif action == '3':
            view(shows_list)  # View the list of shows
        elif action == '4':
            print("Thanks for using this app!")
            break

main()
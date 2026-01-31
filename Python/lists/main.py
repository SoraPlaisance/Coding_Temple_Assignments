# Syntax:

# my_list = [1, 2, 3, 4, 5]
# mixed_list = [1, "apple", 3.14, True]

# Add an item: .append() adds an item to the end.
# my_list.append("orange")

# Insert at a specific index: .insert(index, item) adds an item at the specified position.
# my_list.insert(1, "blueberry")

# Remove an item: .remove(item) removes the first matching item.
# my_list.remove("apple")

# Delete by index: Use del keyword or .pop() to remove an item at a specific index.
# del my_list[0]  # Deletes the first item
# my_list.pop(1)  # Removes and returns the item at index 1

# Slicing allows us to access a subset of items in a list.
# my_list = [1, 2, 3, 4, 5, 6]
# subset = my_list[1:4]  # [2, 3, 4]

# Omit the start or end index to slice from the beginning or to the end.
# print(my_list[:3])  # [1, 2, 3]
# print(my_list[3:])  # [4, 5, 6]

fruits = ["apple", "banana", "cherry", "date"]

print(fruits[0])
print(fruits[-1])

fruits.append("elderberry")
fruits.insert(1, "blueberry")
print(fruits)

fruits.remove("banana")
del fruits[0]
print(fruits)

citrus_fruits = fruits[1:3]
print(citrus_fruits)

# Built-in Functions:
# len(): Returns the number of items in a list.
# len([1,2,3,4]) # --> 4

# min() / max(): Return the smallest/largest item.
# min([5, 3, 8])  # --> 3
# max([5, 3, 8])  # --> 8

# Common List Methods:
    # .sort(): Sorts the list in place.
    # numbers = [4, 1, 7, 3]
    # numbers.sort()  # --> [1, 3, 4, 7]

    # .reverse(): Reverses the items in the list.
    # numbers.reverse()  # --> [7, 4, 3, 1]

    # .extend(): Adds all items from one list to another.
    # list1 = [1, 2, 3]
    # list2 = [4, 5]
    # list1.extend(list2)  # --> [1, 2, 3, 4, 5]
    
# A list can contain other lists as its elements, forming a matrix-like structure.

# matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Access elements from nested lists using multiple indices:
# print(matrix[0][1])  # --> 2

# Final Challenge:
# (I used games instead of books because I know more of those)

my_games = []

first_game = input("Enter the name of a game you would like to add: ")
second_game = input("Enter the name of a game you would like to add: ")
third_game = input("Enter the name of a game you would like to add: ")

my_games.append(first_game)
my_games.append(second_game)
my_games.append(third_game)

my_games.sort()

print(my_games)
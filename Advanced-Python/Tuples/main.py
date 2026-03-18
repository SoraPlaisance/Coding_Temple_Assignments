# In Python, tuples are a type of data structure that allow you to store multiple items in a single variable, similar to lists. However, there's a key difference that makes tuples unique: tuples are immutable, meaning once they are created, their values cannot be changed.

# Let’s walk through what tuples are, how to use them, and why they are useful.


# A tuple is an ordered collection of elements (or items) that are enclosed in parentheses () and separated by commas. Tuples can store elements of different data types: integers, strings, floats, or even other tuples!

my_tuple = (1, 2, 3)
print(my_tuple)  # Output: (1, 2, 3)

    # Ordered: The items in a tuple are indexed starting from 0.
    
    # Immutable: You cannot change, add, or remove elements once the tuple is created.
    
    # Heterogeneous: You can mix different data types in the same tuple.
    
# Video example:

enchanted_library = ("Magic Tome", ["Ancient Scrolls", ("Spell", "Curse")], "Wizard's Guide")

print(enchanted_library[1][1][1]) 
# Output: "Curse"

# There are several ways to create tuples, and it’s essential to understand their variations.



# Using parentheses (): The most common way to create a tuple is by placing your values inside parentheses and separating them with commas.
tuple1 = (10, "Python", 3.14)



# Without parentheses (tuple packing): Python allows you to create tuples without explicitly using parentheses. This is known as tuple packing:
tuple2 = 10, "Python", 3.14

    # In this case, the values 10, "Python", and 3.14 are packed into a tuple automatically.



# Single-element tuples (important!): To create a tuple with just one element, add a comma after the element. Without the comma, Python will treat the value as a regular variable, not a tuple:

single_element_tuple = (5,)
print(type(single_element_tuple))  # Output: <class 'tuple'>



# Empty tuples: You can create an empty tuple using empty parentheses:
empty_tuple = ()



# Using the tuple() constructor: You can convert other iterable data types (like lists or strings) into tuples using the tuple() constructor:
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # Output: (1, 2, 3)

# You can access tuple elements by using their index, just like in a list. Indexing starts from 0:

my_tuple = ("apple", "banana", "cherry")
print(my_tuple[0])  # Output: "apple"
print(my_tuple[1])  # Output: "banana"

# Video example:

mythical_collection = ("Greek Myths", [("Zeus", "Hera"), ["Mount Olympus", ("Lighting", "Thunder")]], "Norse Myths")

print(mythical_collection[1][1][1][1]) # Output: "Thunder"

# You can retrieve multiple elements by using slicing, the same way as with a list:

my_tuple = (1, 2, 3, 4, 5)
print(my_tuple[1:4])  # Output: (2, 3, 4)

# You can loop over tuples the same way you would iterate over items in a list

my_tuple = (1, 2, 3, 4, 5)

for num in my_tuple: 
	print(num) 
	
	#Output: Python returns all the elements in the tuple, just as it would for a list 
	# 1
	# 2
	# 3
	# 4
	# 5
 
my_tuple = (10, 20, 30)
my_tuple[1] = 40  # Error! Tuples cannot be changed

# However, you can reassign the entire tuple:

my_tuple = (10, 20, 30)
my_tuple = (40, 50, 60)  # This works, since we're creating a new tuple

# Packing is when you take multiple values and group them together into a tuple. You can do this by separating the values with commas, either with or without parentheses.

person_info = "Alice", 30, "Developer"
print(person_info)  # Output: ("Alice", 30, "Developer")

# In this example, the values "Alice", 30, and "Developer" are packed into a tuple called person_info.

# Unpacking is the reverse of packing. It’s when you take a tuple and assign its values to individual variables. The number of variables must match the number of elements in the tuple.

# Unpacking a tuple into individual variables:

# Unpacking tuple into individual variables
name, age, profession = person_info

print(name)       # Output: Alice
print(age)        # Output: 30
print(profession) # Output: Developer

# Sometimes, you may want to unpack only a portion of the tuple and store the rest in another variable. You can achieve this using the * operator, which allows for extended unpacking.

numbers = (1, 2, 3, 4, 5)
first, *rest = numbers
print(first)  # Output: 1
print(rest)   # Output: [2, 3, 4, 5]
# Here, the first value is unpacked into first, and the remaining values are grouped together in the rest list.



# You can also capture values from the end of the tuple:

*start, last = numbers
print(start)  # Output: [1, 2, 3, 4]
print(last)   # Output: 5

# Ignoring Values with Underscore (_)
# When unpacking, if you're not interested in one or more values, you can use an underscore _ as a placeholder to ignore those values.

person_info = ("Eve", 35, "Artist", "New York")
name, _, profession, _ = person_info  # Ignore age and location

print(name)       # Output: Eve
print(profession) # Output: Artist

# Tuple Packing and Unpacking with Functions

# Returning Multiple Values
# A function can return multiple values, packed into a tuple:

def get_user_info():
    return "Bob", 29, "Engineer"

# Unpacking the returned tuple
name, age, profession = get_user_info()
print(name)  # Output: Bob

# Passing Multiple Values with Unpacking
# You can pass multiple values to a function by unpacking a tuple into arguments:

def display_info(name, age, profession):
    print(f"{name} is {age} years old and works as a {profession}.")

info_tuple = ("Charlie", 28, "Designer")

# Unpacking the tuple when calling the function
display_info(*info_tuple)  
# Output: Charlie is 28 years old and works as a Designer.


# Although tuples are immutable, there are a few useful methods you can use with them:

# .count(): Returns the number of times a specified value appears in the tuple.
my_tuple = (1, 2, 2, 3, 2)
print(my_tuple.count(2))  # Output: 3

# .index(): Returns the index of the first occurrence of a specified value.
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple.index(3))  # Output: 2
# Dictionaries in Python are defined using curly braces {} and consist of key-value pairs. Each key in a dictionary must be unique and immutable (e.g., strings, numbers, or tuples), while the values can be of any data type and can be duplicated. Starting from Python 3.7, dictionaries maintain insertion order, which became a part of the language specification in Python 3.8. They are also mutable, meaning you can modify them after they are created.

# Example of a Python dictionary
my_dict = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

# If the key🔑 'name' is present in the dictionary, the value associated with it will be printed 🖨️.

# Accessing values by key
my_dict = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

print(my_dict['name'])  # Output: Alice

# If you try to access a key that does not exist, Python will raise a KeyError ❌. To avoid this, you can use the .get() method, which will return None (or a default value you specify) if the key doesn’t exist.



# The .get() method is particularly useful for preventing errors when accessing keys🔑 that may or may not be in the dictionary.

my_dict = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

print(my_dict.get('age'))  # Output: 25
print(my_dict.get('address', 'Not Available'))  # Output: Not Available



# Dictionaries are dynamic 🔄, meaning you can add ➕, modify 🖊️, or remove ❌ elements at any time

# Adding Elements: To add a new key🔑-value pair, simply assign a value to a new key. Let's add a new key to the my_dict dictionary from our previous example:

my_dict['profession'] = 'Engineer'
# In this example, the key🔑 'profession' with the value 'Engineer' is added to the dictionary.

# Modifying Elements: To modify an existing value, assign a new value to an existing key🔑. Continuing with our previous example:

my_dict['age'] = 26
# Here, the value associated with the key🔑 'age' is updated from 25 to 26.

# Removing Elements: You can use the del statement or the .pop() method to remove ❌ elements from a dictionary.

del my_dict['city']

# Alternatively, .pop() allows you to remove an item and also return its value, which can be useful if you need to use it elsewhere in your code.

removed_value = my_dict.pop('profession')
print(removed_value) # Output: Engineer

# .values(): Returns a view object of all the values in the dictionary.

print(list(my_dict.values()))  # Output: ['Alice', 26]

# .items(): Returns a view object that displays a list of dictionary’s key🔑-value tuple pairs.

print(list(my_dict.items()))  # Output: [('name', 'Alice'), ('age', 26)]

# These methods are helpful for iterating 🔄 through the dictionary, as shown below:

for key, value in my_dict.items():
    print(f"{key}: {value}")
    
# This will output each key🔑-value pair in the dictionary in a readable format.



# 📝 Exercise: Create a dictionary that represents a book 📖. Include keys like title, author, year, and genre. Write code to add a new key for publisher, and modify the value for year.

# In this exercise, we use dictionaries to model more complex data. By adding new keys🔑 and modifying existing ones, students get a hands-on understanding of dictionary dynamics.

book = {
    'title': 'The Hunger Games',
    'author': 'Suzanne Collins',
    'year': 2007,
    'genre': 'Dystopian'
}

# Add a new key for publisher
book['publisher'] = 'Scholastic'

# Modify the value for year
book['year'] = 2008



# Looping Through Dictionaries
# Looping through dictionaries allows you to access and manipulate the data efficiently. Here are different approaches for looping through dictionaries:



# Looping through Keys Only: You can loop through only the keys in a dictionary using a for loop. This approach is useful when you only need to access the keys.

for key in my_dict:
    print(key)
# Output: name, age


# Looping through Values Only: Use the .values() method to loop through the values. This is helpful when you are interested only in the values.

for value in my_dict.values():
    print(value)
# Output: Alice, 26


# Looping through Key-Value Pairs: Use the .items() method to loop through both keys and values. This approach is the most common when you need to access both keys and their corresponding values.

for key, value in my_dict.items():
    print(f"{key}: {value}")
# Output: name: Alice, age: 26



# Nested Dictionaries
# Just as you can nest lists within lists or dictionaries within lists, you can also nest dictionaries inside other dictionaries. This concept is incredibly useful when you're dealing with complex data that needs to be structured in multiple layers.

# For example, imagine you are storing information about users in a system, where each user has multiple properties such as their name, age, and a nested dictionary for their address.

# A Dictionary within a Dictionary
# A nested dictionary is simply a dictionary where one or more values are also dictionaries. Here's a simple example:

# Creating a dictionary of users, where each user has their own dictionary of details
users = {
    'user1': {
        'name': 'Alice',
        'age': 25,
        'address': {
            'street': '123 Main St',
            'city': 'New York',
            'zipcode': '10001'
        }
    },
    'user2': {
        'name': 'Bob',
        'age': 30,
        'address': {
            'street': '456 Elm St',
            'city': 'San Francisco',
            'zipcode': '94107'
        }
    }
}

# In this example, each user has a dictionary containing their 'name', 'age',
# and an 'address' dictionary with more details like street, city, and zipcode.

# Accessing Nested Dictionary Data
# Accessing data within a nested dictionary follows the same principle as accessing values in a regular dictionary, but with an extra layer of keys:

# Accessing the city of user1 by first accessing 'user1', then 'address', and then 'city'
city_user1 = users['user1']['address']['city']
print(city_user1)  # Output: New York

# Modifying Nested Dictionaries
# You can modify the values in a nested dictionary just like you would in a flat dictionary:

# Updating the zipcode of user2 from '94107' to '94109'
users['user2']['address']['zipcode'] = '94109'
print(users['user2']['address']['zipcode'])  # Output: 94109

# Adding Nested Elements
# You can also add new keys or dictionaries to a nested dictionary:

# Adding a new key 'phone' to user1 with the value '555-1234'
users['user1']['phone'] = '555-1234'
print(users['user1']['phone'])  # Output: 555-1234

# Looping Through Nested Dictionaries
# When working with nested dictionaries, you can loop through them just as you would with a regular dictionary. Here’s how to loop through a nested dictionary:

# Looping through the outer dictionary 'users'
for user, info in users.items():
    print(f"User ID: {user}")
    
    # Looping through the inner dictionary for each user
    for key, value in info.items():
        print(f"  {key}: {value}")
        
# Expected Output:
# User ID: user1
#   name: Alice
#   age: 25
#   address: {'street': '123 Main St', 'city': 'New York', 'zipcode': '10001'}
#   phone: 555-1234
# User ID: user2
#   name: Bob
#   age: 30
#   address: {'street': '456 Elm St', 'city': 'San Francisco', 'zipcode': '94109'}

# A List of Dictionaries
# In some cases, you may have multiple dictionaries that you need to manage together as a group. One of the most common ways to do this is by storing dictionaries in a list. Each dictionary in the list represents an individual record or item.

# For example, consider a scenario where you're managing a list of students, each with their own dictionary of details.

students = [
    {
        'name': 'Alice',
        'age': 25,
        'major': 'Physics'
    },
    {
        'name': 'Bob',
        'age': 22,
        'major': 'Computer Science'
    },
    {
        'name': 'Charlie',
        'age': 23,
        'major': 'Mathematics'
    }
]

# Accessing Data in a List of Dictionaries
# You can access individual dictionaries by indexing into the list, and then access specific data within those dictionaries using keys.

# Accessing the major of the first student in the list:

# first_student_major = students[0]['major']
# print(first_student_major)  # Output: Physics
# Looping Through a List of Dictionaries
# Often, you’ll want to loop through the list to process or display the data for each dictionary. Here’s how you can do that:

# Looping through the list of students
for student in students:
    print(f"Name: {student['name']}, Age: {student['age']}, Major: {student['major']}")

# Expected Output:
# Name: Alice, Age: 25, Major: Physics
# Name: Bob, Age: 22, Major: Computer Science
# Name: Charlie, Age: 23, Major: Mathematics

# A List within a Dictionary
# In some cases, you'll want to store multiple values under a single key in a dictionary. One way to do this is by using a list as the value for that key. For example, you might want to store multiple phone numbers or email addresses for a person in a contact list.

# Here's an example where each person has a list of their favorite books stored as a value in a dictionary:

favorite_books = {
    'Alice': ['1984', 'To Kill a Mockingbird', 'Pride and Prejudice'],
    'Bob': ['The Great Gatsby', 'Catch-22', 'Moby Dick'],
    'Charlie': ['The Hobbit', 'Harry Potter', 'War and Peace']
}

# Accessing Lists Inside a Dictionary
# To access the list, you retrieve it by the key and can then treat it like any other list:

# Accessing Alice's favorite books
alice_books = favorite_books['Alice']
print(alice_books)  # Output: ['1984', 'To Kill a Mockingbird', 'Pride and Prejudice']

# Accessing Bob's second favorite book
second_favorite_bob = favorite_books['Bob'][1]
print(second_favorite_bob)  # Output: Catch-22

# Looping Through Lists Inside a Dictionary
# You can also loop through the dictionary to access each person and their favorite books:

# Looping through each person and their list of favorite books
for person, books in favorite_books.items():
    print(f"{person}'s favorite books:")
    for book in books:
        print(f" - {book}")

# Expected Output:
# Alice's favorite books:
#  - 1984
#  - To Kill a Mockingbird
#  - Pride and Prejudice
# Bob's favorite books:
#  - The Great Gatsby
#  - Catch-22
#  - Moby Dick
# Charlie's favorite books:
#  - The Hobbit
#  - Harry Potter
#  - War and Peace

# 🏆 Challenge: Write a program that takes a dictionary of students 👨‍🎓 and their grades, then prints 🖨️ each student's name and whether they passed ✅ or failed ❌ (consider passing as a grade ≥ 50).

students = {
    'Alice': 85,
    'Bob': 42,
    'Charlie': 68,
    'David': 49
}

for student, grade in students.items():
    if grade >= 50:
        print(f"{student} passed.")
    else:
        print(f"{student} failed.")
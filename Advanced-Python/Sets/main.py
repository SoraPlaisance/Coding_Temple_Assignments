# Sets are a special collection data type in Python, and they're useful for storing unique items. Here are some important characteristics:

# Unordered: You won’t know the order of elements.
# Mutable: You can change the set’s contents by adding or removing items.
# Unique: Sets automatically remove duplicate items.
# No Indexing: Unlike lists or tuples, sets don't have a defined order, so you can't access items using an index.

# To create an empty set, we use the set() function because {} is used for dictionaries.

empty_set = set()  # This creates an empty set
print(type(empty_set))  # Output: <class 'set'>

# Example 2: Creating a Set with Values
# We can create a set by listing its values inside curly braces. Remember, sets automatically remove any duplicate values:

new_set = {'one', 'two', 'three'}
print(new_set)  # Output: {'one', 'two', 'three'}

# Working with Lists, Tuples, and Dictionaries
# Sets are also great for removing duplicates from other data structures. For example, you can convert a list into a set to eliminate duplicate values:

alist = ['item', 'item', 'stuff', 'thing', 'oddity']
set_list = set(alist)  # Converting list to a set
print(set_list)  # Output: {'stuff', 'item', 'thing', 'oddity'}

hobbies = ['drawing', 'gaming', 'singing', 'gaming', 'writing', 'singing']
hobbies_set = set(hobbies)
print("Original List:", hobbies)
print("Set with Duplicates Removed:", hobbies_set)


# Now that we know how to create sets, let's see how we can loop over them. Since sets are unordered, we can’t access items using an index. However, we can still iterate through all items using a for loop.



# Example: Looping Over a Set
# In the following example, we loop through a set of fruit names. Note that the order may seem random since sets don’t maintain the order of items.

aset = {'apple', 'orange', 'banana'}
for fruit in aset:
    print(fruit)

    
favorite_games = {'omori', 'undertale', 'danganronpa', 'pokemon', 'splatoon'}
for game in favorite_games:
    print(game)

print('omori' in favorite_games) # Output: True
print('red dead' in favorite_games) # Output: False
favorite_games.add('doki doki')
print(favorite_games)


# When working with two sets, Python provides several advanced methods to compare and analyze the relationship between them.



# Subset and Superset Checks
# issubset(): Checks if all elements of one set are in another.
# issuperset(): Checks if one set contains all elements of another.

set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

print(set1.issubset(set2))  # Output: True
print(set2.issuperset(set1))  # Output: True


set1 = {'Kel', 'Hero', 'Aubrey', 'Basil'}
set2 = {'Sunny', 'Basil', 'Mari'}
# Union: Combines all unique items from two sets
grand_gathering = set1.union(set2)
print(grand_gathering)
# Intersection: Returns only the items both sets have in common
mutual_friends = set1.intersection(set2)
print(mutual_friends)
# Difference: Returns the items found in one set but not the other
exclusive_guests = set1.difference(set2)
print(exclusive_guests)
# Symmetric Difference: Returns the items that are unique to each set (not shared by both)
unique_attendees = set1.symmetric_difference(set2)
print(unique_attendees)

# You have two email lists, but some people may be in both. Write a function to:

# Remove duplicates.
# Show which emails exist in both lists.
# Show emails that are unique to each list.

def clean_email_lists(list1, list2):
    set1 = set(list1)
    set2 = set(list2)
    
    # Remove duplicates and merge
    all_unique = set1.union(set2)
    print("All unique emails:", all_unique)
    
    # Common emails
    common_emails = set1.intersection(set2)
    print("Emails in both lists:", common_emails)
    
    # Emails unique to each list
    unique_emails = set1.symmetric_difference(set2)
    print("Emails unique to each list:", unique_emails)

email_list1 = ['a@example.com', 'b@example.com', 'a@example.com']
email_list2 = ['b@example.com', 'c@example.com', 'd@example.com']

clean_email_lists(email_list1, email_list2)   
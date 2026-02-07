# Example syntax:
from unicodedata import name


def greet():
    print("Hello, World!")
    
greet()

# Parameters: Variables defined in the function declaration.
# Arguments: Values passed into the function when it is called.

def greet(name):
    print(f"Hello, {name}!")
    
greet("Monika")

def introduce_yourself(name, hobby):
    print(f"Hello, {name}! Correct me if I'm wrong, but your favorite hobby is {hobby}.")
introduce_yourself("Monika", "piano")

# Functions can return values using the return keyword. This is useful when you want to get an output from a function and use it later.

def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8

# Local variables: Variables defined inside a function, only accessible within that function.
# Global variables: Variables defined outside any function and accessible throughout the code.

x = 10 # Global variable

def print_number():
    x = 5 # Local variable
    print(x) # Output: 5
    
print_number()
print(x) # Output: 10

# Default parameters: Functions can have default values for parameters, which are used if no argument is provided.

def greet(name="Student"):
    print(f"Hello, {name}!")
greet()  # Output: Hello, Student!
greet("Monika")  # Output: Hello, Monika!

# Variable-Length Arguments: Use *args and **kwargs to pass a variable number of arguments to a function.

def add_numbers(*args):
    return sum(args)
print(add_numbers(1, 2, 3))  # Output: 6
print(add_numbers(5, 10))   # Output: 15

# Final Challenge:

list_of_numbers = [3, 99, 12, 1, 7]

def square_nums(nums_list):
    result_list = []
    for num in nums_list:
        squared_num = num ** 2
        result_list.append(squared_num)
    return result_list

print(square_nums(list_of_numbers))
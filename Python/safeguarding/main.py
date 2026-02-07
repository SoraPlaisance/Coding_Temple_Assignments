# What are Errors and Exceptions?

# Definition:
#   Syntax errors occur when the Python interpreter encounters a statement that breaks the rules of the language syntax.
#   Exceptions are errors detected during execution.

# Common Exception Types:
#   ZeroDivisionError: Trying to divide by zero.
#   TypeError: An operation or function is applied to an object of inappropriate type.
#   ValueError: A function receives an argument of the right type but inappropriate value.

# Syntax Error

# if True
#     print("Hello") # Missing colon at the end of the if statement

# Runtime Exception

# x = 1 / 0 # This will raise a ZeroDivisionError

# The try block lets you test a block of code for errors, while the except block lets you handle the error.

try:
    x = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
    
# Engage and Apply:
# Use a try block to handle potential errors
# Inside the try block 
    # Prompt the user to input two numbers
    # Convert the inputs to integers or floats
    # perform the division
# Use except blocs to catch specific errors:
    # ValueError: if the input if not a calid number
    # ZeroDivisionError: if the second number is zero

try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    result = num1 / num2
    print(f"The result is {result}")
except ValueError:
    print("Error: Please enter valid numbers.")
except ZeroDivisionError:
    print("Error: You cannot divide by zero.")
    
# Catching Multiple Exceptions in One Block:

try:
    x = int(input("Enter a number: "))
    result = 10 / x
except (ValueError, ZeroDivisionError) as e:
    print(f"An error occurred: {e}")
    
# Catching Any Exception in One Block:

try:
    x = int(input("Enter a number: "))
    result = 10 / x
except:
    print(f"An error occurred!")
    
# else and finally Clauses
#   The else block is executed if no exceptions occur in the try block.
#   The finally block is executed no matter what, regardless of whether an exception occurred.

# Example with else and finally:
try:
    x = int(input("Enter a number: "))
    result = 10 / x
except (ValueError, ZeroDivisionError) as e:
    print(f"An error occurred: {e}")
else:
    print(f"The result is {result}")
finally:
    print("Execution complete!")
    
# Final Challenge:

account_balance = 1500

try:
    withdraw_amount = int(input("How much would you like to withdrawal?"))
    if (withdraw_amount > account_balance):
        print("Insufficient funds.")
    else:
        account_balance -= withdraw_amount
        print("Withdrawal successful! Your new balance is ${account_balance}.")
except ValueError:
    print("Must input a valid number.")
finally:
    print(f"Your remaining balance is ${account_balance}.")
        
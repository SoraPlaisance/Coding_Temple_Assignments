# Syntax
# if condition:
#     # code to execute if condition is True
# elif another_condition:
#     # code to execute if another_condition is True
# else:
#     # code to execute if all conditions are False

is_sunny = False
is_happy = True

if is_sunny and is_happy:
    print("Go for a hike!")
else: 
    print("Relax indoors.")
    
secret_number = 7
guess = int(input("Guess a number between 1 and 10: "))

if guess < 1 or guess > 10:
    print("Your guess is out of range!")
elif guess < secret_number:
    print("Too low!")
elif guess > secret_number:
    print("Too high!")
else:
    print("Congratulations! You guessed the secret number!")

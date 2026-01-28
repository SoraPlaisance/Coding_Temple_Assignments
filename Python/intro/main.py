name = "Monika"
age = 16
color = "green"

print("Name: ", {name}, " Age: ", {age}, " Favorite Color: ", {color})

score = int(input("Enter your score: "))
if score >= 90:
    print("Excellent")
elif score >= 70 and score < 90:
    print("Good")
else:
    print("Needs Improvement")
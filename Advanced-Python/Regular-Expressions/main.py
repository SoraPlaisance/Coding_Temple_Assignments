# Use Cases of Regex in Python
# Validation: Checking if a string fits a particular format, such as validating emails or phone numbers.

# Data Extraction: Extracting useful data such as hashtags, email addresses, or phone numbers from raw text.

# Text Replacement: Replacing text, such as anonymizing user data.

# String Splitting: Breaking up text based on specific delimiters.

# Searching for Patterns: Finding occurrences of a particular pattern within a text.
# Literal Characters, Metacharacters, and Special Sequences

# Regex utilizes combinations of different characters and letters to define patterns. In order to utilize and understand Regex effectively, we'll need to understand some terminology first.

# Literal Characters: These are characters that match exactly what they represent. For instance, the letter a will match the character 'a' in a string.

# Metacharacters: These are characters with special meanings in regex patterns. Some examples include:
# .: Matches any character except a newline.
# ^: Matches the start of a string.
# $: Matches the end of a string.
# []: Matches any one of the characters inside the brackets.
# Special Sequences: These are combinations of a backslash \ followed by a character that has special meaning. For example:
# \d: Matches any digit (equivalent to [0-9]).
# \w: Matches any word character (equivalent to [a-zA-Z0-9_]).
# \s: Matches any whitespace character (spaces, tabs, line breaks).


# Python provides the re module to work with regular expressions. To utilize the Regex module, we'll need to import it first.
import re

# Understanding Regex Method (function) Parameters
# When working with regex in Python, the re module provides several methods that allow you to search, match, split, or substitute text based on patterns. In almost all these methods, two essential parameters are required:

# Pattern: This is the regular expression that defines the text pattern you want to search for or manipulate. The pattern should typically be constructed using a raw string (prefixing the string with r), i.e., r"pattern". Using a raw string ensures that special characters like backslashes (\) are treated as literal characters in the pattern and not as escape sequences by Python, and that metacharacters and special sequences are recognized.

# Text: This is the string where you want the regex engine to apply the pattern. The text is evaluated to find or manipulate occurrences of the pattern.

# 1. Finding All Matches with re.findall()
# The re.findall() function is used to find all non-overlapping matches of a pattern within a string. It returns a list of all matches.

# re.findall(pattern, text)
# Pattern: The regular expression pattern you're searching for. It can contain literal characters, metacharacters, and special sequences.
# Example: r"and" to find all of the word "and", i.e. all the occurrences of the literal characters "a", "n", and "d" next to each other.

# Text: The string where the search for matches will happen.
# Example: "Hi my name is Travis, and I like to go and do things and stuff".
# Example 1: Counting 'and' in a Sentence

import re
text = "Hi my name is Travis, and I like to go and do things and stuff"
ands = re.findall(r"and", text)  #re.findall() returns a list of all occurrances of the given regex pattern within the text.
print(ands)  # Output: ['and', 'and', 'and'] 
print(len(ands))  # Output: 3 	Here we use the len() function to get the number of items in the list that was returned to us

# Example 2: Extracting Hashtags

post = "I LOVE # learning #Python_is_lyfe and #Regex, this is so fun! #Code"
tags = re.findall(r"#\w+", post)
print(tags)  # Output: ['#Python_is_lyfe', '#Regex', '#Code']

# Engage & Apply (Mid-Lesson Exercise)
# Task: You're given a list of random tweets. Your job is to extract all hashtags using a regex pattern.

tweets = [
    "Loving the #sunset! So peaceful #nature #blessed",
    "Had a great day! #happy #friends #goodvibes",
    "Can't wait for the #weekend! #fun #relax"
]

# Write your code to extract hashtags below

tags = []

for tweet in tweets:
    tags.extend(re.findall(r"#\w+", tweet))

print(tags)


# 2. Searching for Patterns with re.search()
# The re.search() function searches through a string for the first occurrence of a pattern and returns a match object if a match is found. It only finds the first match, making it ideal for validation purposes, like checking if an email address is valid. If no match is found, it returns None.

# re.search(pattern, text)
# Example: Validating an Email Input

# In this example, we use re.search() to check if the input string matches a valid email format.

email = "kareem33-34-28@gmail.com"
found = re.search(r"[\w.-]+@[\w-]+\.[a-z]{2,3}", email)
if found:
    print(f"{found.group()} is a valid email! Please click continue!")  
# Output: kareem33-34-28@gmail.com is a valid email! Please click continue!

# Pattern: r"[\w.-]+@[\w-]+\.[a-z]{2,3}" ensures the format of the email, with the username containing word characters (\w), periods (.), or hyphens (-), followed by an @, domain name, and a valid domain extension of 2 to 3 characters.
# Text: The string "kareem33-34-28@gmail.com" is checked, and the match is found, indicating that the email is valid.


# Example: Finding All Email Addresses Using re.findall()

# In this example, we use re.findall() to extract all email addresses from a block of text.

text = "You can contact me at t.p@gmail.com or travis-p2@codingtemple.com, traviscpeck@email.com"
emails = re.findall(r"[\w.-]+@[\w-]+\.[a-z]{2,3}", text)
# print(emails)  # Output: ['t.p@gmail.com', 'travis-p2@codingtemple.com', 'traviscpeck@email.com']
# Pattern: The same pattern (r"[\w.-]+@[\w-]+\.[a-z]{2,3}") is used to match email addresses.

# Text: The string contains multiple email addresses, and re.findall() extracts all matches into a list: ['t.p@gmail.com', 'travis-p2@codingtemple.com', 'traviscpeck@email.com'].

# re.search() finds the first match and returns a match object, which is useful for validation
# re.findall() finds all matches and returns a list, ideal for extracting multiple occurrences of a pattern.

# 3. Matching Patterns at the Start of a String with re.match()
# The re.match() function checks whether the beginning of a string matches a specified pattern. This method is different from re.search() because re.match() only checks the start of the string. If the pattern is found at the beginning, a match object is returned; otherwise, it returns None. This makes re.match() ideal for tasks like validating that a string starts with a certain prefix (e.g., checking if a URL is secure).

# Example: Checking for HTTPS

# In this example, we use re.match() to verify if a URL begins with "https", indicating that it is secure.

url = "https://something.com"
secure = re.match(r"https", url)
if secure:
    print("This link goes to a secure website!")  # Output: This link goes to a secure website!
# Pattern: The pattern r"https" is used to match the string "https" at the beginning of the URL.

# Text: The URL "https://something.com" starts with "https", so a match is found.

# re.match() is useful when you need to ensure that a string starts with a specific pattern. In this case, it helps confirm if a URL uses the secure HTTPS protocol.

# 4. Splitting Text with re.split()
# The re.split() function splits a string into a list of substrings based on occurrences of a specified pattern. It's similar to Python’s built-in str.split(), but with re.split(), you can use regular expressions to define more complex splitting rules, such as splitting based on multiple delimiters or patterns.

# Example: Splitting Text on Multiple Delimiters

# In this example, we split a string based on various delimiters such as commas, semicolons, spaces, periods, and hyphens.

text = 'Python,Regex;Splitting-Example. Fun, right!'
words = re.split(r"[,.;\s!-]+", text)
print(words)  
# Output: ['Python', 'Regex', 'Splitting', 'Example', 'Fun', 'right', '']

# Pattern: The pattern r"[,.;\s-!]+" specifies that the text should be split wherever there is one or more of the following:
# ,: Comma
# .: Period
# ;: Semicolon
# \s: Whitespace (spaces, tabs, etc.)
# -: Hyphen
# !: Exclamation

# The + ensures that consecutive occurrences of these delimiters are treated as a single split point.

# Text: The string "Python,Regex;Splitting-Example. Fun, right!" contains multiple delimiters that are used to split the string.

# The output for this example would be:
# ['Python', 'Regex', 'Splitting', 'Example', 'Fun', 'right', '']

# Why Does the Empty String Appear?

# The empty string results from how re.split() treats a string that ends with a delimiter.

# Because there is a delimiter at the very end of the string, split() will cleave at that sight leaving 'right' on the left side of the cleavage site, and nothing at the rights side. Because there is nothing there an empty string is added '' .


# 5. Substituting Text with re.sub(pattern, replacer, text)
# The re.sub() function in Python allows you to search for occurrences of a pattern in a string and replace them with a specified replacement string. This is particularly useful for tasks like formatting data or anonymizing sensitive information in text. The function will replace all occurrences of the pattern unless a count argument is provided to limit the number of replacements.

# Syntax:
# re.sub(pattern, replacer, text)

# Pattern: The regular expression pattern to match.

# Replacer: The string that will replace the matched patterns.

# Text: The string where the substitution will take place.

# Example 1: Formatting Phone Numbers

# In this example, we use re.sub() to clean up a phone number by removing any characters that aren't digits. This can be helpful when formatting phone numbers into a standardized format.

number = "(770) 888-1180"
formatted_number = re.sub(r"\D", '', number)
print(formatted_number)  # Output: 7708881180

# Pattern: r"\D" matches any character that is not a digit. \D is the inverse of \d, which matches digits.

# Replacer: An empty string (''), meaning we’re removing all non-digit characters.

# Text: The string "(770) 888-1180", which includes parentheses, spaces, and a hyphen that we want to remove.

# The regular expression \D matches all non-digit characters, and re.sub() replaces those characters with an empty string. As a result, we get "7708881180", a clean string containing only the digits of the phone number.


# Example 2: Anonymizing Chat User Mentions

# In this example, we use re.sub() to anonymize chat usernames by replacing them with a placeholder (@user-anon).

chat = '''
@Yve-bee123 : "I think I love Regex"
@Travis : "Aren't you married?"
@Yve_bee123 : "It's just not the same"
@Travis : "They better not see this!"
'''

anon_chat = re.sub(r"@[\w-]+", '@user-anon', chat)
print(anon_chat)

# Pattern: r"@[\w-]+" matches any username that starts with an @ symbol, followed by word characters (letters, digits, underscores) or hyphens. This captures typical usernames like @Yve-bee123 or @Travis.

# Replacer: The string @user-anon, which will replace each matched username.

# Text: The multiline chat conversation where we want to anonymize the usernames.

# The regular expression @[\w-]+ looks for any text that starts with @ and is followed by word characters (letters, digits, and underscores) or hyphens. The re.sub() function replaces each match (i.e., the usernames) with @user-anon. The result is an anonymized chat log:
    # @user-anon : "I think I love Regex"
    # @user-anon : "Aren't you married?"
    # @user-anon : "It's just not the same"
    # @user-anon : "They better not see this!"
    
    

# 6. Grouping with Regex
# Grouping in regular expressions allows you to capture specific parts of a match for later use. Parentheses () are used to define groups, and each group can be accessed individually. This is especially useful when you need to extract multiple parts of a string that match a pattern.

# Once you have defined a group using parentheses, you can refer to each group by its index, starting from 1. The full match is represented by group(0), and individual groups are accessed with group(1), group(2), etc.

# Syntax:
# re.search(pattern, text).group(n)

# Pattern: A regular expression pattern that includes parentheses () to define groups.

# Text: The string where the pattern is being searched.

# n: The group number (starting from 1) to access the captured content.

# Example: Capturing Parts of a Phone Number
# In this example, we use parentheses to capture two parts of a phone number separated by a hyphen (-). The goal is to extract the first set of digits and the second set of digits separately.

text = "123-456"
pattern = r"(\d+)-(\d+)"
thematch = re.search(pattern, text)
if thematch:
    print(f"Group 1: {thematch.group(1)}")  # Output: 123
    print(f"Group 2: {thematch.group(2)}")  # Output: 456
    
# Pattern: r"(\d+)-(\d+)" uses two groups:
# (\d+): The first group captures one or more digits before the hyphen.
# (\d+): The second group captures one or more digits after the hyphen.

# Text: The string "123-456" contains a hyphen between two sets of digits.
# Explanation:

# Group 1: The part of the text that matches the first (\d+), which is "123".

# Group 2: The part of the text that matches the second (\d+), which is "456".
# When re.search() finds a match, the two groups can be accessed using group(1) and group(2) respectively. This allows us to extract different parts of the matched text.

# Output:

# Group 1: 123
# Group 2: 456
# Why Use Grouping?
# Grouping is essential when you need to extract and manipulate specific parts of a string. For instance, if you are working with structured text like phone numbers, dates, or URLs, grouping allows you to isolate and use specific components of the match.

# For example:

# In phone numbers, you can capture the area code, central office code, and line number separately.
# In dates, you can capture the day, month, and year.


emails = [
    "correct.email@example.com",
    "incorrect-email-at-example.com",
    "another.correct.email@example.org"
]

# Write your code below to validate the emails using re.search()

for email in emails:
    # Implement regex search here
    if re.search(r"^[\w\.-]+@[\w\.-]+\.\w+$", email):
        print(f"{email} is valid")
    else:
        print(f"{email} is invalid")
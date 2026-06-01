# Enter your code here. Read input from STDIN. Print output to STDOUT
import re
import email.utils

# Read the number of email pairs
n = int(input())

# Regex pattern matching HackerRank's valid email conditions
pattern = r"^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z]+\.[A-Za-z]{1,3}$"

for _ in range(n):
    # Parse input string into a tuple: (Name, email@domain.ext)
    parsed_input = email.utils.parseaddr(input())
    
    # Run regex match against the email portion
    if re.match(pattern, parsed_input[1]):
        # Print original formatted pair using formataddr
        print(email.utils.formataddr(parsed_input))
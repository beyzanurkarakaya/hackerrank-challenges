# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

# Read the number of test cases
n = int(input())

# Loop through each phone number
for _ in range(n):
    phone_number = input()
    # Check if the string matches the pattern exactly
    if re.match(r'^[789]\d{9}$', phone_number):
        print("YES")
    else:
        print("NO")
# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

# Read input string and substring
s = input()
k = input()

# Find matches
pattern = re.compile(k)
match = pattern.search(s)

if not match:
    print('(-1, -1)')
else:
    while match:
        # Re.start() and Re.end() indices
        print('({0}, {1})'.format(match.start(), match.end() - 1))
        # Move search forward by 1 for overlapping matches
        match = pattern.search(s, match.start() + 1)
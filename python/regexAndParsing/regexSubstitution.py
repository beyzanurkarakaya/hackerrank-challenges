# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

# Function to check the matched group and replace it
def substitute(match):
    if match.group(1) == '&&':
        return 'and'
    else:
        return 'or'

# Read number of lines
n = int(input())

# Loop through each line and apply the regex substitution
for _ in range(n):
    line = input()
    # Matches '&&' or '||' only if preceded and followed by a space
    pattern = r"(?<= )(&&|\|\|)(?= )"
    print(re.sub(pattern, substitute, line))
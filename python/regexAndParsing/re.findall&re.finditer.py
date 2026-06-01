# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

vowels = "aeiou"
consonants = "qwrtypsdfghjklzxcvbnm"

pattern = r'(?<=[%s])([%s]{2,})(?=[%s])' % (consonants, vowels, consonants)

S = input().strip()
matches = re.findall(pattern, S, flags=re.I)

if matches:
    for m in matches:
        print(m)
else:
    print(-1)
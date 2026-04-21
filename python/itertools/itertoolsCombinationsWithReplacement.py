# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import combinations_with_replacement

s, k = input().split()

result = list(combinations_with_replacement(sorted(s), int(k)))

for i in result:
    print("".join(i))

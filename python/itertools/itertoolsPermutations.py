# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import permutations

s, k = input().split()

result = list(permutations(sorted(s), int(k)))

for i in result:
    print("".join(i))

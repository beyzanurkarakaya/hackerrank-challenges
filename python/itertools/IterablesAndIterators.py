# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import combinations

# Get inputs
n = int(input())
letters = input().split()
k = int(input())

# Create all combinations
combs = list(combinations(letters, k))

# Count combinations containing 'a'
favorable = 0
for c in combs:
    if 'a' in c:
        favorable += 1

# Calculate and print probability
probability = favorable / len(combs)
print(f"{probability:.4f}")

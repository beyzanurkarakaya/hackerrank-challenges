# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import product

# Read K and M from the first line
k, m = map(int, input().split())

# Read K lists, ignoring the first integer (count of elements) in each line
# and storing the squares of the elements
lists = []
for _ in range(k):
    # input().split()[1:] skips the count of elements (Ni)
    row = map(int, input().split()[1:])
    lists.append([x**2 for x in row])

# Generate all possible combinations (Cartesian product) from the lists
# and calculate (sum % m) for each combination to find the maximum
results = (sum(combination) % m for combination in product(*lists))

print(max(results))

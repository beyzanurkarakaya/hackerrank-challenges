# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import Counter

num_shoes = int(input())

shoe_inventory = Counter(map(int, input().split()))

num_customers = int(input())

total_revenue = 0

for _ in range(num_customers):
    size, price = map(int, input().split())
    
    if shoe_inventory[size] > 0:
        total_revenue += price
        shoe_inventory[size] -= 1  # Reduce stock after sale

print(total_revenue)

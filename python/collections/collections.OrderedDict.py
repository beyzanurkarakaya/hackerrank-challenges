# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import OrderedDict

inventory = OrderedDict()

n = int(input())

for _ in range(n):
    # Use rsplit(' ', 1) to split from the right side once, 
    # separating the price from the name
    data = input().rsplit(' ', 1)
    item_name = data[0]
    net_price = int(data[1])
    
    # Update the dictionary: add price if exists, else create entry
    inventory[item_name] = inventory.get(item_name, 0) + net_price

for item, price in inventory.items():
    print(f"{item} {price}")

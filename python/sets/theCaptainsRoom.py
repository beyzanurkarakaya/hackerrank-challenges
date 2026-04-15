# Enter your code here. Read input from STDIN. Print output to STDOUT
K = int(input())
rooms = list(map(int, input().split()))

unique_rooms = set(rooms)

sum_rooms = sum(rooms)

sum_of_k_multiples = sum(unique_rooms) * K

captain_room = (sum_of_k_multiples - sum_rooms) // (K - 1)

print(captain_room)

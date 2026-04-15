# Enter your code here. Read input from STDIN. Print output to STDOUT
m = int(input())
set_m = set(map(int, input().split()))
n = int(input())
set_n = set(map(int, input().split()))

different_values = list(set_m.difference(set_n)) + list(set_n.difference(set_m))
for i in sorted(different_values):
    print(i)

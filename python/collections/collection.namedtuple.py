# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import namedtuple

n = int(input())

columns = input().split()
Student = namedtuple('Student', columns)

total_marks = 0
for _ in range(n):
    student_data = Student(*input().split())
    total_marks += int(student_data.MARKS)

print("{:.2f}".format(total_marks / n))
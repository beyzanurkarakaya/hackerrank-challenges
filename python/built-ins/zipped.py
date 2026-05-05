# Enter your code here. Read input from STDIN. Print output to STDOUT
N, X = map(int, input().split())

subject_marks = []
for _ in range(X):
    subject_marks.append(map(float, input().split()))

for student_scores in zip(*subject_marks):
    print(sum(student_scores) / X)

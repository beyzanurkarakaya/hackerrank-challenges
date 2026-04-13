if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    unique_scores = sorted(set([score for name, score in students]))
    second_lowest = unique_scores[1]
    names_with_second_lowest = sorted([name for name, score in students if score == second_lowest])
    for name in names_with_second_lowest:
        print(name)

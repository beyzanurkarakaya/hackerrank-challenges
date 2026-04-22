#!/bin/python3

from collections import Counter

if __name__ == '__main__':
    s = sorted(input().strip())
    
    sayici = Counter(s).most_common(3)

    for harf, adet in sayici:
        print(harf, adet)
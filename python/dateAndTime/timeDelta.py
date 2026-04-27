#!/bin/python3

import os
from datetime import datetime

# Complete the time_delta function below.
def time_delta(t1, t2):
    # Tarih formati: Sun 10 May 2015 13:54:36 -0700
    # %a: Gun kisa adi, %d: Gun, %b: Ay kisa adi, %Y: Yil, %H:%M:%S: Saat, %z: Timezone
    fmt = '%a %d %b %Y %H:%M:%S %z'
    
    # Stringleri datetime nesnesine cevir
    dt1 = datetime.strptime(t1, fmt)
    dt2 = datetime.strptime(t2, fmt)
  
    diff = int(abs((dt1 - dt2).total_seconds()))
    
    return str(diff)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        t1 = input()

        t2 = input()

        delta = time_delta(t1, t2)

        fptr.write(delta + '\n')

    fptr.close()

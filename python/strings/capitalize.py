#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    words = s.split(' ')
    return ' '.join(word.capitalize() for word in words)
    

# -*- coding: utf-8 -*-

from random import choice


def get_random_line(filename):
    """
    Return a random line from the file
    """

    with open(filename, 'r') as f:
        return choice(f.readlines())


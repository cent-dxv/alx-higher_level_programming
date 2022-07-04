#!/usr/bin/python3
""" Create object from a JSON file """


import json


def load_from_json_file(filename):
    """ function that creates an Object from a “JSON file” """

    with open(filename, mode="r", encoding="UTF8") as myfile:
        return (json.load(myfile))
from pathlib import Path
from time import sleep
from subprocess import run


def start_react():
    path = Path(__file__).parent / 'reactapp'
    print(str(path))
    run(['npm', 'start'], cwd=path, shell=True)

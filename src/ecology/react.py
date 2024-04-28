from pathlib import Path
from subprocess import run, DEVNULL


def start_react():
    path = Path(__file__).parent / 'reactapp'
    print(str(path))
    run(
        ['npm', 'start'],
        stdin=DEVNULL,
        stderr=DEVNULL,
        stdout=DEVNULL,
        cwd=path,
        shell=True
    )

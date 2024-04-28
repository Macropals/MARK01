#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from pathlib import Path
from multiprocessing import Process


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djangosite.settings")
    sys.path.append(str(Path(__file__).parent.absolute()))
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    from .react import start_react
    p = Process(target=start_react, name='ReactApp')
    p.start()
    try:
        execute_from_command_line(sys.argv)
    finally:
        p.terminate()


if __name__ == "__main__":
    main()

import unittest
import requests

class TestCase(unittest.TestCase):

  def testUpload(self):
    response = requests.put('http://127.0.0.1:8000/add-info', json={'info': 12})
    self.assertEqual(200, response.status_code)
    json = response.json()
    self.assertTrue('message' in json)
    self.assertEqual(json['message'], 'OK')

import unittest
import requests

class TestCase(unittest.TestCase):

  def testUpload(self):
    self.skipTest('Deprecated')
    response = requests.put('http://127.0.0.1:8000/add-info', json={'info': 12})
    self.assertEqual(200, response.status_code)
    json = response.json()
    self.assertTrue('message' in json)
    self.assertEqual(json['message'], 'OK')

  def testLatestDevice(self):
    response = requests.get('http://127.0.0.1:8000/get/latest_device', json={'id': 1})
    self.assertEqual(200, response.status_code)
    json = response.json()
    self.assertTrue('message' in json)
    self.assertEqual(json['message'], 'OK', json)
    self.assertTrue('data' in json)

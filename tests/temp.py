import unittest
import requests

class TestCase(unittest.TestCase):
    HOST = 'http://127.0.0.1:8000/api'

    def testUpload(self):
        self.skipTest('Deprecated')
        response = requests.put(f'{self.HOST}/add-info', json={'info': 12})
        self.assertEqual(200, response.status_code)
        json = response.json()
        self.assertTrue('message' in json)
        self.assertEqual(json['message'], 'OK')

    def testLatestDevice(self):
        response = requests.get(f'{self.HOST}/get/device-data/1/latest')
        self.assertEqual(200, response.status_code)
        json = response.json()
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('data', json)

    def testAllDevices(self):
        response = requests.get(f'{self.HOST}/get/device')
        self.assertEqual(200, response.status_code)
        json = response.json()
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('devices', json) 
        for i in json['devices']:
            self.assertIsInstance(i[0], int)
            self.assertIsInstance(i[1], str)

    def testDevice(self) -> None:
        response = requests.get(f'{self.HOST}/get/device/1')
        self.assertEqual(200, response.status_code)
        json = response.json()
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('device', json)
        device = json['device']
        self.assertIsInstance(device, dict)
        self.assertIn('name', device)
        assert isinstance(device['name'], str)


from json import loads

from django.test import TestCase, RequestFactory

from .. import views
from ..models import Floor, Device, DeviceData

# Create your tests here.
class GetTests(TestCase):
    __slots__ = ('factory', )

    def setUp(self) -> None:
        self.factory = RequestFactory()
        floor = Floor(
            index=1,
            name='Test floor',
            center_x=2,
            center_y=3
        )
        device = Device(
            floor=floor,
            name='Test device',
            x=10,
            y=20,
            x_extents=5,
            y_extents=5
        )
        deviceData = DeviceData(
            device=device,
            data={'value': 1}
        )
        floor.save()
        device.save()
        deviceData.save()
        return super().setUp()

    def testGetDeviceDataIntLatest(self):
        request = self.factory.get('/get/device-data/1/latest')
        response = views.get.latest_device_data(request, 1)
        self.assertEqual(200, response.status_code)
        json = loads(response.content)
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('data', json)

    def testGetDevice(self):
        request = self.factory.get('/get/device')
        response = views.get.devices(request)
        self.assertEqual(200, response.status_code)
        json = loads(response.content)
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('devices', json) 
        self.assertLessEqual(1, len(json['devices']))
        for device in json['devices']:
            self.assertIn('id', device)
            self.assertIn('type', device)
            self.assertIn('floor', device)
            self.assertIn('x', device)
            self.assertIn('y', device)
            self.assertIn('x_extent', device)
            self.assertIn('y_extent', device)
            self.assertIsInstance(device['id'], int)
            self.assertIsInstance(device['type'], str)
            self.assertIsInstance(device['floor'], int)
            self.assertIsInstance(device['x'], (float, int))
            self.assertIsInstance(device['y'], (float, int))
            self.assertIsInstance(device['x_extent'], (float, int))
            self.assertIsInstance(device['y_extent'], (float, int))

    def testGetDeviceInt(self) -> None:
        request = self.factory.get('/get/device/1')
        response = views.get.device(request, device_id=1)
        self.assertEqual(200, response.status_code)
        json = loads(response.content)
        self.assertIn('message', json)
        self.assertEqual(json['message'], 'OK', json)
        self.assertIn('device', json)
        device = json['device']
        self.assertIsInstance(device, dict)
        self.assertIn('name', device)
        assert isinstance(device['name'], str)

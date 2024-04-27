import unittest
import requests
import responses

class TestCase(unittest.TestCase):

  def testExample(self):
    # responses.add(**{
    #   'method'         : responses.PUT,
    #   'url'            : 'http://127.0.0.1:800',
    #   'body'           : '{"error": "reason"}',
    #   'status'         : 404,
    #   'content_type'   : 'application/json',
    #   'adding_headers' : {'X-Foo': 'Bar'}
    # })
    response = requests.put('http://127.0.0.1:8000/add-info', json={'info': 12})
    print(response)
    self.assertEqual(200, response.status_code)

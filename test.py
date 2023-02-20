import unittest
from app import app

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_404(self):
        rv = self.app.get('/i-am-not-found')
        self.assertEqual(rv.status_code, 404)

    def test_homepage(self):
        rv = self.app.get('/')
        self.assertTrue("This is the title of the webpage!" in rv.get_data(as_text=True))

if __name__ == '__main__':
    unittest.main()

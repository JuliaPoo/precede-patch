import http.server
import socketserver

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add your custom headers here
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

PORT = 8001

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    httpd.serve_forever()
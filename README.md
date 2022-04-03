# Twaddle API Docs
For the first you need a knowledge about JSON-format, Cyclic-XORring, and Base64.<br>
Endpoint - http://176.113.82.87:5000

**All data requests in JSON-format:**<br>
```py
import requests
r = requests.post(url, json=fields_or_idk)
```
<br>
<br>
# API Methods
<br>
**POST /api/login**
<br>
Fields:<br>
```py
username = "your Twaddle username"
password = "your super secret password"
```
Returns:<br>
```py
token = "your super secret Twaddle Access-Token"
```

# Twaddle API Docs
For the first you need a knowledge about JSON-format, Cyclic-XORring, and Base64.<br>
Main Endpoint - http://176.113.82.87:5000<br>
WebSockets Endpoint - http://176.113.82.87:8765

**All data requests in JSON-format:**
```py
import requests
r = requests.post(url, json=fields_or_idk)
```


# API Methods


**POST /api/login**

Fields:

```py
username = "your Twaddle username"
password = "your super secret password"
```
Returns:

```py
token = "your super secret Twaddle Access-Token"
```

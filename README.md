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


**POST /api/accounts.login**

Fields:

```py
username = "your Twaddle username"
password = "your super secret password"
```
Returns:

```py
token = "your super secret Twaddle Access-Token"
```



**POST /api/messages.createDialog**

Fields:

```py
token = "your super secret Twaddle Access-Token"
members = [1,2,3] # member's user IDs
name = "dialog's coolest name"
```
Returns:

```py
status = "dialog_created" # YAAASSSSS
```



**POST /api/messages.send**

Fields:

```py
def encrypt(inp:str, key:str):
    xorred = ("").join(chr(ord(x) ^ ord(y)) for x, y in zip(inp, itertools.cycle(key)))
    return base64.b64encode(xorred.encode()).decode()

token = "your super secret Twaddle Access-Token"
encrypted_text = encrypt("cool text", "cool key") # This is cyclic XOR + base64
encrypt_key = "cool key"
attachments = [{"type": "sometype", "url": "http://example.com/someattachment"}] # types - image, audio, video, document or your own types are compatible with your client
dialog_id = 666 # hehe, your dialog id
```
Returns:

```py
status = "message_sent" # YAAASSSSS
```

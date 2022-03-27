# Twaddle API Docs
For the first you need a knowledge about JSON-format, and Base64.<br>
Endpoint - https://dev.woidzero.xyz/twaddle/api
<br>
# All request contains:
**GET**<br>
`endpoint` + `method_name?req=` + `encrypted`<br><br>
**How it works?**<br>
`"encrypted"` - is JSON-ed dictionary with fields and encoded to Base64.
<br>
<br>
Example: `base64_encode(json_encode({"some": "dict"}));`
<br><br>
# Authorization

**GET /auth/login.php**
<br>
Request data:
<br>
`{'username': 'mike', 'password':'qwer123', 'device_name':'MIKES_DESKTOP'}`

Response:
<br>
`{'token': 'iewiri.121fweipwfoq', 'device_id':'451293'}`<br>
device_id and token need to be saved!

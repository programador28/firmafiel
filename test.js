const Axios=require('axios');
const Fiel=require('./build/index');


const certest =  "-----BEGIN CERTIFICATE----- \nMIIGXzCCBEegAwIBAgIUMDAwMDEwMDAwMDA0MTA5OTI1ODcwDQYJKoZIhvcNAQEL \nBQAwggGyMTgwNgYDVQQDDC9BLkMuIGRlbCBTZXJ2aWNpbyBkZSBBZG1pbmlzdHJh \nY2nDs24gVHJpYnV0YXJpYTEvMC0GA1UECgwmU2VydmljaW8gZGUgQWRtaW5pc3Ry \nYWNpw7NuIFRyaWJ1dGFyaWExODA2BgNVBAsML0FkbWluaXN0cmFjacOzbiBkZSBT \nZWd1cmlkYWQgZGUgbGEgSW5mb3JtYWNpw7NuMR8wHQYJKoZIhvcNAQkBFhBhY29k \nc0BzYXQuZ29iLm14MSYwJAYDVQQJDB1Bdi4gSGlkYWxnbyA3NywgQ29sLiBHdWVy \ncmVybzEOMAwGA1UEEQwFMDYzMDAxCzAJBgNVBAYTAk1YMRkwFwYDVQQIDBBEaXN0 \ncml0byBGZWRlcmFsMRQwEgYDVQQHDAtDdWF1aHTDqW1vYzEVMBMGA1UELRMMU0FU \nOTcwNzAxTk4zMV0wWwYJKoZIhvcNAQkCDE5SZXNwb25zYWJsZTogQWRtaW5pc3Ry \nYWNpw7NuIENlbnRyYWwgZGUgU2VydmljaW9zIFRyaWJ1dGFyaW9zIGFsIENvbnRy \naWJ1eWVudGUwHhcNMTgwNTI4MTkxNjAwWhcNMjIwNTI4MTkxNjQwWjCBzTEfMB0G \nA1UEAxMWUkFDSUVMIE1PTElOQSBFU1BJTk9TQTEfMB0GA1UEKRMWUkFDSUVMIE1P \nTElOQSBFU1BJTk9TQTEfMB0GA1UEChMWUkFDSUVMIE1PTElOQSBFU1BJTk9TQTEL \nMAkGA1UEBhMCTVgxJjAkBgkqhkiG9w0BCQEWF3JhY2llbC5tb2xpbmFAZ21haWwu \nY29tMRYwFAYDVQQtEw1NT0VSNzQwNDIyTEQ4MRswGQYDVQQFExJNT0VSNzQwNDIy \nSERGTFNDMDkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCF89HXj29W \niUVz5DYBgK03g3AHRFRkb0nDABsJ/p3Gu8/Q2r0W8r4gUX/dTDQMPw8bvXvyW+DT \nigpDtyvpL5Z2EtHcImrF3VDwsh3K3FIAfs3XqB5wXwsZpzGI31vb14pZ+KaxA5rs \npn1t1MADnzlPgH+89kk9TYIoZmu/V9WJCFz3FzY9TxPY4dHLwPTrG8g1ECAOedZL \nq49vl3CPPZU0gxnUnbq5d4orpL5oN9Qnndiofods0AZK/CtI3P3715SzbPMrZHlg \nxBeA0WHDkDiRH8wOEL5mhHMf5qaG1rHh0fHdjLug6yPHDU3+Y5ofMPpYCXlraX1p \nc7yfed3XIiRFAgMBAAGjTzBNMAwGA1UdEwEB/wQCMAAwCwYDVR0PBAQDAgPYMBEG \nCWCGSAGG+EIBAQQEAwIFoDAdBgNVHSUEFjAUBggrBgEFBQcDBAYIKwYBBQUHAwIw \nDQYJKoZIhvcNAQELBQADggIBAJ06OPzaj2DItVej95IIYXnB37xGz6q1YZbdeSxI \n4JlXnSjT8rONgtjXOi5YDqAyH3qDXj9JuS8R1mmI6yUi2NL1+z8zKVShElhEfGAY \nwMc4NGCE2otXw34uPyve1bnm6Jk3n0l66h3/vOV40eQ6oBPnUYOU8odaP2GjSEf8 \nEzJrLIVvV0g52dj3xpy5SEn2qmMBT1Qbty9HkO3ZtSvjKiPMtVgRJClQlZPszgzq \nIxMdo+FcSH2DkXEplQpH01q/V5F/wx7HYBPE7Ns87MO5NxexPH4ItgtdEsgQ76kn \nfrq88ou23MbxhDHCH+BEq3Qm+Q6HtUUyeQ52LXiu4gJpGPWm6xowCLMFYn7NIWzm \nHaEfaYKYCliic4NLSzrySBkZujNQIm6p5f7vWmWKLFg0Bh9mH6jd+2FzkP7fG2+E \nBqwMsW5eJ8LG9V/S2qDWSi57E4VLWWou9n09CqtvjiWp9kiZ3BkSBFxVTmy1DgLO \nodcT4T9RT6wRzQ84klLvwB7kBIvS+ZyJtJnn2N6iobFl/0t+5I8DnLOIUiRSVoaF \nN4z8aa7P094LZKVPX+CAjMe3tUbCAM6uUFHqielPzHMdFDkkHgF6h6eEQBYtJaSL \nCph0U1P6mwKHjeWBAB+6KFiWw2AaeKuFQYMl4GlJFqlUVXcLfqOTNVOJKx2RAbpq \nbKaj \n-----END CERTIFICATE-----";
async function foo(){   
    var algo=await Axios.post(
      "http://llucio-openssl.k8s.funcionpublica.gob.mx/cert",
      {
        cert: certest
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
}

foo();
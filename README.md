This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Webhosting on IPFS
Reference: IPFS: https://medium.com/elbstack/decentralized-hosting-of-a-static-react-app-with-ipfs-aae11b860f5e

## Create React App
```bash
npx create-react-app ipfs-react-app
cd ipfs-react-app
yarn start
```

### Build Project
```bash
yarn build
```

## Synchronize Files and Commit to IPFS
The second part of this section applies to everyone while the first section applies to my situation which is developing on a remote server and synchronizing files to node hosting the IPFS Docker instance.


### Retrieve IPFS Hash
Once the directory has been added to IPFS it will generate a hash that looks like the following.
```
$ ipfs add -r /export/build
added PmcPdq8ocoPACiSR6u3WWFubDEsre6a2pG7tBz9dru4AU8 build/asset-manifest.json
 4.59 KiB / ? added PmcFc6EPhavNSfdjG8byaxxV6KtHZvnDwYXLHvyJQPp3uN build/favicon.ico
added Pmc1jd9uf5DmSqRcjsq5iUJ5NswcPE2jCYbzLJ8fhbbpmd build/index.html
 7.53 KiB / 478.59 KiB    1.57%added PmfKqCqGsesAk1JhovJCQajk8awxuqjDPc8QnHa39oDx6g build/manifest.json
 7.53 KiB / 478.59 KiB    1.57%added PmZHHbsBeUVuNPhAniFBQGnssWbKVoCoS6YZi6rVGv8CQY build/precache-manifest.c75e6fbb8aeee470ab7435fbd601c351.js
 9.67 KiB / 478.59 KiB    2.02%added PmPFhRY5UiP77Jn6P87KjV5RKAXM2KzePf29vRVR35C25d build/service-worker.js
 9.67 KiB / 478.59 KiB    2.02%added PmUs7uyggmSQxBrEGUiYY4khG99nxr3wvtJG6acrdwm6Yq build/static/css/main.584f321a.chunk.css
added PmSWcsYLnHUxV4YStPcdJR7u83xpp9iiy3yfv8gYqGbURK build/static/css/main.584f321a.chunk.css.map
 127.09 KiB / 478.59 KiB   26.56%added PmVMiAjUhVZbn4PDymNu8QrK3NsDgJRRvZA5q7UvV5rFFV build/static/js/2.b41502e9.chunk.js
 459.60 KiB / 478.59 KiB   96.03%added PmP8p6ExszCZ3Z3aFbJ6kEeCnPDPgQ8R4EwCepVCPby3uv build/static/js/2.b41502e9.chunk.js.map
 459.60 KiB / 478.59 KiB   96.03%added PmPfCyfyLoZT398jXjJgbfdxwa3d9N91Lg4T8XdqgkSenb build/static/js/main.493cf53a.chunk.js
 466.71 KiB / 478.59 KiB   97.52%added PmYStf8YHRb5iE5nYpZ42Ei6K1zDyE2TbND1knebkGy2qk build/static/js/main.493cf53a.chunk.js.map
added PmZr8DQ21vnJSnkQhnanHM5P8fppSCt8BHAkoEqhA7S5sd build/static/js/runtime~main.d653cc00.js
 468.18 KiB / 478.59 KiB   97.82%added PmbwbsrPmRY31cCJ4dXkminAPasSe1UKSZ9mqwv2sL1u5P build/static/js/runtime~main.d653cc00.js.map
 478.59 KiB / 478.59 KiB  100.00%added PmT5m9wx8ChkC31Vnx175ShPzMpcB85AS989Hc2dPpsZsZ build/static/media/logo.5d5d9eef.svg
 478.59 KiB / 478.59 KiB  100.00%added PmNgC2EvVir5tC7jjdwHecdszpnpFPNd5M5tp42TtWYjpF build/static/css
 478.59 KiB / 478.59 KiB  100.00%added PmXqv58fNVne7xGUSECfZvw7bb6dK5v92yfyVgZPmtqjXv build/static/js
added PmUCWQYtD8otdHmda45N9svVo67nthP84heyUFydhPPzyK build/static/media
 478.59 KiB / 478.59 KiB  100.00%added PmcwHrFmu3PmK8VE3CscShr93XPxe3pcGeEpqDiCwcy5PG build/static
added PmZ5eFjjYFA7WTZhFQzko9rm9K2hUqsrB8Z81XJjtde4x3 build
```

The last line shows us the build hash and now we can access it via an endpoint, all of the following should be accessible 
http://localhost:8080/ipfs/PmZ5eFjjYFA7WTZhFQzko9rm9K2hUqsrB8Z81XJjtde4x3
https://ipfs.io/ipfs/PmZ5eFjjYFA7WTZhFQzko9rm9K2hUqsrB8Z81XJjtde4x3/
https://cloudflare-ipfs.com/ipfs/PmZ5eFjjYFA7WTZhFQzko9rm9K2hUqsrB8Z81XJjtde4x3/



# ordering_app
An Ordering App

# Pre-requisites:
  1. https://www.npmjs.com/package/http-server ( We need this because ajax doenst work on normal file:// protocols )
  * Install Node first ( node installation will install npm ) https://nodejs.org/en/
  2. Run the following command: npm install http-server -g

  3. Download the source code from github and then from command prompt:
    ```
    cd <YOUR_DRIVE>\ordering_app\src
    http-server
    ```

    ```
        Starting up http-server, serving ./
        Available on:
        http:10.171.70.238:8080
        http:127.0.0.1:8080
        Hit CTRL-C to stop the server
  4. From your browser hit 127.0.0.1:8080

Note:
To add a link to a page:
add a html page to partials and in the anchor tag, specify role="page-nav" href="/home"
eg.,
<a role="page-nav" href="/home" id="home">
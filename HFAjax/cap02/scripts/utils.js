// Cria um HTTP Request
function createRequest() {
    try {

        var request = new XMLHttpRequest();

    } catch (tryMS) {

        try {
            request = new ActiveXObject("Msxml12.XMLHTTP");

        } catch (otherMS) {

            try {

                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (failed) {
                request = null;
            }
        }

    }
    return request;
}
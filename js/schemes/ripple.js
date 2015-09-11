
if (typeof COMPILED === "undefined" && typeof URI === "undefined" && typeof require === "function")
{
    var URI = require("../uri");
}
(function () {

    function isValidRippleAddress(address)
    {
        //TODO add some better checks
        return address.charAt(0) === "r";
    }

    function isValidDestinationTag(dt)
    {
        //TODO add some better checks
        return /^[0-9]+$/.test(dt);
    }

    URI.SCHEMES["ripple"] = {
        parse: function (components, options) {
            if (!components.host) {
                //Transaction
                var sub_elements = components.path.split(":");
                if(sub_elements[0] != "transaction" || sub_elements.length < 2)
                {
                    components.error = components.error || "Expected a transaction resource.";
                }
                else
                {
                    if(sub_elements[1] == "blob" && sub_elements.length >= 3)
                    {
                        components.signed_transaction = sub_elements[2];
                    }
                    else
                    {
                        components.transaction_hash = sub_elements[1];
                        //TODO Consider parsing the blob when have access to our SerializedObject class
                        // - https://github.com/ripple/ripple-lib/blob/develop/src/core/serializedobject.js
                        //
                        //var buffer = new SerializedObject(sub_elements[1]);
                        //components.transaction = JSON.parse(buffer.to_json())
                    }
                }
            }
            else
            {
                //Get address and destination tag
                components.address = components.host;
                if(!isValidRippleAddress(components.host))
                {
                    components.error = components.error || "Invalid Ripple address.";
                }

                if(components.userinfo)
                {
                    components.destination_tag = components.userinfo;
                    if(!isValidDestinationTag(components.destination_tag))
                    {
                        components.error = components.error || "Destination tags must be all numeric";
                    }
                }

                //Parse path
                if(components.path){
                    path_elements = components.path.split("/");
                    if(path_elements.length > 1)
                    {
                        components.currency = path_elements[1];
                    }
                    if(path_elements.length > 2)
                    {
                        components.counterparty = path_elements[2];
                        if(!isValidRippleAddress(components.counterparty))
                        {
                            components.error = components.error || "Invalid Ripple address as counterparty.";
                        }
                    }
                }
            }
            return components;
        },
        serialize: function (components, options) {
            //TODO - implement serialization
            return components;
        }
    };
})();
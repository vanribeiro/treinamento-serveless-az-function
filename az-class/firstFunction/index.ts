import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // context.log('HTTP trigger function processed a request.');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

        try {
            const { nome, planta } = req.query;
            if(!nome || !planta) {
                context.res = {
                    status: 400
                }
                return;
            }

            const message = `${nome} likes ${planta}`;
            const response = {
                nome,
                planta,
                message,
                success: true,
            }
            
            context.res = {
                body: response,
                contentType: "application/json"
            }

    } catch (error) {
        context.res = { status: 500 }
    }
};

export default httpTrigger;
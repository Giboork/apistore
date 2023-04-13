import {App} from "aws-cdk-lib";
import {BackendStack} from "./stack/backend.stack";

const app = new App();
const env = {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
}

new BackendStack(app, 'apistore-react-stack', { env })
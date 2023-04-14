import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {QestEcsDeployment} from "qest-ecs-cluster";
import {ContainerImage} from "aws-cdk-lib/aws-ecs";
import * as path from "path";

export class BackendStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        new QestEcsDeployment(this, 'deployment', {
            internetNetwork: {
                lbPriority: 10,
                subdomain: 'apistore',
            },
            containerSpecification: {
                containerId: 'apistore',
                containerPort: 8000,
            },
            containerDefinition: {
                image: ContainerImage.fromAsset(path.join(__dirname, '..', '..')),
                memoryLimitMiB: 512,
                memoryReservationMiB: 320,
            }
        });
    }
}
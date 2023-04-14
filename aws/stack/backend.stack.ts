import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {constructs, QestEcsDeployment} from "qest-ecs-cluster";
import {ContainerImage} from "aws-cdk-lib/aws-ecs";
import * as path from "path";
import {ApplicationTargetGroup, ListenerCondition} from "aws-cdk-lib/aws-elasticloadbalancingv2";

export type BackendProps = StackProps & {
    lbPriority: number,
    httpDomains: Array<{
        domain: string,
        lbPriority: number
    }>
};

export class BackendStack extends Stack {
    constructor(scope: Construct, id: string, props: BackendProps) {
        super(scope, id, props);

        const deployment = new QestEcsDeployment(this, 'deployment', {
            internetNetwork: {
                lbPriority: props.lbPriority,
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

        const httpListener = constructs.httpListener(this, 'http-listener');
        for(const httpDomain of props.httpDomains) {
            httpListener.addTargetGroups(`target-group-${httpDomain.lbPriority}`, {
                targetGroups: [deployment.targetGroup as ApplicationTargetGroup],
                priority: httpDomain.lbPriority,
                conditions: [
                    ListenerCondition.hostHeaders([httpDomain.domain])
                ]
            })
        }
    }
}
## Automatic deployment with CDK

This is a assignment done for [AWS_2_serving_spa](https://github.com/rolling-scopes-school/aws/blob/main/aws-developer/02_serving_spa/task.md) 


This workspace uses npm workspaces to manage multiple packages. App contains 'my shop' application and cdk contains the infrastructure.


The following scripts are available from the root of the project:

- `npm run build:app`
    Builds the frontend application located in the my-store-app workspace. This command compiles the React app, preparing it for deployment.

- `npm run deploy`
    Deploys the CDK stack defined in the cdk workspace. This command synthesizes the CloudFormation template and deploys the AWS resources to your account.

- `npm run destroy`
    Destroys the deployed CDK stack from the cdk workspace, removing all associated AWS resources.



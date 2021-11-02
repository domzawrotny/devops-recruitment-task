My approach to this task was a follows:
1. Creating a Docker image for the Node app (defining Dockerfile, running `docker build` and `docker push`).
2. Creating a deployment and a service for the Mongo DB database.
3. Creating a deplotment, a service and an ingress controller for the Node app which uses the Nginx Ingress Controller as the entry point to the cluster and serves as the Proxy.


In order to get this deployed on Minikube, you need to follow these steps:
1. Run the following command to get the Nginx Ingress Controller enabled: `minikube addons enable ingress`
2. Navigate to the folder where the charts are stored.
3. Run the following command to get the Mongo DB deployed:  `helm install --generate-name .\chart-mongo-db\`
3. Run the following command to get the Node app deployed:  `helm install --generate-name .\chart-nest-app\`


What could be done better?
1. The values for Secrets/ConfigMaps could be templated dynamically - in that particular case I had to put only one or two values in the CM/Secrets, but if the project were bigger, it might've been useful to use the range function to generate the values dynamically.
2. Defining the autoscaling.
3. MongoDB could be defined as a StatefulSet rather than a Deployment in case we'd need to scale it in order to managed increased load or the storage failure.

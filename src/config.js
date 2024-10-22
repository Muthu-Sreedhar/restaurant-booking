/**
 * CreatedBy        : RaviBalan
 * CreatedTime      : Jun 27 2024
 * Description      : This file contains all application configuration
 **/


export class config {

    /**
     * The output object of this whole function will be generated from the appstore in future
     */
    getMerchantTenant() {

        return {
            MERCHANT_KEY: "BAAS360_TENANT_KEY",
            TENANT_KEY: "BAAS360_TENANT_KEY",
            SYSTEM_USER_AUTH_KEY: "BAAS360_SYS_AUTH_KEY"
        }
    }

    /**
     * The output object of this whole function will be generated from the appstore in future
     */
    getConfig() {

        return {

            // Application information
            APPLICATION: {
                APPLICATION_KEY: "356c322a-f623-4f45-9f3c-6a2e8d916574",
                APPLICATION_NAME: "Vektorr BillPay - Portal"
            },

            // Instance information
            INSTANCE: {
                INSTANCE_KEY: "4687e88a-3594-48ba-b56e-70ae8b1b61f8",
                INSTANCE_NAME: "Vektorr BillPay - Portal -(Local Environment)",
                INSTANCE_URL: "http://localhost:4004/bpay"
            },

            // Basic information needed to run the service
            SERVICE_KEY: "e59495ea-2360-430f-9b82-9e0b4f804eac",
            SERVICE_NAME: "Vektorr BillPay Web Client - (Local Environment)",
            SERVICE_URL: "http://localhost:4004/bpay"
            ,
            SERVICE_BASE_URL: "/appstore",
            // Service startup host and port
            SERVICE_HOST: "localhost",
            SERVICE_PORT: "4001",

            // Service basic authentication
            SERVICE_AUTH: {},

            // Service type info
            SERVICE_TYPE: {
                SERVICE_TYPE_KEY: "db458fbb-c88f-41f7-b3a2-c615f9939f66",
                SERVICE_TYPE_NAME: "Web Client"
            },

            // Environment Type Information
            ENVIRONMENT_TYPE: {
                ENVIRONMENT_TYPE_KEY: "1fd5d12c-1dd4-496f-8c4c-db080470890a",
                ENVIRONMENT_TYPE_NAME: "LOCAL"
            },

            // Service remote configuration (These will be generated from app store in future)
            SERVICE_REMOTE: {
                AUTH: {
                    WEB_CLIENT: {
                        "BAAS360_TENANT_KEY@BAAS360_TENANT_KEY": {
                            REMOTE_SERVICE_NAME: "Baas Auth Store WebClient",
                            REMOTE_SERVICE_URL: "http://localhost:4002/auth",
                            REMOTE_SERVICE_AUTH_USERNAME: "N/A",
                            REMOTE_SERVICE_AUTH_PASSWORD: "N/A",
                        }
                    },
                    GATEWAY: {
                        "BAAS360_TENANT_KEY@BAAS360_TENANT_KEY": {
                            REMOTE_SERVICE_NAME: "Baas Auth Gateway",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/auth-gateway",//"https://dev1.baas360.alitasys.com/auth-gateway",//"http://localhost:3004",  //http://dev1.baas360.alitasys.com:4003
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }
                    }
                },
                APP_STORE: {
                    WEB_CLIENT: {
                        "BAAS360_TENANT_KEY@BAAS360_TENANT_KEY": {
                            REMOTE_SERVICE_NAME: "Baas App Store WebClient",
                            REMOTE_SERVICE_URL: "http://localhost:4001/appstore",
                            REMOTE_SERVICE_AUTH_USERNAME: "N/A",
                            REMOTE_SERVICE_AUTH_PASSWORD: "N/A",
                        }
                    },
                    GATEWAY: {
                        "BAAS360_TENANT_KEY@BAAS360_TENANT_KEY": {
                            REMOTE_SERVICE_NAME: "Baas App Store Gateway",
                            REMOTE_SERVICE_URL: "http://localhost:4001",
                            REMOTE_SERVICE_SERVER_URL: "http://dev1.baas360.alitasys.com/appstore-gateway",
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        },
                    }
                },
                BILL_PAY: {
                    GATEWAY: {
                        "0000-8964-0001-5423@0000-8964-0001-5423": {
                            REMOTE_SERVICE_NAME: "Bill pay gateway",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/bpay-gateway",
                            REMOTE_SERVICE_SERVER_URL: "https://dev1.baas360.alitasys.com/bpay-gateway",//http://localhost:3003 //http://dev1.baas360.alitasys.com:4001
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }

                    }
                },
                WORKFLOW: {
                    GATEWAY: {
                        "BAAS360_TENANT_KEY@BAAS360_TENANT_KEY": {
                            REMOTE_SERVICE_NAME: "Baas WorkFlow Gateway ",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/workflow-gateway",
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }
                    }
                },
                OBJECTS: {
                    GATEWAY: {
                        "0000-8964-0001-5423@0000-8964-0001-5423": {
                            REMOTE_SERVICE_NAME: "Baas Large Objects Gateway ",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/objects-gateway",
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }
                    }
                },
                DIRECTORY: {
                    GATEWAY: {
                        "0000-8964-0001-5423@0000-8964-0001-5423": {
                            REMOTE_SERVICE_NAME: "Baas Directory Gateway",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/directory-gateway",
                            REMOTE_SERVICE_AUTH_USERNAME: "234LKJH823423",
                            REMOTE_SERVICE_AUTH_PASSWORD: "PO2392349MNJKW",
                        }
                    }
                },
                TASK: {
                    GATEWAY: {
                        "0000-8964-0001-5423@0000-8964-0001-5423": {
                            REMOTE_SERVICE_NAME: "Baas Task Gateway ",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/task-gateway",
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }
                    }
                },
                DATASTORE: {
                    GATEWAY: {
                        "0000-8964-0001-5423@0000-8964-0001-5423": {
                            REMOTE_SERVICE_NAME: "Bill pay gateway",
                            REMOTE_SERVICE_URL: "https://dev1.baas360.alitasys.com/datastore-gateway",
                            REMOTE_SERVICE_SERVER_URL: "https://dev1.baas360.alitasys.com/datastore-gateway",//http://localhost:3003 //http://dev1.baas360.alitasys.com:4001
                            REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
                            REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
                        }

                    }
                }
            },

            /** This will contain service registry pulled from the app store */
            SERVICE_REGISTRY: {
                IS_BAAS_LOG_ENABLED: true
            },

            // Service connector configuration
            SERVICE_CONNECTOR: {},
        }
    }
};
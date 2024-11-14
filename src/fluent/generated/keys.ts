import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '24ab32a3a84b4ff1b3a2b1166835cd3e'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'cb224f5e5ee7407c9304e851a6139643'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'fb709e365e734eab9cfd729934ed3ed9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ccb22c97da6f46dfa1db2ca481bebd6b'
                    }
                }
            }
        }
    }
}

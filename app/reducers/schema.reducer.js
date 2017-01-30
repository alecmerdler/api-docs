export function schemaReducer(state, action) {
    var asyncAction;
    const graphQLParams = {
        query: `
            query IntrospectionQuery {
            __schema {
              queryType { name }
              mutationType { name }
              subscriptionType { name }
              types {
                ...FullType
              }
              directives {
                name
                description
                locations
                args {
                  ...InputValue
                }
              }
            }
            }
            
            fragment FullType on __Type {
            kind
            name
            description
            fields(includeDeprecated: true) {
              name
              description
              args {
                ...InputValue
              }
              type {
                ...TypeRef
              }
              isDeprecated
              deprecationReason
            }
            inputFields {
              ...InputValue
            }
            interfaces {
              ...TypeRef
            }
            enumValues(includeDeprecated: true) {
              name
              description
              isDeprecated
              deprecationReason
            }
            possibleTypes {
              ...TypeRef
            }
            }
            
            fragment InputValue on __InputValue {
            name
            description
            type { ...TypeRef }
            defaultValue
            }
            
            fragment TypeRef on __Type {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                        ofType {
                          kind
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
    };

    switch (action.type) {
        case "retrieveSchema":
            asyncAction = fetch('http://localhost:3001/v1.0/foundry', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(graphQLParams),
                credentials: 'include',
            })
            .then((response) => response.text())
            .then((responseBody) => {
                state.schema = JSON.parse(responseBody);

                return state;
            });
            break;
        default:
            asyncAction = Promise.resolve(state);
    }

    return asyncAction;
}
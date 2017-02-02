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
        `
    };

    switch (action.type) {
        case "retrieveSchema":
            console.log(JSON.stringify(graphQLParams));
            asyncAction = fetch('http://localhost:3001/v1.0/foundry', {
                method: 'post',
                mode: 'no-cors',
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
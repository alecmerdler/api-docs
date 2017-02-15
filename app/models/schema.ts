export type ReferenceField = {
    description: string;
    name: string;
    isDeprecated: boolean;
    deprecationReason: string;
    type: { kind: string, name: string };
}

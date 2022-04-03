export type AI = {
    shortName: string;
    name: string;
    version: string;
    description: string;
    url?: string;
    loadSupported: boolean;
    interfaceShortName: string;
    interfaceVersion: string;
    ddlPath: string;
    options?: Record<string, any>;
};
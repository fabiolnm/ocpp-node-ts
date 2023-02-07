/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * This field specifies the report base.
 *
 */
export declare type ReportBaseEnumType = "ConfigurationInventory" | "FullInventory" | "SummaryInventory";
export interface UrnOCPPCp220203GetBaseReportRequest {
    customData?: CustomDataType;
    /**
     * The Id of the request.
     *
     */
    requestId: number;
    reportBase: ReportBaseEnumType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
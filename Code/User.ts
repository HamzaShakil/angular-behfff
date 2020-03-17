export class LocationInfo {

    public id: number;

    public name: string;

    public description: string;

    public parentLocationId: number;

    public tenantId: number;

    public level: number;

    public isDeleted: boolean;

    public addedByUserId: number;

    public addedDateTime: Date;

    public updatedByUserId: number;

    public updatedDateTime: Date;

    public locations: LocationInfo[];

    public locationSubnets: LocationSubnetInfo[];

    public geoCoordinate: GeoCoordinate;

}
export class GeoCoordinate {
    public latitude: number;
    public longitude: number;
    public altitude: number;
}
export class LocationSubnetInfo {

    public id: number;
    public startIP: string;
    public endIP: string;
    public StartNumericIP: number;
    public EndNumericIP: number;
    public title: string;
    public subnetMask: number;
    public locationId: number;

}

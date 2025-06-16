import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ObjectId } from 'mongoose';
import { PropertyBrand, PropertyColor, PropertyFuel, PropertyStatus, PropertyTransmission, } from '../../enums/property.enum';

@InputType()
export class PropertyUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => PropertyTransmission, { nullable: true })
	propertyTransmission?: PropertyTransmission;

	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	propertyStatus?: PropertyStatus;

	@IsOptional()
	@Field(() => PropertyColor, { nullable: true })
	propertyColor?: PropertyColor;

	@IsOptional()
	@Field(() => PropertyFuel, { nullable: true })
	propertyFuel?: PropertyFuel;

	@IsOptional()
	@Field(() => PropertyBrand, { nullable: true })
	propertyBrand?: PropertyBrand;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	propertyAddress?: string;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	propertyTitle?: string;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyPrice?: number;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyOdometer?: number;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyYear?: number;

	@IsOptional()
	@Field(() => [String], { nullable: true })
	propertyImages?: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertySell?: boolean;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyRent?: boolean;

    soldAt?: Date;

    deletedAt?: Date;


	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}

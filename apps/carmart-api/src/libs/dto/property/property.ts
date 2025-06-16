import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { PropertyStatus, PropertyBrand, PropertyTransmission, PropertyColor, PropertyFuel } from '../../enums/property.enum';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class Property {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => PropertyTransmission)
	propertyTransmission: PropertyTransmission;

	@Field(() => PropertyStatus)
	propertyStatus: PropertyStatus;

	@Field(() => PropertyBrand)
	propertyBrand: PropertyBrand;

	@Field(() => PropertyColor)
	propertyColor: PropertyColor;

	@Field(() => PropertyFuel)
	propertyFuel: PropertyFuel;

	@Field(() => String)
	propertyOdometer: string;

	@Field(() => String)
	propertyAddress: string;

	@Field(() => String)
	propertyTitle: string;

	@Field(() => Number)
	propertyPrice: number;

    @Field(() => Number)
	propertyYear: number;

	@Field(() => Int)
	propertyViews: number;

	@Field(() => Int)
	propertyLikes: number;

	@Field(() => Int)
	propertyComments: number;

	@Field(() => Int)
	propertyRank: number;

	@Field(() => [String])
	propertyImages: string[];

	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@Field(() => Boolean)
	propertySell: boolean;

	@Field(() => Boolean)
	propertyRent: boolean;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date, { nullable: true })
	createdAt?: Date;

	@Field(() => Date, { nullable: true })
	updatedAt?: Date;

	/* From aggregation */

	@Field(() => [MeLiked], { nullable: true })
	meLiked?: MeLiked[];

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Properties {
	@Field(() => [Property])
	list: Property[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
